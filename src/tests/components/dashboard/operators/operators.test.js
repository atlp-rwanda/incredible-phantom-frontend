import React from 'react';
import Operator from '../../../../components/dashboard/operators/Operator';
import RenderWithRedux from '../../../shared/renderWithRedux';

describe('operators page', () => {
  const user = JSON.stringify({
    role: 'admin',
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render operators component', () => {
    RenderWithRedux(<Operator />, {});
  });
});
