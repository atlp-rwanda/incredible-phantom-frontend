import '@testing-library/jest-dom';
import React, { Suspense } from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../redux/reducers/rootReducer';
import '../../i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
const RenderWithRedux = (children, reduxState = {}) => {
  const store = createStore(rootReducer, reduxState, applyMiddleware(thunk));
  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>{children}</Router>
      </I18nextProvider>
    </Provider>,
  );
};
export default RenderWithRedux;