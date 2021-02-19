import React, { useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import mapStyles from './mapStyle';
import './configureModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutesAction } from '../../redux/actionCreators/routesActions';

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

export default ({ isModalOpen, toggleModal }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getRoutesReducer);
  useEffect(async () => {
    dispatch(getRoutesAction());
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA1RFMzYBYu-NhqtKidZeHhHRD2c9Tm2Kg',
    libraries
  });
  console.log('HHHHHHHH', state);
  if (loadError) return 'Error loading Map';
  if (!isLoaded) return 'Loading Map';

  return (
    <div>
      <div className={`modal-container ${isModalOpen}`}>
        <form className='modal '>
          <div className='flex-row '>
            <div className='flex justify-between select mb-5'>
              <select className=''>
                <option>Choose Route</option>
                <option>world</option>
              </select>

              <input
                type='number'
                placeholder='Commuters'
                className='p-2 bg-white rounded border-2 ml-10'
              />
            </div>
            <div className='flex justify-between '>
              <button className='p-2 bg-green-700 text-white rounded'>
                Start Bus
              </button>
              <button
                className='p-2 bg-red-700 text-white rounded'
                onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
};
