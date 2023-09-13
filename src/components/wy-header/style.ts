import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}

    .header-left {
      display: flex;

      .selectList {
        display: flex;
        line-height: 70px;

        .selectItem {
          position: relative;

          &:hover a,
          .active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }

          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
        }

        a {
          display: block;
          padding: 0 20px;
          color: #ccc;
        }

        :last-of-type {
          position: relative;
          a::after {
            position: absolute;
            content: '';
            width: 28px;
            height: 19px;
            background-image: url(${require('@/assets/img/sprite_01.png')});
            background-position: -190px 0;
            top: 20px;
            right: -15px;
          }
        }
      }

      .logo {
        display: block;
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
