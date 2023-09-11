import React, {memo} from 'react';
import type {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
}

const WyFooter: React.FC<IProps> = () => {
  return <>AppFooter</>;
};

export default memo(WyFooter);
