import React from 'react';
import Reset from '../../../components/resetPassword/Reset';
import RenderWithRedux from '../../shared/renderWithRedux';
import { fireEvent } from '@testing-library/react';

describe('Reset pages', () => {
  it('Should test Reset component', () => {
    RenderWithRedux(<Reset />, {});
  });
  it('Should fail  validation on reset page', () => {
    const wrapper = RenderWithRedux(<Reset />);
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
  it('Should pass password validation on rest page', () => {
    const wrapper = RenderWithRedux(<Reset />, {
      resetReducer: {
        success: true,
      },
    });
    const password = wrapper.getByTestId('password');
    const comfirm = wrapper.getByTestId('comfirm-password');
    fireEvent.change(password, {
      target: {
        value: '123abc',
      },
    });
    fireEvent.change(comfirm, {
      target: {
        value: '123abc',
      },
    });
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });

  it('Should fail password validation on rest page(password mismatch)', () => {
    const wrapper = RenderWithRedux(<Reset />);
    const password = wrapper.getByTestId('password');
    const comfirm = wrapper.getByTestId('comfirm-password');
    fireEvent.change(password, {
      target: {
        value: '123abc',
      },
    });
    fireEvent.change(comfirm, {
      target: {
        value: '123ab34',
      },
    });
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
  });
});
