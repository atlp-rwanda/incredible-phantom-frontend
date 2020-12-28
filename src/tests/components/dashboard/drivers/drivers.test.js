import React from 'react';
import Drivers from '../../../../components/dashboard/drivers/Drivers';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Drivers page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render drivers component', () => {
    RenderWithRedux(<Drivers />, {});
  });
});
