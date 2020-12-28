import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { deleteRoleAction } from '../../redux/actionCreators/rolesAction';
import './Roles.scss';

export default function deleteRole({ role, roleId }) {
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

  const removeRole = async () => {
    dispatch(deleteRoleAction(roleId));
    toast.warning(t('roles.deleted'));
    handleClose();
  };

  return (
    <>
      <button
        data-testid='show-btn'
        className='deleteIcon-btn'
        onClick={handleOpen}
      >
        {t('roles.deletebtn')}
      </button>
      <div style={modalContainerStyle} className='modal-container'>
        <div style={{ height: '20%' }} className='modal'>
          <div className='modal-content'>
            <h4
              data-testid='confirm-message'
              style={{ marginBottom: '10px' }}
              id='transition-modal-title'
            >
              {t('roles.confirm') +
                role.charAt(0).toUpperCase() +
                role.slice(1)}
            </h4>
            <div className='button-container'>
              <button className='delete-btn' onClick={removeRole}>
                {t('roles.yesbtn')}
              </button>
              <button className='delete-btn' onClick={handleClose}>
                {t('roles.nobtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
