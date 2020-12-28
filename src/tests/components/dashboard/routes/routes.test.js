import React from 'react';
import Routes from '../../../../components/dashboard/routes/Routes';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Routes page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Routes component', () => {
    RenderWithRedux(<Routes />, {});
  });
});
