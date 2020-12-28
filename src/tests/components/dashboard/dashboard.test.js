import React from 'react';
import RenderWithRedux from '../../shared/renderWithRedux';
import Dashboard from '../../../components/dashboard/Dashboard';
import { fireEvent } from '@testing-library/react';

describe('Dashboard', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Dashboard component overview', () => {
    const wrapper = RenderWithRedux(<Dashboard />, {});
    const burger = wrapper.getByTestId('burger');
    fireEvent.click(burger);
    fireEvent.click(burger);
  });
});
