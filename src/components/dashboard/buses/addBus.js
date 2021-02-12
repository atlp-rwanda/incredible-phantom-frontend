import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createBusAction } from '../../../redux/actionCreators/busesAction';
import './Bus.scss';

const addBus = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [newBus, setNewBus] = useState({
    brand: '',
    plateNo: '',
    seats: 0,
    location: '',
    status: '',
    commuters: 0,
    type: ''
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewBus((newBus) => ({ ...newBus, [name]: value }));
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
    if (!isNaN(newBus)) {
      toast.warning(t('buses.number'));
    } else if (isNaN(newBus) && newBus.length <= 3) {
      toast.warning(t('Buses.short'));
    } else {
      return true;
    }
  };

  const createBus = () => {
    if (validation()) {
      dispatch(createBusAction(newBus));
      handleClose();
    }
  };

  return (
    <>
      <button data-testid="show-btn" type="button" onClick={handleOpen}>
        +
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <h2> {t('buses.create')}</h2>
          <form
            data-testid="form"
            onSubmit={(e) => {
              e.preventDefault();
              createBus();
            }}
          >
            <input
              type="text"
              data-testid="bus"
              placeholder="Brand"
              onChange={handleChange}
              value={newBus.brand}
              autoFocus
              name="brand"
              required
            />
            <input
              type="text"
              data-testid="bus"
              placeholder="Plate NO"
              onChange={handleChange}
              name="plateNo"
              value={newBus.plateNo}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              placeholder="Location"
              onChange={handleChange}
              name="location"
              value={newBus.location}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              placeholder="status"
              onChange={handleChange}
              name="status"
              value={newBus.status}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              placeholder="commuters"
              onChange={handleChange}
              name="commuters"
              value={newBus.commuters}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              placeholder="Type"
              onChange={handleChange}
              name="type"
              value={newBus.type}
              autoFocus
              required
            />

            <button type="submit">{t('buses.createbtn')}</button>
            <button
              style={{ backgroundColor: '#fb5b5b' }}
              type="button"
              onClick={handleClose}
            >
              {t('buses.cancelbtn')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default addBus;
