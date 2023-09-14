import React, {memo, useEffect} from 'react';
import type {ReactNode} from 'react';

import {useAppSelecor, useAppdispatch} from '@/store';
import {fetchBannerDateAction} from './c-stroe';
import CarouselHeader from './c-cps/carouselHeader';

interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppdispatch();
  useEffect(() => {
    dispatch(fetchBannerDateAction());
  }, []);

  return (
    <>
      {/* 滚动行 */}
      <CarouselHeader />
    </>
  );
};

export default memo(Recommend);
