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
import Navbar from 'src/components/navbar';
import Login from 'src/pages/login';
import Register from 'src/pages/register';

// import PrivateRoute from './auth/PrivateRoute';

const Routes = () => {
  const currentUser = useSelector((state: RootState) => state.user.name);
  const loading = useSelector((state: RootState) => state.user.loading);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/login"
          exact
          render={() =>
            currentUser && !loading ? <Redirect to="/" /> : <Login />
          }
        />
        <Route path="/register" component={Register} />
        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(Routes);
