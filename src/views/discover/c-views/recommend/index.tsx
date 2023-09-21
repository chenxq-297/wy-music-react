import React, { memo, useEffect, useRef } from 'react';
import type { ElementRef, ReactNode } from 'react';

import { Carousel } from 'antd';

import { useAppSelecor, useAppdispatch } from '@/store';
import { fetchArtistDateAction, fetchBannerDateAction, fetchHotRecommendsDateAction, fetchNewAlbumDateAction, fetchRankingDataAction } from './c-stroe';
import CarouselHeader from './c-cps/carouselHeader';
import { Content } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import AreaMenuItem from '@/components/area-menu-item';
import AreaMenuItemV1 from '@/components/area-menu-item-v1';
import RankItem from './c-cps/rankItem';
import AreaHeaderV2 from '@/components/area-header-v2';
import { getImageSize } from '@/utils/format';
import { hotRadios } from './c-services/local_data';

interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  const { hotRecommends, newAlbums, rankings, settleSingers } = useAppSelecor((store) => ({
    hotRecommends: store.recommend.hotRecommends,
    newAlbums: store.recommend.newAlbums,
    rankings: store.recommend.rankings,
    settleSingers: store.recommend.settleSingers,
  }));

  const dispatch = useAppdispatch();
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  useEffect(() => {
    dispatch(fetchBannerDateAction());
    dispatch(fetchHotRecommendsDateAction());
    dispatch(fetchNewAlbumDateAction());
    dispatch(fetchRankingDataAction());

    // 右边请求
    dispatch(fetchArtistDateAction());
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
        {/* 左 */}
        <div className="recommendLeft">
          {/* 热门推荐 */}
          <div className="hotCommend">
            <AreaHeaderV1 title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} moreLink="/discover/songs" />
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
            <main>
              {rankings.map((item) => {
                return <RankItem key={item.id} itemData={item} />;
              })}
            </main>
          </div>
        </div>
        {/* 右 */}
        <div className="recommendRight">
          {/* 登录 */}
          <div className="login sprite_02">
            <p className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#/login" className="sprite_02">
              用户登录
            </a>
          </div>
          {/* 入驻歌手 */}
          <div className="settleSinger">
            <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="#/discover/artist" />
            <div className="artists">
              {settleSingers.map((item) => {
                return (
                  <a href="#/discover/artist" className="item" key={item.id}>
                    <img src={getImageSize(item.picUrl, 80)} alt="" />
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="alia">{item.alias.join(' ')}</div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="apply-for">
              <a href="#/">申请成为网易音乐人</a>
            </div>
          </div>
          {/* 热门主播 */}
          <div className="hotAnchor">
            <AreaHeaderV2 title="热门主播" />
            <div className="anchors">
              {hotRadios.map((item) => {
                return (
                  <div className="item" key={item.picUrl}>
                    <a href="" className="image">
                      <img src={item.picUrl} alt="" />
                    </a>
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="position">{item.position}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default memo(Recommend);
