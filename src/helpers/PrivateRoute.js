import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path }) => {
  const token = localStorage.getItem('authToken');
  return (
    <Route
      path={path}
      exact
      render={() => (token ? <Component /> : <Redirect to='/signin' />)}
    />
  );
};

export default PrivateRoute;
