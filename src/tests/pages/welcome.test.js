import React from 'react';
import { shallow } from 'enzyme';
import App from '../../router/App';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('home page', () => {
  it('should return the welcoming page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
