import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/root-reducer';
import Navbar from 'src/components/navbar';
import Login from 'src/pages/login';
import Register from 'src/pages/register';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/home';

const Routes = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route
          path="/login"
          exact
          render={() => (user && !loading ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
