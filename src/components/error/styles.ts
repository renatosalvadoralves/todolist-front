import styled from 'styled-components';
import { error, success } from 'src/utils/styles/colors';

interface Props {
  readonly isError: boolean;
}

export const MsgDiv = styled.div<Props>`
  font-size: 14px;
  color: ${({ isError }) => (isError ? error : success)};
`;
