import styled from 'styled-components';

export const Content = styled.div`
  ${(props) => props.theme.mixin.wrapv2}

  border: 1px solid #d3d3d3;
  background: url(${require('@/assets/img/wrap1.png')}) repeat-y 100% 100%;
  display: flex;

  /* 左 */
  .recommendLeft {
    padding: 20px;
    width: 729px;
    /* 热门推荐 */
    > .hotCommend {
      .recommend-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    /* 新碟上架 */
    > .newAlbum {
      margin-top: 20px;

      main {
        zoom: 1;
        height: 186px;
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        padding-left: 16px;
        background: #f5f5f5;
        display: flex;
        align-items: center;

        .banner {
          width: 640px;
          height: 180px;
          overflow: hidden;
          margin: 0 auto;
          flex: 1;

          .album-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }

        .arrow {
          position: relative;
          top: -12px;
          width: 17px;
          height: 17px;
          cursor: pointer;
        }

        .arrow-left {
          background-position: -260px -75px;
          &:hover {
            background-position: -280px -75px;
          }
        }

        .arrow-right {
          background-position: -300px -75px;
          &:hover {
            background-position: -320px -75px;
          }
        }
      }
    }

    /* 榜单 */
    > .ranking {
      main {
        display: flex;
        height: 472px;
        margin-top: 20px;
        background: url(${require('@/assets/img/recommend-top-bg.png')}) no-repeat;
      }
    }
  }
  /* 右 */
  .recommendRight {
    margin-left: 1px;
    width: 250px;

    .login {
      height: 126px;
      background-position: 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 12px;
        width: 205px;
        padding: 16px 0;
        line-height: 25px;
        margin: 0 auto;
        color: #666;
      }

      a {
        display: inline-block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-decoration: none;
        background-position: 0 -195px;
        text-shadow: 0 1px 0 #8a060b;

        :hover {
          background-position: -110px -195px;
        }
      }
    }

    /* 入驻歌手 */
    .settleSinger {
      padding: 20px;

      .artists {
        .item {
          display: flex;
          height: 62px;
          margin-top: 14px;
          background-color: #fafafa;
          text-decoration: none;

          :hover {
            background-color: #f4f4f4;
          }

          img {
            width: 62px;
            height: 62px;
            /* object-fit: cover; */
          }

          .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 3px 12px;
            border: 1px solid #e9e9e9;
            border-left: none;
            overflow: hidden;

            .name {
              font-size: 14px;
              font-weight: 700;
              color: #000;
            }

            .alias {
              font-size: 12px;
              color: #666;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }

      .apply-for {
        margin-top: 12px;
        a {
          color: #333;
          font-weight: 700;
          text-align: center;
          display: block;
          height: 31px;
          line-height: 31px;
          border-radius: 4px;
          background-color: #fafafa;
          border: 1px solid #c3c3c3;
          text-decoration: none;
        }
      }
    }

    /* 热门主播 */
    .hotAnchor {
      padding: 20px;

      .anchors {
        margin-top: 20px;

        .item {
          display: flex;
          margin-bottom: 10px;
          width: 210px;
          .image {
            img {
              width: 40px;
              height: 40px;
            }
          }

          .info {
            width: 160px;
            margin-left: 8px;
            .name {
              color: #000;
              font-weight: 700;
              margin-top: 3px;
            }

            .position {
              color: #666;

              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
`;
