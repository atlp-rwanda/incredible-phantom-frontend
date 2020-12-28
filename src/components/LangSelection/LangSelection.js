import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dropDown } from '../../redux/actionCreators/toggleLangAction';
import '../LangSelection/LangSelection.scss';
import UKFlag from '../../assets/icons/UKFlag.png';
import FR from '../../assets/icons/France.jpg';
import KIN from '../../assets/icons/Rwanda.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const LangSelection = () => {
  const { i18n } = useTranslation();
  const query = localStorage.getItem('i18nextLng');
  const toggle = useSelector((state) => state.langSelectionReducer);
  const dispatch = useDispatch();
  const translate = async (lang) => {
    await i18n.changeLanguage(lang);
    dispatch(dropDown());
  };
  return (
    <div className="dropdown">
      <button onClick={() => dispatch(dropDown())} className="dropbtn">
        <span>
          <img
            src={
              query === 'kin'
                ? KIN
                : query === 'en'
                ? UKFlag
                : query === 'fr'
                ? FR
                : UKFlag
            }
          ></img>
        </span>
        <i className="fas fa-caret-down"></i>
      </button>
      <div
        id="myDropdown"
        className="dropdown-content"
        style={{ display: toggle ? 'block' : 'none' }}
      >
        <button onClick={() => translate('en')}>
          <div>
            <img src={UKFlag} alt="UK Flag" />
          </div>
          <div>
            <Link to="?lng=en">English</Link>
          </div>
        </button>
        <button onClick={() => translate('fr')}>
          <div>
            <img src={FR} alt="FR Flag" />
          </div>
          <div>
            <Link to="?lng=fr">French</Link>
          </div>
        </button>
        <button onClick={() => translate('kin')}>
          <div>
            <img src={KIN} alt="RW Flag" />
          </div>
          <div>
            <Link to="?lng=kin">KinyaRwanda</Link>
          </div>
        </button>
      </div>
    </div>
  );
};
