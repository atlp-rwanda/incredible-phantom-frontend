import React from 'react';
import RenderWithRedux from '../../../shared/renderWithRedux';
import AssignDriver from '../../../../components/dashboard/assignDriver/AssignDriver';

describe('Buses page', () => {
  const user = JSON.stringify({
    role: 'operator',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Assign Driver component', () => {
    RenderWithRedux(<AssignDriver />, {});
  });
});
