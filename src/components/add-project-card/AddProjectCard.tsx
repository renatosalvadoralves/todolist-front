import React, { useState } from 'react';
import Button from 'src/components/button';
import {
  Container,
  Wrapper,
  StyledTitle,
  StyledInput,
  StyledError,
} from './styles';
import { useForm } from 'react-hook-form';
import { IFormInputs, schema, addProject } from './utils';
import Error from 'src/components/error';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';
import Loading from '../loading';
import {
  ADD_PROJECT,
  SET_ERROR,
  SET_LOADING,
} from 'src/redux/project/project-types';

const AddProjectCard: React.FC = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state: RootState) => state.user.data?._id);
  const { loading, error } = useSelector((state: RootState) => state.project);

  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    dispatch({ type: SET_LOADING, payload: true });
    await addProject(userId, data)
      .then(({ data }) => {
        dispatch({ type: SET_ERROR, payload: false });
        dispatch({ type: ADD_PROJECT, payload: data });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: true }));
    dispatch({ type: SET_LOADING, payload: false });
  };

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <StyledTitle>Create a new project</StyledTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledInput
                ref={register}
                name="name"
                placeholder="Create name"
              />
              <Button text="Create Project" />
              {errors.name?.message && (
                <StyledError msg={errors.name?.message} />
              )}
            </form>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default AddProjectCard;
