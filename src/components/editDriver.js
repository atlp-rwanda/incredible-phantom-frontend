import React, { useState } from 'react';
import { toast } from 'react-toastify';
import i18next from 'i18next';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { editDriverAction } from '../redux/actionCreators/registerDriverAction';
import '../styles/register.scss';

export default function EditDriver({ numberID, firstName, lastName, phone }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [inputFirstnane, setInputFirstname] = useState(firstName);
  const [inputLastnane, setInputLastname] = useState(lastName);
  const [inputPhone, setInputPhone] = useState(phone);
  const saveChanges = async () => {
    dispatch(
      editDriverAction(numberID, inputFirstnane, inputLastnane, inputPhone)
    );
    toast.success(i18next.t('drivers.updated'));
    setModalIsOpen(false);
  };

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button
        className='edit'
        data-testid='openModal'
        onClick={() => setModalIsOpen(true)}
      >
        {t('operator.19')}
      </button>
      <div>
        <Modal
          className='modaledit'
          isOpen={ModalIsOpen}
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.25)' } }}
        >
          <div className='formContainer'>
            <i
              data-testid='closeModal'
              class='far fa-times-circle'
              id='times'
              onClick={() => setModalIsOpen(false)}
            ></i>
            <h2>
              <strong>{t('drivers.15')}</strong>
            </h2>
            <div className='form'>
              <form
                data-testid='form'
                onSubmit={(e) => {
                  e.preventDefault();
                  saveChanges();
                }}
              >
                <p>{t('operator.10')}</p>
                <input
                  data-testid='firstName'
                  type='text'
                  name='firstName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  value={inputFirstnane}
                  onChange={(e) => setInputFirstname(e.target.value)}
                  required
                />
                <p>{t('operator.11')}</p>
                <input
                  data-testid='lastName'
                  type='text'
                  name='lastName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  value={inputLastnane}
                  onChange={(e) => setInputLastname(e.target.value)}
                  required
                />

                <p>{t('operator.14')}</p>
                <input
                  data-testid='phone'
                  type='text'
                  name='phone'
                  placeholder='Phone Number'
                  value={inputPhone}
                  onChange={(e) => setInputPhone(e.target.value)}
                  required
                />

                <div className='buttons'>
                  <button className='deny' type='submit'>
                    Save
                  </button>
                  <button
                    data-testid='closeModal2'
                    className='confirm'
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
