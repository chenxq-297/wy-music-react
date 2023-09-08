import React, {memo} from 'react';
import type {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
}

const Recommend: React.FC<IProps> = () => {
  return <>123</>;
};

export default memo(Recommend);
