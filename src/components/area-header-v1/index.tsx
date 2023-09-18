import React, { memo, useEffect } from 'react';
import type { ReactNode } from 'react';
import { HeaderV1Wrapper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeader: React.FC<IProps> = (props) => {
  const { title = '', keywords = [], moreText = '更多', moreLink = '/' } = props;
  return (
    <HeaderV1Wrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  );
};

export default memo(AreaHeader);
