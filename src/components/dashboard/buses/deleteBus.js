import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { deleteBusAction } from '../../../redux/actionCreators/busesAction';
import './Bus.scss';

export default function deleteBus({ bus, busId }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const modalContainerStyle = {
    display: open ? 'flex' : 'none'
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeBus = async () => {
    dispatch(deleteBusAction(busId));
    toast.warning(t('buses.deleted'));
    handleClose();
  };

  return (
    <>
      <button
        data-testid="show-btn"
        className="deleteIcon-btn"
        onClick={handleOpen}
      >
        {t('buses.deletebtn')}
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <h4
            data-testid="confirm-message"
            style={{ marginBottom: '10px' }}
            id="transition-modal-title"
          >
            {t('buses.confirm')}
          </h4>
          <button className="delete-btn" onClick={removeBus}>
            {t('buses.yesbtn')}
          </button>
          <button className="delete-btn" onClick={handleClose}>
            {t('buses.nobtn')}
          </button>
        </div>
      </div>
    </>
  );
}
