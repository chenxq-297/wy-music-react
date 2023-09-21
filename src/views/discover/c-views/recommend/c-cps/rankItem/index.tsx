import { getImageSize } from '@/utils/format';
import React, { memo } from 'react';
import type { ReactNode } from 'react';

import { RankingItemWrapper } from './style';
import { useAppdispatch } from '@/store';
import { playCurrentSongAction } from '@/views/player/c-store';

interface IProps {
  children?: ReactNode;
  itemData: any;
}

const RankItem: React.FC<IProps> = (props) => {
  const { itemData } = props;
  const dispatch = useAppdispatch();

  const handlePlayClick = (id: number) => {
    dispatch(playCurrentSongAction(id));
  };

  return (
    <RankingItemWrapper>
      <header>
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </header>
      <section>
        {itemData.tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play" onClick={() => handlePlayClick(item.id)}></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <footer>
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </footer>
    </RankingItemWrapper>
  );
};

export default memo(RankItem);
