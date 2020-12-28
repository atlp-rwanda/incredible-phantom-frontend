import React from 'react';
import { shallow } from 'enzyme';
import App from '../router/App';

describe('home page', () => {
  it('should return the welcoming page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
