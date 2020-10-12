import React, { useState } from 'react';
import { Container, Wrapper } from './styles';
import { Props } from './utils';
import Nav from './nav';
import AddTask from './add-task';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';

const ProjectCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Nav data={data} />
      <Wrapper>
        {data?.tasks?.map((value, key) => (
          <div key={key}>{value.description}</div>
        ))}
        <AddTask data={data} />
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;
