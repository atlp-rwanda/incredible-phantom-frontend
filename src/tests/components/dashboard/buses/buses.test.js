import React from 'react';
import RenderWithRedux from '../../../shared/renderWithRedux';
import Buses from '../../../../components/dashboard/buses/Buses';

describe('Buses page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Buses component', () => {
    RenderWithRedux(<Buses />, {});
  });
});
