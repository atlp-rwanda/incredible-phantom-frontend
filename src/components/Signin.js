import '../styles/signinPage.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ submitHandler, error, details, setDetails }) => {
  const { t } = useTranslation();

  useEffect(() => {
    error
      ? toast.error(error, {
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        })
      : '';
  }, [error]);

  return (
    <div className='base-container'>
      <h2>{t('signin.title')}</h2>
      <div className='form-container'>
        <form onSubmit={submitHandler} data-testid='form'>
          <div className='form-inner'>
            <div className='form-group'>
              <label htmlFor='Email'>{t('signin.email')}</label>
              <input
                type='text'
                name='email'
                data-testid='email'
                placeholder={t('signin.yourEmail')}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='Password'>{t('signin.password')}</label>
              <input
                type='password'
                name='password'
                data-testid='password'
                placeholder={t('signin.yourPassword')}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <Link to='/' className='link'>
                {t('signin.forgotPassword')}
              </Link>
            </div>

            <input type='submit' value={t('signin.sendBtn')} />
          </div>
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={8000}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
