import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {  deleteRouteAction} from '../../../redux/actionCreators/routesAction';
import './Routes.scss';
import {Trans} from 'react-i18next';

export default function deleteRoute({route, routeID }) {
  const dispatch = useDispatch();
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

  const removeRoute = async () => {
    dispatch(deleteRouteAction(routeID));
    toast.warning(<Trans i18nKey='routes.deleted'></Trans>);
    handleClose();
  };

  return (
    <>
      <button
        data-testid="show-btn"
        className="deleteIcon-btn"
        onClick={handleOpen}
      >
        {<Trans i18nKey='routes.delete'></Trans>}
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <h4
            data-testid="confirm-message"
            style={{ marginBottom: '10px' }}
            id="transition-modal-title"
          >
            {<Trans i18nKey='routes.confirm'></Trans>}
          </h4>
          <button className="delete-btn" onClick={removeRoute}>
          {<Trans i18nKey='routes.yes'></Trans>}
          </button>
          <button className="delete-btn" onClick={handleClose}>
          {<Trans i18nKey='routes.no'></Trans>}
          </button>
        </div>
      </div>
    </>
  );
}