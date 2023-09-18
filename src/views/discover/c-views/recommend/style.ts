import styled from 'styled-components';

export const Content = styled.div`
  ${(props) => props.theme.mixin.wrapv2}

  border: 1px solid #d3d3d3;
  background: url(${require('@/assets/img/wrap1.png')}) repeat-y 100% 100%;
  display: flex;

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

    > .ranking {
      main {
        display: flex;

        height: 472px;
        margin-top: 20px;
        background: url(${require('@/assets/img/recommend-top-bg.png')}) no-repeat;
      }
    }
  }
  .recommendRight {
    margin-left: 1px;
    width: 250px;
  }
`;
