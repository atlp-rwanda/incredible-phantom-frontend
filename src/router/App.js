import HomePage from '../pages/HomePage';
import React from 'react';
import { error } from '../components/NotFound';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};
export default App;
