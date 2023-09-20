import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const playerPage: React.FC<IProps> = () => {
  return <>playerPage</>;
};

export default memo(playerPage);
