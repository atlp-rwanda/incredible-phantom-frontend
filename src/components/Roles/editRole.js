import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { editRoleAction } from '../../redux/actionCreators/rolesAction';
import './Roles.scss';

export default function EditRole({ role, roleId }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(role);

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
    const numbRef = /^[0-9]+$/;
    const charRef = /^[a-zA-Z]+$/;
    if (input.match(numbRef)) {
      toast.warning(t('roles.number'));
    } else if (input.match(charRef) && input.length <= 3) {
      toast.warning(t('roles.short'));
    } else {
      return true;
    }
  };

  const saveChanges = async () => {
    if (validation()) {
      dispatch(editRoleAction(input, roleId));
      toast.success(t('roles.updated'));
      handleClose();
    }
  };

  return (
    <>
      <button
        data-testid='show-btn'
        className='editIcon-btn'
        onClick={handleOpen}
      >
        {t('roles.editbtn')}
      </button>
      <div style={modalContainerStyle} className='modal-container'>
        <div className='modal'>
          <div className='modal-content'>
            <h2 data-testid='header' id='transition-modal-title'>
              {t('roles.edit')}
            </h2>
            <form
              data-testid='form'
              onSubmit={(e) => {
                e.preventDefault();
                saveChanges();
              }}
            >
              <input
                data-testid='role'
                type='text'
                placeholder='Edit Role'
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
              <div className='button-container'>
                <button
                  style={{
                    fontSize: '90%',
                    width: '30%',
                    marginRight: '5%'
                  }}
                  type='submit'
                >
                  {t('roles.savebtn')}
                </button>
                <button
                  style={{
                    fontSize: '90%',
                    width: '30%',
                    backgroundColor: '#fb5b5b'
                  }}
                  type='button'
                  onClick={handleClose}
                >
                  {t('roles.cancelbtn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
