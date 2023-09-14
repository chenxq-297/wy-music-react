import React, {memo} from 'react';
import type {ReactNode} from 'react';
import {Link, NavLink} from 'react-router-dom';

import {HeaderWrapper} from './style';
import {Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
}

const WyHeader: React.FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="header-left">
          <Link to={'/'} className="logo sprite_01"></Link>
          <div className="selectList">
            <div className="selectItem">
              <NavLink to={'/discover'}>
                发现音乐
                <i className="sprite_01 icon"></i>
              </NavLink>
            </div>
            <div className="selectItem">
              <NavLink to={'/mine'}>
                我的音乐
                <i className="sprite_01 icon"></i>
              </NavLink>
            </div>
            <div className="selectItem">
              <NavLink to={'/friend'}>
                朋友
                <i className="sprite_01 icon"></i>
              </NavLink>
            </div>
            <div className="selectItem">
              <Link to="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                商城
              </Link>
            </div>
            <div className="selectItem">
              <Link to="https://music.163.com/nmusician/web/index#/" target="_blank" rel="noopener noreferrer">
                音乐人
              </Link>
            </div>
            <div className="selectItem">
              <Link to="https://music.163.com/#/download" target="_blank" rel="noopener noreferrer">
                下载客户端
              </Link>
            </div>
          </div>
        </div>
        <div className="header-right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(WyHeader);
