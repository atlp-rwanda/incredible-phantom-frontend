import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { editBusAction } from '../../../redux/actionCreators/busesAction';
import './Bus.scss';

export default function EditBus({
  busId,
  brand,
  plateNo,
  seats,
  location,
  status,
  commuters,
  type
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    brand: '',
    plateNo: '',
    seats: 0,
    location: '',
    status: '',
    commuters: 0,
    type: ''
  });

  useEffect(() => {
    setInput((input) => ({
      ...input,
      brand,
      plateNo,
      seats,
      location,
      status,
      commuters,
      type
    }));
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((input) => ({ ...input, [name]: value }));
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
    if (!isNaN(input)) {
      toast.warning(t('buses.number'));
    } else if (isNaN(input) && input.length <= 3) {
      toast.warning(t('buses.short'));
    } else {
      return true;
    }
  };

  const saveChanges = async () => {
    if (validation()) {
      dispatch(editBusAction(input, busId));
      toast.success(t('buses.updated'));
      handleClose();
    }
  };

  return (
    <>
      <button
        data-testid="show-btn"
        className="editIcon-btn"
        onClick={handleOpen}
      >
        {t('buses.editbtn')}
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <h2 data-testid="header" id="transition-modal-title">
            {t('buses.edit')}
          </h2>
          <form
            data-testid="form"
            onSubmit={(e) => {
              e.preventDefault();
              saveChanges();
            }}
          >
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              value={input.brand}
              autoFocus
              name="brand"
              required
            />
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              name="plateNo"
              value={input.plateNo}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              name="location"
              value={input.location}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              name="status"
              value={input.status}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              name="commuters"
              value={input.commuters}
              autoFocus
              required
            />
            <input
              type="text"
              data-testid="bus"
              onChange={handleChange}
              name="type"
              value={input.type}
              autoFocus
              required
            />
            <button
              style={{ fontSize: '80%', marginRight: '20px' }}
              type="submit"
            >
              {t('buses.savebtn')}
            </button>
            <button
              style={{ fontSize: '80%', backgroundColor: '#fb5b5b' }}
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
}
