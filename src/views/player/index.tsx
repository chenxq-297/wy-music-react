import React, { memo, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from './style';
import { Link } from 'react-router-dom';
import { formatTime, getImageSize } from '@/utils/format';
import { Slider } from 'antd';
import { useAppSelecor } from '@/store';

interface IProps {
  children?: ReactNode;
}

function getSongPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

const player: React.FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const { currentSong } = useAppSelecor((state) => ({
    currentSong: state.player.currentSong,
  }));

  // 播放器 开始结束
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = (e: any) => {
    console.log(e);
  };
  const handleTimeEnded = () => {
    console.log('end');
  };

  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停 改变isPlaying的状态
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false));
    setIsPlaying(!isPlaying);
  }
  const handleChangeMusic = (bool = true) => {
    console.log(bool);
  };
  const handleChangePlayMode = () => {
    console.log(123);
  };

  // 当歌曲发生改变
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
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
          <BarControl isplaying={isPlaying}>
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
                <Slider
                  step={0.5}
                  value={progress}
                  tooltip={{ formatter: null }}
                  // onChange={handleSliderChanging}
                  // onAfterChange={handleSliderChanged}
                />
                <div className="time">
                  <span className="current">{formatTime(1)}</span>
                  <span className="divider">/</span>
                  <span className="duration">{formatTime(1)}</span>
                </div>
              </div>
            </div>
          </BarPlayerInfo>
          <BarOperator playMode={3}>
            <div className="left">
              <button className="btn pip"></button>
              <button className="btn sprite_playbar favor"></button>
              <button className="btn sprite_playbar share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="btn sprite_playbar volume"></button>
              <button className="btn sprite_playbar loop" onClick={() => handleChangePlayMode}></button>
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
