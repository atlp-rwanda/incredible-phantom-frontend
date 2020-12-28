import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { forgotAction } from '../../redux/actionCreators/resetAction';
import { useDispatch } from 'react-redux';
import { NavigationBar } from '../Nav/NavigationBar';
import image from '../../assets/forgot.svg';
import './reset.scss';

toast.configure({ pauseOnHover: true });

const Forgot = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const invalidEmailMsg = t('validation.invalidEmail');

  const checkValidation = () => {
    if (email.length < 5) {
      return invalidEmailMsg;
    } else {
      return true;
    }
  };

  const submit = () => {
    if (checkValidation() === true) {
      dispatch(forgotAction(email));
    } else {
      toast.error(checkValidation());
    }
  };

  return (
    <>
      <NavigationBar />
      <div className='resetContainer'>
        <div className='left'>
          <div className='back'>
            <Link to='/signin'>{t('forgot.back')}</Link>
          </div>
          <img src={image} className='forgotImage none' />

          <h2 className='small-title'>{t('forgot.title')}</h2>
          <p className='parag'>{t('forgot.paragraph')}</p>

          <form
            data-testid='form'
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <input
              className='reset-iniput'
              data-testid='email'
              type='email'
              value={email}
              placeholder={t('forgot.placeHolder')}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              {t('forgot.btn')}
            </button>
          </form>
        </div>
        <div className='rigth'>
          <img src={image} className='forgotImage no-phone' />
        </div>
      </div>
      <div className='footer-wrapper' data-testid='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Forgot;
