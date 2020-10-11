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

// import PrivateRoute from './auth/PrivateRoute';

const Routes = () => {
  const currentUser = useSelector((state: RootState) => state.user.name);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          render={() =>
            currentUser ? <Redirect to="/" /> : <div>login Page</div>
          }
        />
        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(Routes);
