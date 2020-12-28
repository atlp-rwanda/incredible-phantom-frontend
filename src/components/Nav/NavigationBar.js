import React from 'react';
import { Link } from 'react-router-dom';
import { LangSelection } from '../LangSelection/LangSelection';
import { Responsive } from '../Nav/Responsive';
import { Trans } from 'react-i18next';

export const NavigationBar = ({ home, about, contact }) => {
  return (
    <div>
      <div className="Nav-Bar">
        <div className="logo">PHANTOM</div>
        <div className="navigation">
          <LangSelection />
          <Link className="list" style={home} id="first-child" to="/">
            <Trans i18nKey="nav.home">Home</Trans>
          </Link>
          <Link className="list" style={about} id="first-child" to="/about">
            <Trans i18nKey="nav.about">About</Trans>
          </Link>
          <Link className="list" to="/terms">
            <Trans i18nKey="nav.terms">Terms of Services</Trans>
          </Link>
          <Link className="list" style={contact} to="/contact">
            <Trans i18nKey="nav.contact">Contact Us</Trans>
          </Link>
          <a className="list" style={{ margin: '0px' }}>
            <button><Trans i18nKey="nav.signup">Sign Up</Trans></button>
          </a>
        </div>
      </div>
      <Responsive />
    </div>
  );
};
