import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RootState } from 'src/redux/root-reducer';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/register', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
