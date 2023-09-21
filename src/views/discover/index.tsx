import store, { useAppSelecor } from '@/store';
import React, { memo } from 'react';
import type { ReactNode } from 'react';
// import {useSelector} from 'react-redux';
import { Outlet } from 'react-router-dom';
import DcrHeader from './c-cps/dcr-header';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
}

const Discover: React.FC<IProps> = () => {
  return (
    <>
      {/* 二级导航 */}
      <DcrHeader />
      {/* 二级导航占位 */}
      <Outlet />
    </>
  );
};

export default memo(Discover);
