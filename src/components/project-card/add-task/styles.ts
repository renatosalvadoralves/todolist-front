import { lightGray, midGray } from 'src/utils/styles/colors';
import styled from 'styled-components';
import Input from 'src/components/input';
import Button from 'src/components/button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  border-top: 1px solid ${midGray};
  background-color: ${lightGray};
`;

export const StyledInput = styled(Input)`
  margin-right: 20px;
`;

export const StyledButton = styled(Button)`
  width: 35%;
`;
