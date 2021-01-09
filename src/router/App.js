import React from 'react';
import { LandingPage } from '../pages/landingPage';
import { error } from '../componets/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Counter from '../componets/Counter';
import Profile  from '../componets/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/counter' component={Counter} />
        <Route path='/profile' component={Profile} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};
export default App;
