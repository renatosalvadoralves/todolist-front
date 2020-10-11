import styled from 'styled-components';
import { error, success } from 'src/utils/styles/colors';

interface Props {
  readonly isError: boolean;
}

export const MsgDiv = styled.div<Props>`
  color: ${({ isError }) => (isError ? error : success)};
`;
