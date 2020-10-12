import styled from 'styled-components';
import { primaryBtn, secondaryBtn } from 'src/utils/styles/colors';

export const StyledButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 7px;
  border-radius: 5px;
  color: ${secondaryBtn};
  border: none;
  background-color: ${primaryBtn};
`;
