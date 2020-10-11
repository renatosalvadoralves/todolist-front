import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { RootState } from './redux/root-reducer';

import Login from 'src/pages/login';

// import PrivateRoute from './auth/PrivateRoute';

const Routes = () => {
  const currentUser = useSelector((state: RootState) => state.user.name);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(Routes);