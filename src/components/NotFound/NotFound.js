import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar } from '../Nav/NavigationBar';
import { Footer } from '../Footer/Footer';
import notFound from '../../assets/icons/404.svg';
import './NotFound.scss';
import { useTranslation } from 'react-i18next';
export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="emojii">
          <img src={notFound} alt="NOT FOUND"></img>
        </div>
        <div className="description">
          <h1> {t('notfound.title')}</h1>
          <span>
            {t('notfound.part1')}
            <br />
            {t('notfound.part2')}
          </span>
          <br />
          <Link className="link" to="/">
            <button> {t('notfound.redirect')}</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
