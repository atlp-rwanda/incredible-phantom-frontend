import React from 'react';
import RenderWithRedux from '../shared/renderWithRedux';
import { fireEvent, getByTestId } from '@testing-library/react';
import { NavigationBar } from '../../components/Nav/NavigationBar';
import { Responsive } from '../../components/Nav/Responsive';

describe('Navigation Bar', () => {
  it('should render the Navigation Bar', async () => {
    RenderWithRedux(<NavigationBar />);
  });
  it('it should render the repsonsive Nav Bar', () => {
    const { container } = RenderWithRedux(<Responsive />);
    fireEvent.click(getByTestId(container, 'burger'));
  });
  it('it should respond to path change on link click', () => {
    const { container } = RenderWithRedux(<Responsive />);
    fireEvent.click(getByTestId(container, 'home'));
  });
  it('it should respond to path change on link click', () => {
    const { container } = RenderWithRedux(<Responsive />);
    fireEvent.click(getByTestId(container, 'about'));
  });
  it('it should respond to path change on link click', () => {
    const { container } = RenderWithRedux(<Responsive />);
    fireEvent.click(getByTestId(container, 'contact'));
  });
  it('it should respond to path change on link click', () => {
    const { container } = RenderWithRedux(<Responsive />);
    fireEvent.click(getByTestId(container, 'terms'));
  });
});
