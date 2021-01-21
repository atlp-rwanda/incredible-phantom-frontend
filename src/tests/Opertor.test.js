import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { fireEvent, screen } from '@testing-library/react';
import { RegisterOpage } from '../pages/RegisterOPage';

describe('Pages', () => {
  it('should render the Landing Page', () => {
    renderWithRedux(<RegisterOpage />);
    screen.debug();
  });
  
});