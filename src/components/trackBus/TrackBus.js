import React, { useState } from 'react';
import { NavigationBar } from '../Nav/NavigationBar';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import mapStyles from '../driverDashboard/mapStyle';
import './track.scss';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const libraries = ['places'];
const center = {
  lat: -1.970579,
  lng: 30.104429
};
const options = {
  styles: mapStyles
};

const TrackBus = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA1RFMzYBYu-NhqtKidZeHhHRD2c9Tm2Kg',
    libraries
  });
  const [isOpen, setIsOpen] = useState('hidden');
  const toggleSideBar = () => setIsOpen(isOpen === '' ? 'hidden' : '');
  if (loadError) return 'Error loading Map';
  if (!isLoaded) return 'Loading Map';
  return (
    <div>
      <NavigationBar />
      <div
        className={`${isOpen} md:block object-right fixed h-full bg-gray-100 right-0 border-gray-900 z-10`}
      >
        <div className='text-center pt-20 sideBar'>
          <p>Drop Your Location and Destination To get Bus Info</p>
          <form>
            <div className='inputs-wrapper'>
              <div>
                <input
                  type='text'
                  placeholder='Where Are Now'
                  className='border-gray-900 p-2'
                />
              </div>
              <br />
              <div>
                <input
                  type='text'
                  placeholder='Where Are You Going'
                  className='border-gray-900 p-2'
                />
              </div>
            </div>
            <div className='border-phantomDark rounded bg-green-700 m-12 text-white'>
              <button className='pt-3 pb-3 pl-7 pr-7'>Get Bus Info</button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg> */}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default TrackBus;
