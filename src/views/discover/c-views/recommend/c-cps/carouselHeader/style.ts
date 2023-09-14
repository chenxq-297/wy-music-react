import styled from 'styled-components';

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
    ${(props) => props.theme.mixin.wrapv2}

    .carousel {
      position: relative;
      width: 730px;

      .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
          width: 100%;
        }
      }
    }

    .downWyImg {
      width: 254px;
      height: 270px;
      background: url(${require('@/assets/img/download.png')});
    }

    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${require('@/assets/img/banner_sprite.png')});
        background-color: transparent;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      .left {
        left: -68px;
        background-position: 0 -360px;
      }

      .right {
        right: -68px;
        background-position: 0 -508px;
      }
    }
  }
`;
