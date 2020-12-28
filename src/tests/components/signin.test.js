import React from 'react';
import RenderWithRedux from '../shared/renderWithRedux';
import { fireEvent } from '@testing-library/react';
import LoginForm from '../../components/Signin';

describe('Login form', () => {
  const details = { email: '', password: '' };
  const setDetails = jest.fn();
  it('Should test Signin component', () => {
    RenderWithRedux(<LoginForm details={details} setDetails={setDetails} />);
  });
  it('Should fail  validation on login form', () => {
    const wrapper = RenderWithRedux(<LoginForm details={details} />);
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should fail email validation on login form', () => {
    const wrapper = RenderWithRedux(
      <LoginForm details={details} setDetails={setDetails} />,
    );
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should pass password validation on login form', () => {
    const wrapper = RenderWithRedux(
      <LoginForm details={details} setDetails={setDetails} />,
      {
        isLoggedReducer: {
          success: true,
        },
      },
    );
    const password = wrapper.getByTestId('password');
    fireEvent.change(password, {
      target: {
        value: '123abc',
      },
    });
  });
  it('Should pass email validation on login form', () => {
    const wrapper = RenderWithRedux(
      <LoginForm details={details} setDetails={setDetails} />,
    );
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
