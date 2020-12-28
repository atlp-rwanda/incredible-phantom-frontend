import React from 'react';
import { NavigationBar } from '../../components/Nav/NavigationBar';
import { Footer } from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import './Contact.scss';

export const Contact = () => {
  const { t } = useTranslation();
  const onPage = {
    fontFamily: 'Roboto Slab, Serif',
    color: '#2d6a4f'
  };

  return (
    <div>
      <NavigationBar contact={onPage} />
      <div className='Contact-container'>
        <div className='formContainer'>
          <div className='form'>
            <h2 className='text-lg'>{t('contact.title')}</h2>
            <form>
              {t('contact.name')}
              <input
                type='text'
                pattern='[A-Za-z, ]{3,}'
                required
                className='reset-iniput'
              />
              {t('contact.email')}
              <input type='email' required className='reset-iniput' />
              {t('contact.phone')}
              <input type='number' required className='reset-iniput' />
              {t('contact.enquiry')}
              <textarea
                name='enquiry'
                cols='30'
                rows='5'
                className='reset-iniput'
              ></textarea>
              <button>{t('contact.sendBtn')}</button>
            </form>
          </div>
        </div>
        <div className='media'>
          <i className='fab fa-facebook-f'></i>
          <i className='fab fa-linkedin-in'></i>
          <i className='fab fa-twitter'></i>
        </div>
      </div>
      <Footer />
    </div>
  );
};
