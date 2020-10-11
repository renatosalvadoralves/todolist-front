import React, { memo, ReactNode } from 'react';
import { LayoutContainer } from './styles';

interface props {
  children: ReactNode;
}
const Layout: React.FC<props> = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
);

export default memo(Layout);
