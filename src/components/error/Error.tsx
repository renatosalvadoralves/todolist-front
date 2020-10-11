import React, { memo } from 'react';
import { MsgDiv } from './styles';

interface props {
  msg: string;
  isError?: boolean;
}
const Error: React.FC<props> = ({ msg, isError = true, ...rest }) => (
  <MsgDiv isError={isError} {...rest}>
    {msg}
  </MsgDiv>
);

export default memo(Error);
