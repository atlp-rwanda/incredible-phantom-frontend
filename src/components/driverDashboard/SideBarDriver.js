import React from 'react';

const SideBarDriver = ({ toggleModal }) => {
  return (
    <div className='text-center'>
      <div className='mt-10'>
        <p>Speed</p>
        <p>25 km/h</p>
      </div>
      <div className='border-phantomDark rounded bg-green-600 m-12 text-white'>
        <button className='pt-3 pb-3 pl-7 pr-7' onClick={toggleModal}>
          START
        </button>
      </div>
      <div className='border-phantomDark rounded bg-blue-500 m-12 text-white'>
        <button className='pt-3 pb-3 pl-7 pr-7'>PAUSE</button>
      </div>
      <div className='border-phantomDark rounded bg-red-600 m-12 text-white'>
        <button className='pt-3 pb-3 pl-7 pr-7'>STOP</button>
      </div>
    </div>
  );
};

export default SideBarDriver;
