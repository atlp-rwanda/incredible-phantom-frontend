import React from 'react';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { About } from '../pages/About/About';
import { NotFound } from '../components/NotFound/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import '../styles/main.css';
import { Contact } from '../pages/Contact/Contact';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import SigninPage from '../pages/SigninPage';
import Forgot from '../components/resetPassword/Forgot';
import Reset from '../components/resetPassword/Reset';
import Logout from '../components/Logout/Logout';
import Dashboard from '../components/dashboard/Dashboard';
import PrivateRoute from '../helpers/PrivateRoute';
import DriverDashboard from '../components/driverDashboard/DriverDashboard';
import TrackBus from '../components/trackBus/TrackBus';

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Helmet>
        <title>{t('webtitle')}</title>
      </Helmet>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/forgotpassword' exact component={Forgot} />
        <Route path='/reset' exact component={Reset} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/signin' component={SigninPage} />
        <Route path='/forgotpassword' exact component={Forgot} />
        <Route path='/reset' exact component={Reset} />
        <Route path='/trackBus' exact component={TrackBus} />
        <PrivateRoute path={'/dashboard'} exact component={Dashboard} />
        <PrivateRoute
          path={'/dashboard/driver'}
          exact
          component={DriverDashboard}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
