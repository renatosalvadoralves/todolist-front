import React, { useState } from 'react';
import Layout from 'src/components/layout';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { IFormInputs, signup, schema } from './utils';
import { Container, StyledInput, StyledButton } from './styles';
import Error from 'src/components/error';
import Loading from 'src/components/loading';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<boolean | null>(null);
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setError(true);
      setLoading(false);
      return;
    }
    delete data.confirmPassword;

    await signup(data)
      .then(() => setError(false))
      .catch(() => setError(true));

    setLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <h1>Register</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            ref={register}
            label="Name"
            name="name"
            error={errors.name?.message}
          />
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
            error={errors.password?.message}
          />
          <StyledInput
            ref={register}
            label="Confirme Password"
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword?.message}
          />
          <StyledButton />
        </form>
        {typeof isError === 'boolean' && (
          <Error
            isError={isError}
            msg={isError ? "Sorry, can't register" : 'Registered with success'}
          />
        )}
        <br />
        <Link to="/login">Already have account? Click here</Link>
      </Container>
    </Layout>
  );
};

export default Register;
