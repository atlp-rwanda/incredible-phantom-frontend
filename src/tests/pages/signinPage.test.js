import React from 'react';
import RenderWithRedux from '../shared/renderWithRedux';
import { fireEvent } from '@testing-library/react';
import Signin from '../../pages/SigninPage';

describe('Signin page', () => {
  it('Should test Signin component', () => {
    const user = JSON.stringify({
      role: 'driver',
    });
    localStorage.setItem('loggedInUser', user);
    RenderWithRedux(<Signin />, { auth: { isLoggedIn: true } });
  });
  it('Should test Signin component admin', () => {
    const user = JSON.stringify({
      role: 'admin',
    });
    localStorage.setItem('loggedInUser', user);
    RenderWithRedux(<Signin />, { auth: { isLoggedIn: true, error: 'fuck' } });
  });
  it('Should fail  validation on login form', () => {
    const wrapper = RenderWithRedux(<Signin />);
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should fail email validation on login form', () => {
    const wrapper = RenderWithRedux(<Signin />);
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should pass password validation on login form', () => {
    const wrapper = RenderWithRedux(<Signin />, {
      isLoggedReducer: {
        success: true,
      },
    });
    const password = wrapper.getByTestId('password');
    fireEvent.change(password, {
      target: {
        value: '123abc',
      },
    });
  });

  it('Should pass email validation on login form', () => {
    const wrapper = RenderWithRedux(<Signin />);
    const email = wrapper.getByTestId('email');
    fireEvent.change(email, {
      target: {
        value: 'test@test.test',
      },
    });
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
});
