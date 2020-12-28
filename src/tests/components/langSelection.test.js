import React from 'react';
import RenderWithRedux from '../shared/renderWithRedux';
import { fireEvent, getByTestId } from '@testing-library/react';
import { LangSelection } from '../../components/LangSelection/LangSelection';

describe('Language selection', () => {
  it('should render the Language selection component', async () => {
    const { container } = RenderWithRedux(<LangSelection />);
    fireEvent.click(getByTestId(container, 'drop-down'));
  });
  it('it should render the translate option dropDown', () => {
    const { container } = RenderWithRedux(<LangSelection />);
    fireEvent.click(getByTestId(container, 'drop-down'));
    fireEvent.click(getByTestId(container, 'trans-fr'));
  });
  it('it should render the translate option dropDown', () => {
    const { container } = RenderWithRedux(<LangSelection />);
    fireEvent.click(getByTestId(container, 'drop-down'));
    fireEvent.click(getByTestId(container, 'trans-en'));
  });
  it('it should render the translate option dropDown', () => {
    const { container } = RenderWithRedux(<LangSelection />);
    fireEvent.click(getByTestId(container, 'drop-down'));
    fireEvent.click(getByTestId(container, 'trans-kin'));
  });
});
