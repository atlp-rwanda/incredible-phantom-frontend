import React from 'react';
import { shallow } from 'enzyme';
import { LangSelection } from '../components/LangSelection/LangSelection';
import { Provider } from 'react-redux';
import store from '../redux/reducers/index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Language Selection', () => {
  it('should return the Language selection component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LangSelection />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
