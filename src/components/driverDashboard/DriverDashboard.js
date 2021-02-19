import React, { useState } from 'react';
import DriverNav from './driverNav';
import SideBarDriver from './SideBarDriver';
import MapContainer from './Map';
import Profile from '../dashboard/profile/Profile';

const DriverDashboard = () => {
  const [isOpen, setIsOpen] = useState('hidden');
  const [isModalOpen, setIsModalOpen] = useState('hidden');
  const toggleSideBar = () => setIsOpen(isOpen === '' ? 'hidden' : '');
  const toggleModal = () => setIsModalOpen(isModalOpen === '' ? 'hidden' : '');

  const page = localStorage.getItem('pageToRender');

  return (
    <div className=''>
      <DriverNav toggleSideBar={toggleSideBar} />
      <div>
        {page === 'profile' ? (
          <Profile />
        ) : (
          <div className='flex justify-center max-w-full'>
            <div className='w-full'>
              <MapContainer
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
              />
            </div>
            <div
              className={`${isOpen} md:block object-right fixed h-full bg-white right-0 border-gray-900`}
            >
              <SideBarDriver
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
