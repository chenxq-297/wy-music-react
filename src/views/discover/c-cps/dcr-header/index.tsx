import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { DcrHdeader } from './style';

interface IProps {
  children?: ReactNode;
}

const DcrHeader: React.FC<IProps> = () => {
  return (
    <DcrHdeader>
      <main className="menus">
        <NavLink to={'/discover/recommend'}>推荐</NavLink>
        <NavLink to={'/discover/ranking'}>排行榜</NavLink>
        <NavLink to={'/discover/songs'}>歌单</NavLink>
        <NavLink to={'/discover/djradio'}>主播电台</NavLink>
        <NavLink to={'/discover/artist'}>歌手</NavLink>
        <NavLink to={'/discover/album'}>新碟上架</NavLink>
      </main>
    </DcrHdeader>
  );
};

export default memo(DcrHeader);
