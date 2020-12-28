import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dropDown } from '../../redux/actionCreators/toggleLangAction';
import '../LangSelection/LangSelection.scss';
import UKFlag from '../../assets/icons/UKFlag.png';
import FR from '../../assets/icons/France.jpg';
import KIN from '../../assets/icons/Rwanda.jpg';
import { useTranslation } from 'react-i18next';
export const LangSelection = () => {
  const { i18n } = useTranslation();
  const query = sessionStorage.getItem('i18nextLng');
  const toggle = useSelector((state) => state.langSelectionReducer);
  const dispatch = useDispatch();
  const translate = async (lang) => {
    await i18n.changeLanguage(lang);
    dispatch(dropDown());
  };
  return (
    <div className='dropdown'>
      <button
        data-testid='drop-down'
        onClick={() => dispatch(dropDown())}
        className='dropbtn  flex'
      >
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
        <i className='fas fa-caret-down'></i>
      </button>
      <div
        id='myDropdown'
        className='dropdown-content'
        style={{ display: toggle ? 'block' : 'none' }}
      >
        <button data-testid='trans-en' onClick={() => translate('en')}>
          <div>
            <img src={UKFlag} alt='UK Flag' />
          </div>
          <div>English</div>
        </button>
        <button data-testid='trans-fr' onClick={() => translate('fr')}>
          <div>
            <img src={FR} alt='FR Flag' />
          </div>
          <div>French</div>
        </button>
        <button data-testid='trans-kin' onClick={() => translate('kin')}>
          <div>
            <img src={KIN} alt='RW Flag' />
          </div>
          <div>KinyaRwanda</div>
        </button>
      </div>
    </div>
  );
};
