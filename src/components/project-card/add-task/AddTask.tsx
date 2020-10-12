import React from 'react';
import { Container, StyledInput, StyledButton } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';
import Loading from 'src/components/loading';
import { Props } from '../utils';
import { addTask, IFormInputs, schema } from './utils';
import { ADD_TASK, SET_ERROR, SET_LOADING } from 'src/redux/task/task-types';

const AddTask: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.data?._id);

  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (body: IFormInputs) => {
    dispatch({ type: SET_LOADING, payload: true });

    await addTask(userId, data._id, body)
      .then(({ data }) => {
        dispatch({ type: SET_ERROR, payload: false });
        dispatch({ type: ADD_TASK, payload: data });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: true }));
    dispatch({ type: SET_LOADING, payload: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <StyledInput ref={register} name="description" placeholder="Task" />
        <StyledButton />
      </Container>
    </form>
  );
};

export default AddTask;
