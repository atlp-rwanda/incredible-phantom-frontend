import React from 'react';
import { NavigationBar } from '../../components/Nav/NavigationBar';
import { Footer } from '../../components/Footer/Footer';
import './About.scss';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const onPage = {
    fontFamily: 'Roboto Slab, Serif',
    color: '#2d6a4f'
  };
  return (
    <div>
      <NavigationBar about={onPage} />
      <div className='About-container'>
        <div className='header'>
          <span>{t('about.title')}</span>
        </div>
        <div className='Content'>
          <div className='card'>
            <div className='icon'>
              <i className='fas fa-cube'></i>
            </div>
            <div className='description'>{t('about.1')}</div>
          </div>
          <div className='card'>
            <div className='icon'>
              <i className='fas fa-truck-moving'></i>
            </div>
            <div className='description'>{t('about.2')}</div>
          </div>
          <div className='card'>
            <div className='icon'>
              <i className='fas fa-stopwatch'></i>
            </div>
            <div className='description'>{t('about.3')}</div>
          </div>
          <div className='card'>
            <div className='icon'>
              <i className='fas fa-cube'></i>
            </div>
            <div className='description'>{t('about.4')}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
