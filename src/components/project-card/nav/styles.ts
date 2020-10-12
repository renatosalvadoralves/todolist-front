import Button from 'src/components/button';
import { lightGray, secondary } from 'src/utils/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  border-bottom: 1px solid ${secondary};
  background-color: ${lightGray};
`;

export const Flex = styled.div`
  display: flex;
  padding: 5px;

  svg {
    cursor: pointer;

    &:first-child {
      margin-right: 12px;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 95px;
`;
