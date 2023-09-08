import React, {memo} from 'react';
import type {ReactNode} from 'react';
import {Link, Outlet} from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
}

const Discover: React.FC<IProps> = () => {
  return (
    <>
      <Link to={'/discover/recommend'}>推荐</Link>
      <Link to={'/discover/ranking'}>排行榜</Link>
      <Link to={'/discover/songs'}>歌单</Link>
      <Link to={'/discover/djradio'}>主播电台</Link>
      <Link to={'/discover/artist'}>歌手</Link>
      <Link to={'/discover/album'}>新碟上架</Link>
      <Outlet />
    </>
  );
};

export default memo(Discover);
