import React, {memo} from 'react';
import type {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
}

const Discover: React.FC<IProps> = (props) => {
  return (
    <>
      {props.name}---{props.age}
      123
    </>
  );
};

export default memo(Discover);
