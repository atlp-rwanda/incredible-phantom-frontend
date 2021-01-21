import { fireEvent } from '@testing-library/react';
import React from 'react';
import Operator from '../../../../components/dashboard/operators/Operator';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('operators page', () => {
  const user = JSON.stringify({
    role: 'admin'
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render operators component', () => {
    const wrapper = RenderWithRedux(<Operator />, {
      getOperatorReducer: {
        data: [
          {
            firstName: 'hey',
            lastName: 'hello',
            email: 'hello@hello.hello',
            role: 'operator',
            phone: '089898989',
            nationalId: 13131313131313131313
          }
        ]
      }
    });
    const openBtn = wrapper.getByTestId('openModal+');
    fireEvent.click(openBtn);
    const closeBtn = wrapper.getByTestId('closeModal');
    fireEvent.click(closeBtn);
    fireEvent.click(openBtn);
    const firstName = wrapper.getByTestId('firstName');
    const lastName = wrapper.getByTestId('lastName');
    const email = wrapper.getByTestId('email');
    const phone = wrapper.getByTestId('phone');
    const nationalId = wrapper.getByTestId('nationalId');
    fireEvent.change(firstName, {
      target: {
        value: 'tester'
      }
    });
    fireEvent.change(nationalId, {
      target: {
        value: 1111111111111111
      }
    });
    fireEvent.change(lastName, {
      target: {
        value: 'tester'
      }
    });
    fireEvent.change(email, {
      target: {
        value: 'hello@test.test'
      }
    });
    fireEvent.change(phone, {
      target: {
        value: '0799999999'
      }
    });
    const form = wrapper.getByTestId('form');
    fireEvent.submit(form);
    const close2 = wrapper.getByTestId('closeModal2');
    fireEvent.click(close2);
  });
  it('Should delete operator', () => {
    const wrapper = RenderWithRedux(<Operator />, {
      getOperatorReducer: {
        data: [
          {
            firstName: 'hey',
            lastName: 'hello',
            email: 'hello@hello.hello',
            role: 'operator',
            phone: '089898989',
            nationalId: 13131313131313131313
          }
        ]
      }
    });
    const deleteBtn = wrapper.getByTestId('deleteBtn');
    fireEvent.click(deleteBtn);
  });
});
