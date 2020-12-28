import React from 'react';
import Profile from '../../../../components/dashboard/profile/Profile';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('Profile page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Profile component', () => {
    RenderWithRedux(<Profile />, {});
  });
});
