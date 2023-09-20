import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const WyFooter: React.FC<IProps> = () => {
  return <div style={{ paddingBottom: '48px' }}>AppFooter</div>;
};

export default memo(WyFooter);
