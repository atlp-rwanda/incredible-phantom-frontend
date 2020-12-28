import React from 'react';
import LandingPage from '../pages/LandingPage';
import error from '../components/NotFound';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};
export default App;
