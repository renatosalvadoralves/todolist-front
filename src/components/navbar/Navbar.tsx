import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';
import { Container } from './styles';

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.name);

  return (
    <Container>
      <div>EDirectInsure TODO List</div>
      {user && <div>dsdsdsfdsg</div>}
    </Container>
  );
};

export default Navbar;
