import React from 'react';
import { fireEvent } from '@testing-library/react';
import NavDashboard from '../../../components/dashboard/navbarDashboard/NavDashboard';
import RenderWithRedux from '../../shared/renderWithRedux';

describe('Side bar navigation', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);

  it('Should navigation bar', () => {
    const toggleSideBar = jest.fn();
    const wrapper = RenderWithRedux(
      <NavDashboard toggleSideBar={toggleSideBar} />,
      {},
    );
    const burger = wrapper.getByTestId('burger');
    fireEvent.click(burger);
  });
});
