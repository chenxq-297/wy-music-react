import React, { memo, useEffect, useRef } from 'react';
import type { ElementRef, ReactNode } from 'react';

import { Carousel } from 'antd';

import { useAppSelecor, useAppdispatch } from '@/store';
import { fetchBannerDateAction, fetchHotRecommendsDateAction, fetchNewAlbumDateAction } from './c-stroe';
import CarouselHeader from './c-cps/carouselHeader';
import { Content } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import AreaMenuItem from '@/components/area-menu-item';
import AreaMenuItemV1 from '@/components/area-menu-item-v1';

interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  const { hotRecommends, newAlbums } = useAppSelecor((store) => ({
    hotRecommends: store.recommend.hotRecommends,
    newAlbums: store.recommend.newAlbums,
  }));

  const dispatch = useAppdispatch();
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  useEffect(() => {
    dispatch(fetchBannerDateAction());
    dispatch(fetchHotRecommendsDateAction());
    dispatch(fetchNewAlbumDateAction());
  }, []);

  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }

  return (
    <>
      {/* 滚动行 */}
      <CarouselHeader />
      {/* main */}
      <Content>
        <div className="recommendLeft">
          {/* 热门推荐 */}
          <div className="hotCommend">
            <AreaHeaderV1
              title="热门推荐"
              keywords={['华语', '流行', '摇滚', '民谣', '电子']}
              moreLink="/discover/songs"
            />
            <div className="recommend-list">
              {hotRecommends?.map((item) => {
                return <AreaMenuItem key={item.id} itemData={item} />;
              })}
            </div>
          </div>
          {/* 新碟上架 */}
          <div className="newAlbum">
            <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
            <main>
              <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
              <div className="banner">
                <Carousel ref={bannerRef} dots={false} speed={1500}>
                  {[0, 1].map((item) => {
                    return (
                      <div key={item}>
                        <div className="album-list">
                          {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                            return <AreaMenuItemV1 key={album.id} itemData={album} />;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
            </main>
          </div>
          {/* 榜单 */}
          <div className="ranking">
            <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
            <main></main>
          </div>
        </div>
        <div className="recommendRight">321</div>
      </Content>
    </>
  );
};

export default memo(Recommend);
