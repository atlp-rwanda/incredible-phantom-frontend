import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { resetAction } from '../../redux/actionCreators/resetAction';
import { NavigationBar } from '../Nav/NavigationBar';
import image from '../../assets/newpwd.svg';
import './reset.scss';

const Reset = () => {
  const { t } = useTranslation();
  const token = useLocation().search.split('?')[1];
  const [password, setPassword] = useState('');
  const [comfirm, setComfirm] = useState('');
  const invalidPassword = t('validation.invalidPassword');
  const invalidComfirm = t('validation.invalidComfirm');
  const dispatch = useDispatch();
  const success = useSelector((state) => state.resetReducer.success);

  let history = useHistory();

  const checkValidation = () => {
    if (password.length < 6) {
      return invalidPassword;
    } else if (password !== comfirm) {
      return invalidComfirm;
    } else {
      return true;
    }
  };

  if (success) {
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }
  const submit = async () => {
    if (checkValidation() === true) {
      await Promise.all([dispatch(resetAction(password, token))]);
    } else {
      toast.error(checkValidation());
    }
  };

  return (
    <>
      <NavigationBar />
      <div className='resetContainer'>
        <div className='left'>
          <img src={image} className='forgotImage none' />
          <h2 className='small-title'>{t('reset.title')}</h2>
          <p className='parag'>{t('reset.paragraph')}</p>

          <form
            data-testid='form'
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <input
              className='reset-iniput'
              data-testid='password'
              type='password'
              placeholder={t('reset.newPassword')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='reset-iniput'
              data-testid='comfirm-password'
              type='password'
              placeholder={t('reset.comfirmPassword')}
              value={comfirm}
              onChange={(e) => setComfirm(e.target.value)}
            />
            <button type='submit' className='submit-btn '>
              {t('reset.btn')}
            </button>
          </form>
        </div>
        <div className='rigth'>
          <img src={image} className='forgotImage no-phone' />
        </div>
      </div>
      <div className='footer-wrapper-reset'>
        <Footer />
      </div>
    </>
  );
};

export default Reset;
