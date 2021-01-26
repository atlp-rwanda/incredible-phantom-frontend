import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { LandingPage } from '../../pages/LandingPage/LandingPage';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';

describe('Pages', () => {
  it('should render the Landing Page', () => {
    renderWithRedux(<LandingPage />);
  });
  it('should render the About Page', () => {
    renderWithRedux(<About />);
  });
  it('should render the Contact Page', () => {
    renderWithRedux(<Contact />);
  });
});
