import styled from "styled-components";
import { error } from "src/utils/styles/colors"

export const Label = styled.label`
  position: relative;
  font-size: 11px;
`;

export const ErrorSpan = styled.span`
  position: absolute;
  top: 55px;
  color: ${error};
  font-size: 11px;
`;

export const StyledInput = styled.input`
  width: 100%;
  display: block;
  padding: 5px;
  box-sizing: border-box;
`;
