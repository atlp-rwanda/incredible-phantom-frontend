import React from 'react';
import { useTranslation } from 'react-i18next';
import SideBarItem from './SideBarItem';
import SettingsBar from './SettingsBar';
import { options, optionAdmin } from './sidebarItemOptions';

const SideBar = ({ toggleSideBar }) => {
  const { t } = useTranslation();
  const loggedInUser = localStorage.getItem('loggedInUser');
  const user = JSON.parse(loggedInUser);

  return (
    <div className='sidebar-left h-screen bg-phantomDark min-w-max text-gray-400 text-center'>
      <h2 className='text-3xl text-gray-300 px-5 py-2'>Dashboard</h2>
      <div className='mt-10' onClick={toggleSideBar}>
        {options.map((option) => (
          <SideBarItem
            icon={option.icon}
            pageToRender={option.pageToRender}
            text={t(option.text)}
            key={option.icon}
          />
        ))}

        {user.role === 'admin' ? (
          <div>
            {optionAdmin.map((option) => (
              <SideBarItem
                icon={option.icon}
                pageToRender={option.pageToRender}
                text={t(option.text)}
                key={option.icon}
              />
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='mt-12'>
        <SettingsBar toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
};

export default SideBar;
