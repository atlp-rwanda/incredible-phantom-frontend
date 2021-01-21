import React from 'react';
import { fireEvent } from '@testing-library/react';
import Logout from '../../components/Logout/Logout';
import RenderWithRedux from '../shared/renderWithRedux';
describe('Tests Logout Component ', () => {
  it('Should render Logout component', () => {
    RenderWithRedux(<Logout />, {});
  });
  it('Should  open Logout modal ', () => {
    const wrapper = RenderWithRedux(<Logout />, {});
    const button = wrapper.getByTestId('btn-logout');
    fireEvent.click(button);
    const history = wrapper.getByTestId('logout');
    fireEvent.click(history);
  });
});
