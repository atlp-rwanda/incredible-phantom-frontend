import React from 'react';
import { Link } from 'react-router-dom';
import { LangSelection } from '../LangSelection/LangSelection';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '../../redux/actionCreators/toggleNavAction';
import { useTranslation } from 'react-i18next';
import './NavigationBar.scss';

export const Responsive = () => {
  const toggle = useSelector((state) => state.navReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="resp-nav">
      <div className="logo">PHANTOM</div>
      <div className="resp-navigation">
        <div className="options">
          <LangSelection />
          <button> {t('nav.signup')}</button>
        </div>
        <div onClick={() => dispatch(Switch())} className="burger">
          <div
            style={{
              transform: toggle ? 'rotate(45deg)' : 'rotate(0)',
            }}
          />
          <div
            style={{
              transform: toggle ? 'translateX(100%)' : 'translateX(0)',
              opacity: toggle ? 0 : 1,
            }}
          />
          <div
            style={{
              transform: toggle ? 'rotate(-45deg)' : 'rotate(0)',
            }}
          />
        </div>
      </div>
      <div
        className="links"
        style={{
          transform: toggle ? 'translateX(0px)' : 'translateX(-100%)',
        }}
      >
        <Link onClick={() => dispatch(Switch())} to="/" className="link">
          {t('nav.home')}
        </Link>
        <Link onClick={() => dispatch(Switch())} to="/about" className="link">
          {t('nav.about')}
        </Link>
        <Link onClick={() => dispatch(Switch())} to="/terms" className="link">
          {t('nav.terms')}
        </Link>
        <Link onClick={() => dispatch(Switch())} to="contact" className="link">
          {t('nav.contact')}
        </Link>
      </div>
    </div>
  );
};
