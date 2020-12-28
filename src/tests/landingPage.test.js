import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { NotFound } from '../components/NotFound/NotFound';
import { Contact } from '../pages/Contact/Contact';
import { About } from '../pages/About/About';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('home page', () => {
  it('should return the Landing page', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the not found page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the Contact page', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the About page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
