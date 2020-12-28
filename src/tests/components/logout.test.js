import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Logout from '../../components/Logout/Logout';
import RenderWithRedux from '../shared/renderWithRedux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../components/Logout/Logout';

describe('Tests Logout Component ', () => {
  it('Should render Logout component', () => {
    RenderWithRedux(<Logout />, {});
  });
  it('Should  open Logout modal ', () => {
    const wrapper = RenderWithRedux(<Logout />, {});
    const button = wrapper.getByTestId('btn-logout');
    fireEvent.click(button);
  });
  it('should logout when button clicked',()=>{
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logout();
  })
});
