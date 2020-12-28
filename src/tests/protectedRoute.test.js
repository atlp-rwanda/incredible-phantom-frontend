import React from 'react';
import PrivateRoute from '../helpers/PrivateRoute';
import RenderWithRedux from './shared/renderWithRedux';

describe('Protected Routes', () => {
  const user = JSON.stringify({
    role: 'admin'
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Protected Routes component', () => {
    RenderWithRedux(<PrivateRoute />, {});
  });
  it('Should render private component with token', () => {
    localStorage.setItem('authToken', 'Bearer token');
    const testComponent = () => {
      return <div>Hello</div>;
    };
    RenderWithRedux(<PrivateRoute component={testComponent} />, {});
  });
});
