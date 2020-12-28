import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { createRoleAction } from '../../redux/actionCreators/rolesAction';
import './Roles.scss';

const addRole = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [newRole, setNewRole] = useState('');

  const modalContainerStyle = {
    display: open ? 'flex' : 'none'
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validaton = () => {
    const numbRef = /^[0-9]+$/;
    const charRef = /^[a-zA-Z]+$/;
    if (newRole.match(numbRef)) {
      toast.warning(t('roles.number'));
    } else if (newRole.match(charRef) && newRole.length <= 3) {
      toast.warning(t('roles.short'));
    } else {
      return true;
    }
  };

  const createRole = () => {
    if (validaton()) {
      dispatch(createRoleAction(newRole));
      handleClose();
    }
  };

  return (
    <>
      <button data-testid='show-btn' type='button' onClick={handleOpen}>
        +
      </button>
      <div style={modalContainerStyle} className='modal-container'>
        <div className='modal'>
          <div className='modal-content'>
            <h2> {t('roles.create')}</h2>
            <form
              data-testid='form'
              onSubmit={(e) => {
                e.preventDefault();
                createRole();
              }}
            >
              <input
                type='text'
                data-testid='role'
                placeholder='Enter role name'
                autoFocus
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                required
              />
              <div className='button-container'>
                <button
                  type='submit'
                  style={{
                    fontSize: '70%',
                    width: '30%',
                    marginRight: '5%'
                  }}
                >
                  {t('roles.createbtn')}
                </button>
                <button
                  type='button'
                  style={{
                    backgroundColor: '#fb5b5b',
                    fontSize: '70%',
                    width: '30%'
                  }}
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
};

export default addRole;
