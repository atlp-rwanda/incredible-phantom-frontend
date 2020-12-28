import React from 'react';
import Roles from '../../../../components/dashboard/roles/Roles';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Roles page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Roles component', () => {
    RenderWithRedux(<Roles />, {});
  });
});
