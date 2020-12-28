import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/Logout';
import SideBarItem from './SideBarItem';
const Settings = ({ toggleSideBar }) => {
  const { t } = useTranslation();
  const [drop, setDrop] = useState('hidden');
  const toggleDrop = () => {
    setDrop(drop === 'hidden' ? '' : 'hidden');
  };
  return (
    <div>
      <Link to='#'>
        <div
          data-testid='crat'
          className='flex justify-start mt-1 p-2 hover:bg-gray-800'
          onClick={toggleDrop}
        >
          <i
            className='text-gray-200 mt-1 mr-3 ml-7 fa fa-cog '
            aria-hidden='true'
          ></i>
          <div className='flex'>
            <p>{t('sideBar.settings')}</p>
            {drop === 'hidden' ? (
              <i
                className='fa fa-caret-down text-gray-400 ml-1 text-xl'
                aria-hidden='true'
              ></i>
            ) : (
              <i
                className='fa fa-caret-up text-gray-400 ml-1 text-xl'
                aria-hidden='true'
              ></i>
            )}
          </div>
        </div>
      </Link>

      <div
        className={`${drop} ml-4 text-center absolute z-10 rounded bg-phantomDark p-1`}
        onClick={toggleSideBar}
      >
        <SideBarItem
          icon={'fas fa-user'}
          text={t('sideBar.profile')}
          pageToRender={'profile'}
        />
        <div className='block pr-4 py-2 text-sm text-gray-400 hover:bg-gray-800 cursor-pointer '>
          <Logout />
        </div>
      </div>
    </div>
  );
};
export default Settings;
