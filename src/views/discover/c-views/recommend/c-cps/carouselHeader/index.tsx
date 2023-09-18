import React, { memo, useRef, useState } from 'react';
import type { ElementRef, ReactNode } from 'react';

import { Carousel } from 'antd';

import { BannerWrapper } from './style';
import { useAppSelecor } from '@/store';

interface IProps {
  children?: ReactNode;
}

const CarouselHeader: React.FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const { banners } = useAppSelecor((state) => ({
    banners: state.recommend.banners,
  }));
  const onChange = (currentSlide: number) => {
    setCurrentIndex(currentSlide);
  };
  let bgImageUrl;
  if (currentIndex >= 0 && banners?.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20';
  }

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center/6000px`,
      }}>
      <div className="banner wrap-v2">
        {/* 轮播 */}
        <Carousel
          className="carousel"
          ref={bannerRef}
          afterChange={onChange}
          effect="fade"
          autoplaySpeed={10000}
          autoplay>
          {banners?.map((item) => {
            return (
              <div className="banner-item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.typeTitle} />
              </div>
            );
          })}
        </Carousel>
        {/* 点击下载 */}
        <a className="downWyImg" href="https://music.163.com/#/download" target="_blank" rel="noreferrer"></a>
        {/* 控制点击 */}
        <div className="control">
          <button className="btn left" onClick={() => bannerRef.current?.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current?.next()}></button>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default memo(CarouselHeader);
