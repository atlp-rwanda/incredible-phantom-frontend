import React from 'react';
import { LangSelection } from '../../LangSelection/LangSelection';

const NavDashboard = ({ toggleSideBar, isOpen }) => {
  return (
    <nav className='flex justify-between'>
      <h1 className='text-3xl mt-3'>PHANTOM</h1>
      <div className='left-nav mt-4'>
        <LangSelection />
      </div>

      <div
        className='text-phantomDark md:hidden cursor-pointer z-10'
        onClick={toggleSideBar}
        data-testid='burger'
      >
        {isOpen === 'hidden' ? (
          <svg
            className='w-8 h-8 mt-3 '
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        ) : (
          <svg
            className='w-8 h-8 mt-3 '
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default NavDashboard;
