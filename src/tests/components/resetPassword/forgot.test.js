import React from 'react';
import Forgot from '../../../components/resetPassword/Forgot';
import RenderWithRedux from '../../shared/renderWithRedux';
import { fireEvent } from '@testing-library/react';

describe('Forgot pages', () => {
  it('Should render', () => {
    const wrapper = RenderWithRedux(<Forgot />);
    expect(wrapper.getByTestId('footer')).toBeInTheDocument();
  });
  it('Should fail email validation on forgot page', () => {
    const wrapper = RenderWithRedux(<Forgot />);
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should pass email validation on forgot page', () => {
    const wrapper = RenderWithRedux(<Forgot />);
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
