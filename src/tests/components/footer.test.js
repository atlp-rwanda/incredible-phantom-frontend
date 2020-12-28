import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../components/Footer/Footer';

describe('Footer', () => {
  it('should return the Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
