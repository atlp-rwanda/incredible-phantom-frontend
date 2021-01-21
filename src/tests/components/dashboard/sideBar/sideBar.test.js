import React from 'react';
import SideBar from '../../../../components/dashboard/sidebar/SideBar';
import SideBarItem from '../../../../components/dashboard/sidebar/SideBarItem';
import { fireEvent } from '@testing-library/react';
import RenderWithRedux from '../../../shared/renderWithRedux';
import Settings from '../../../../components/dashboard/sidebar/SettingsBar';

describe('Side bar', () => {
  const user = JSON.stringify({
    role: 'operator'
  });
  localStorage.setItem('loggedInUser', user);
  it('Should render Side bar component', () => {
    RenderWithRedux(<SideBar />, {});
  });
  it('Should render Side bar item component', () => {
    const wrapper = RenderWithRedux(
      <SideBarItem
        icon={'fa fa-users'}
        text={'sideBar'}
        pageToRender={'drivers'}
      />,
      {}
    );
    const item = wrapper.getByTestId('item');
    fireEvent.click(item);
  });

  it('Should render Side settings bar component', () => {
    const wrapper = RenderWithRedux(<Settings />, {});
    const crat = wrapper.getByTestId('crat');
    fireEvent.click(crat);
    fireEvent.click(crat);
  });
});
