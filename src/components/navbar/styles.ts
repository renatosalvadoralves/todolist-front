import styled from 'styled-components'
import { secondary, midGray, lightGray } from "src/utils/styles/colors"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 20px;
  color: ${secondary};
  background-color: ${lightGray};
  border-bottom: 1px solid ${midGray};
`
