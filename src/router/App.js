import React from 'react';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { About } from '../pages/About/About';
import { NotFound } from '../components/NotFound/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Counter from '../components/Counter';
import { Contact } from '../pages/Contact/Contact';
import { Skeleton } from '../components/Skeleton/Skeleton';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Helmet>
        <title>{t('webtitle')}</title>
      </Helmet>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/counter" component={Counter} />
        <Route path="/skeleton" component={Skeleton} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
