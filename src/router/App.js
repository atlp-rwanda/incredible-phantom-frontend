import React from 'react';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { About } from '../pages/About/About';
import { NotFound } from '../components/NotFound/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Contact } from '../pages/Contact/Contact';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Forgot from '../components/resetPassword/Forgot';
import Reset from '../components/resetPassword/Reset';
import SigninPage from '../pages/SigninPage';

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
        <Route path='/signin' component={SigninPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
