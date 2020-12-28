import React from 'react';
import RenderWithRedux from '../../shared/renderWithRedux';
import { ComponentToRender } from '../../../components/dashboard/componentToRender';

describe('Component to render', () => {
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'roles');
    RenderWithRedux(<ComponentToRender />);
  });
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'routes');
    RenderWithRedux(<ComponentToRender />);
  });
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'drivers');
    RenderWithRedux(<ComponentToRender />);
  });
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'operators');
    RenderWithRedux(<ComponentToRender />);
  });
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'buses');
    RenderWithRedux(<ComponentToRender />);
  });
  it('Should navigation bar', () => {
    localStorage.setItem('pageToRender', 'profile');
    RenderWithRedux(<ComponentToRender />);
  });
});
