import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { Footer } from '../../components/Footer/Footer';

describe('Footer', () => {
  it('should render the Footer', () => {
    renderWithRedux(<Footer />);
  });
});
