import React, {memo} from 'react';
import type {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
}

const Foucs: React.FC<IProps> = () => {
  return <>Foucs</>;
};

export default memo(Foucs);
