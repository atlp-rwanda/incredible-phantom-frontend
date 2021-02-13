import React from 'react';
import { fireEvent } from '@testing-library/react';
import Profile from '../../../../components/dashboard/profile/Profile';
import RenderWithRedux from '../shared/renderWithRedux';

describe('Tests Profile Component ', () => {
  it('Should render Profile component', () => {
    RenderWithRedux(<Profile />, {});
  });
  it('Should  open UpdateProfile modal ', () => {
    const wrapper = RenderWithRedux(<Profile />, {});
    const button = wrapper.getByTestId('submit1');
    fireEvent.click(button);
  });
});
