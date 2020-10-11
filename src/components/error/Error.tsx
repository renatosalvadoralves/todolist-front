import React, { memo } from 'react';
import { MsgDiv } from './styles';

interface props {
  msg: string;
}
const Error: React.FC<props> = ({ msg, ...rest }) => (
  <MsgDiv {...rest}>{msg}</MsgDiv>
);

export default memo(Error);
