import styled from 'styled-components';
import { midGray } from 'src/utils/styles/colors';
import Input from 'src/components/input';
import Error from 'src/components/error';

export const Container = styled.div`
  position: relative;
  min-width: 30%;
  border: 1px solid ${midGray};
  margin: 5px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 10px;
`;

export const StyledTitle = styled.h1`
  font-size: 22px;
  padding-bottom: 8px;
`;

export const StyledError = styled(Error)`
  position: absolute;
  padding-top: 4px;
`;
