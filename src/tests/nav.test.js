import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from '../components/Nav/NavigationBar';
import { Responsive } from '../components/Nav/Responsive';
import { Provider } from 'react-redux';
import store from '../redux/reducers/index';

describe('Navigation Bar', () => {
  it('should return the Navigation Bar', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavigationBar />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the Navigation Bar responsive', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Responsive />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
