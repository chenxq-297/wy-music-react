import React, {memo} from 'react';
import type {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
}

const Album: React.FC<IProps> = () => {
  return <></>;
};

export default memo(Album);
