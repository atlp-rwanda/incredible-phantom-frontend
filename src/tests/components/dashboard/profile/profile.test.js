import React from 'react';
import { fireEvent } from '@testing-library/react';
import Profile from '../../../../components/dashboard/profile/Profile';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Tests Profile Component ', () => {
  it('Should render Profile component', () => {
    RenderWithRedux(<Profile />, {});
  });
  it('Should  open UpdateProfile modal ', () => {
    const wrapper = RenderWithRedux(<Profile />, {
      viewProfileReducer: {
        data: {
          data: {
            firstName: 'firstName',
            lastName: 'lastName',
            email: 'eamil',
            phone: 'phone',
            nationalId: 'nationaId',
            role: 'role'
          }
        }
      }
    });
    const openModel = wrapper.getByTestId('submit1');
    fireEvent.click(openModel);
    const firstName = wrapper.getByTestId('firstName');
    const lastName = wrapper.getByTestId('lastName');
    const phone = wrapper.getByTestId('phone');
    const cancelBtn = wrapper.getByTestId('cancel1');
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
    const button = wrapper.getByTestId('save');
    fireEvent.click(button);
    fireEvent.click(cancelBtn);
  });
});
