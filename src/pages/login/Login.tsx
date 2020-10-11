import React from 'react';
import Layout from 'src/components/layout';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { IFormInputs, login, schema } from './utils';
import { Container, StyledInput, StyledButton } from './styles';
import Error from 'src/components/error';
import Loading from 'src/components/loading';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_CURRENT_USER_FAILURE,
  SET_CURRENT_USER_SUCCESS,
  SET_LOADING,
} from 'src/redux/user/user-types';
import { RootState } from 'src/redux/root-reducer';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    dispatch({ type: SET_LOADING, payload: true });
    await login(data)
      .then((res) =>
        dispatch({ type: SET_CURRENT_USER_SUCCESS, payload: res.data }),
      )
      .catch(() => dispatch({ type: SET_CURRENT_USER_FAILURE }));

    dispatch({ type: SET_LOADING, payload: false });
  };

  if (user.loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>Login</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            ref={register}
            label="Email"
            name="email"
            error={errors.email?.message}
          />
          <StyledInput
            ref={register}
            label="Password"
            name="password"
            type="password"
            error={errors.email?.message}
          />
          <StyledButton />
        </form>
        {user.error && <Error msg="Sorry, can't login" />}
      </Container>
    </Layout>
  );
};

export default Login;
