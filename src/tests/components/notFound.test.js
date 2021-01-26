import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { NotFound } from '../../components/NotFound/NotFound';

describe('Footer', () => {
  it('should render the Footer', () => {
    renderWithRedux(<NotFound />);
  });
});
