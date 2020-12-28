import { LandingPage } from '../pages/landingPage';
import { error } from '../componets/NotFound';

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};
