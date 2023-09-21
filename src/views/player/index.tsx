import React, { memo, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from './style';
import { Link } from 'react-router-dom';
import { formatTime, getImageSize } from '@/utils/format';
import { Slider, message } from 'antd';
import { useAppSelecor, useAppdispatch } from '@/store';
import { shallowEqual } from 'react-redux';
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from './c-store';

interface IProps {
  children?: ReactNode;
}

function getSongPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

const player: React.FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelecor(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
    }),
    shallowEqual
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppdispatch();

  // 音乐播放的进度
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current!.currentTime * 1000;

    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }

    // 歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (lyric.time > currentTime) {
        index = i - 1;
        break;
      }
    }
    if (lyricIndex === index || index === -1) return;
    dispatch(changeLyricIndexAction(index));

    // 5.展示对应的歌词
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0,
    });
  };
  const handleTimeEnded = () => {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0;
      audioRef.current?.play();
    } else {
      handleChangeMusic(true);
    }
  };

  // 1.控制播放器的播放/暂停
  function handlePlayBtnClick() {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }
  // 上一首下一首
  const handleChangeMusic = (isNext = true) => {
    dispatch(changeMusicAction(isNext));
  };
  // 播放模式
  const handleChangePlayMode = () => {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) newPlayMode = 0;
    dispatch(changePlayModeAction(newPlayMode));
  };
  // 拖动进度条
  function handleSliderChanging(value: number) {
    setIsSliding(true);

    setProgress(value);
    setCurrentTime((value / 100) * duration);
  }
  // 点击进度条
  function handleSliderChanged(value: number) {
    audioRef.current!.currentTime = ((value / 100) * duration) / 1000;

    setProgress(value);
    setCurrentTime((value / 100) * duration);
    setIsSliding(false);
  }

  // 当歌曲发生改变
  useEffect(() => {
    // 播放并且修改时长
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    setDuration(currentSong.dt);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  return (
    <>
      <PlayerBarWrapper className="sprite_playbar">
        <main>
          <BarControl $isPlaying={isPlaying}>
            <button className="btn sprite_playbar prev" onClick={() => handleChangeMusic(false)}></button>
            <button className="btn sprite_playbar play" onClick={() => handlePlayBtnClick()}></button>
            <button className="btn sprite_playbar next" onClick={() => handleChangeMusic()}></button>
          </BarControl>
          <BarPlayerInfo>
            <Link to="/player">
              <img className="image" src={getImageSize(currentSong?.al?.picUrl, 50)} alt="" />
            </Link>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong.name}</span>
                <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
              </div>
              <div className="progress">
                {/* Slider组件 */}
                <Slider step={0.5} value={progress} tooltip={{ formatter: null }} onChange={handleSliderChanging} onAfterChange={handleSliderChanged} />
                <div className="time">
                  <span className="current">{formatTime(currentTime)}</span>
                  <span className="divider">/</span>
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </BarPlayerInfo>
          <BarOperator $playMode={playMode}>
            <div className="left">
              <button className="btn pip"></button>
              <button className="btn sprite_playbar favor"></button>
              <button className="btn sprite_playbar share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="btn sprite_playbar volume"></button>
              <button className="btn sprite_playbar loop" onClick={() => handleChangePlayMode()}></button>
              <button className="btn sprite_playbar playlist"></button>
            </div>
          </BarOperator>
        </main>
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
      </PlayerBarWrapper>
    </>
  );
};

export default memo(player);
