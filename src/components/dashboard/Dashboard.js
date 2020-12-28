import React, { useState } from 'react';
import { ComponentToRender } from './componentToRender';
import NavDashboard from './navbarDashboard/NavDashboard';
import SideBar from './sidebar/SideBar';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState('hidden');
  const toggleSideBar = () => setIsOpen(isOpen === '' ? 'hidden' : '');

  return (
    <div className=''>
      <div className='dashboard-container grid grid-cols-8 gap-2 '>
        <div className={`${isOpen} md:block z-10`}>
          <SideBar toggleSideBar={toggleSideBar} />
        </div>
        <div className='main-right px-4 col-span-7 ... '>
          <div className='w-100'>
            <NavDashboard toggleSideBar={toggleSideBar} isOpen={isOpen} />
            <div className={`${isOpen} h-full`}></div>
            <div className='mt-2 '>
              <ComponentToRender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
