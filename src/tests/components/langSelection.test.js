import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { fireEvent, getByTestId } from '@testing-library/react';
import { LangSelection } from '../../components/LangSelection/LangSelection';

let wrapper;

beforeEach(() => {
  wrapper = renderWithRedux(<LangSelection />);
});

describe('Language selection', () => {
  it('should render the Language selection component', async () => {
    fireEvent.click(getByTestId(wrapper.container, 'drop-down'));
  });
  it('it should render the translate option dropDown', () => {
    fireEvent.click(getByTestId(wrapper.container, 'drop-down'));
    fireEvent.click(getByTestId(wrapper.container, 'trans-fr'));
  });
  it('it should render the translate option dropDown', () => {
    fireEvent.click(getByTestId(wrapper.container, 'drop-down'));
    fireEvent.click(getByTestId(wrapper.container, 'trans-en'));
  });
  it('it should render the translate option dropDown', () => {
    fireEvent.click(getByTestId(wrapper.container, 'drop-down'));
    fireEvent.click(getByTestId(wrapper.container, 'trans-kin'));
  });
});
