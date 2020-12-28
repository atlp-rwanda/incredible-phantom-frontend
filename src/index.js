import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { Provider } from 'react-redux';
import store from './redux/reducers/index';
import { I18nextProvider } from 'react-i18next';
import { SkeletonLanding } from './skeletons/skeletonLanding';
import './i18n';
import './styles/tailwind.css';
import './styles/index.scss';
import i18n from './i18n';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<SkeletonLanding />}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
