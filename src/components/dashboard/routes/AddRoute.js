import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createRouteAction} from '../../../redux/actionCreators/routesAction';
import './Routes.scss';
import {Trans} from 'react-i18next';

export const AddRoute = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [newRoute, setNewRoute] = useState({
    origin: '',
    destination: '',
    distance: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewRoute((newRoute) => ({ ...newRoute, [name]: value }));
  };

  const modalContainerStyle = {
    display: open ? 'flex' : 'none'
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validation = () => {
    if (!isNaN(newRoute)) {
      toast.warning(<Trans i18nKey=''></Trans>);
    } else if (isNaN(newRoute) && newRoute.length <= 3) {
      toast.warning(<Trans i18nKey=''></Trans>);
    } else {
      return true;
    }
  };

  const createRoute = () => {
    if (validation()) {
      dispatch(createRouteAction(newRoute));
      toast.success(<Trans i18nKey='routes.created'></Trans>);
      handleClose();
    }
  };

  return (
    <>
      <button className='show-btn' data-testid='show-btn' type='button' onClick={handleOpen}>
        +
      </button>
      <div style={modalContainerStyle} className='modal-container'>
        <div className='modal'>
        <h2>{<Trans i18nKey='routes.create'></Trans>}</h2>
          <form
            data-testid='form'
            onSubmit={(e) => {
              e.preventDefault();
              createRoute();
            }}
          >
            <input
              type='text'
              data-testid='route'
              placeholder='Origin'
              onChange={handleChange}
              value={newRoute.origin}
              autoFocus
              name='origin'
              required
            />
            <input
              type='text'
              data-testid='route'
              placeholder='destination'
              onChange={handleChange}
              name='destination'
              value={newRoute.destination}
              autoFocus
              required
            />
            <input
              type='text'
              data-testid='route'
              placeholder='Distance'
              onChange={handleChange}
              name='distance'
              value={newRoute.distance}
              autoFocus
              required
            />

            <button type='submit'>{<Trans i18nKey='routes.create'></Trans>}</button>
            <button
              style={{ backgroundColor: '#fb5b5b' }}
              type='button'
              onClick={handleClose}
            >
              {<Trans i18nKey='routes.cancel'></Trans>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRoute;
