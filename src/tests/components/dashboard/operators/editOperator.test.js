import { fireEvent } from '@testing-library/react';
import React from 'react';
import EditOperator from '../../../../components/editOperator';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Drivers page', () => {
  const user = JSON.stringify({
    role: 'admin'
  });
  localStorage.setItem('loggedInUser', user);

  it('Should render drivers component', () => {
    const wrapper = RenderWithRedux(
      <EditOperator
        numberID={12131313131313131}
        inputFirstnane={'hello'}
        inputLastnane={'hellooo'}
        inputId={12}
        inputEmail={'test'}
        inputPhone={'233232323'}
      />,
      {}
    );
    const openBtn = wrapper.getByTestId('openModal');
    fireEvent.click(openBtn);
    const closeBtn = wrapper.getByTestId('closeModal');
    fireEvent.click(closeBtn);
    fireEvent.click(openBtn);
    const firstName = wrapper.getByTestId('firstName');
    const lastName = wrapper.getByTestId('lastName');
    const phone = wrapper.getByTestId('phone');
    fireEvent.change(firstName, {
      target: {
        value: '123abc'
      }
    });
    fireEvent.change(lastName, {
      target: {
        value: '123abc'
      }
    });
    fireEvent.change(phone, {
      target: {
        value: '123abc'
      }
    });
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
    fireEvent.click(openBtn);
    const close2 = wrapper.getByTestId('closeModal2');
    fireEvent.click(close2);
  });
});
