import React from 'react';
import { NavigationBar } from '../../components/Nav/NavigationBar';
import { Footer } from '../../components/Footer/Footer';
import phantomImage from '../../assets/images/phantomImage.jpg';
import { useTranslation } from 'react-i18next';
import './LandingPage.scss';

export const LandingPage = () => {
  const { t } = useTranslation();
  const onPage = {
    fontFamily: 'Roboto Slab, Serif',
    color: '#2d6a4f',
  };
  return (
    <div>
      <div>
        <NavigationBar home={onPage} />
        <div className="Body">
          <h1>{t('title')}</h1>
          <span id="phantom-slogan">{t('description.slogan')}</span>
          <img src={phantomImage} alt="Tracking Bus Icon" />
          <button>
            <i className="fas fa-map-marker-alt" />
            {t('description.startBtn')}
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};
