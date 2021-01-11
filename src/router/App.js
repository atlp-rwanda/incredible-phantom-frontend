import React from 'react';
import LandingPage from '../pages/landingPage';
import error from '../components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Counter from '../components/Counter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/counter' component={Counter} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};
export default App;
