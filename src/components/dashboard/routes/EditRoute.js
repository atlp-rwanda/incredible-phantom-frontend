import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { editRouteAction } from '../../../redux/actionCreators/routesAction';
import './Routes.scss';
import { Trans } from 'react-i18next';

export default function EditBus({ routeID, origin, destination, distance }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    origin: '',
    destination: '',
    distance: ''
  });

  useEffect(() => {
    setInput((input) => ({
      ...input,
      origin,
      destination,
      distance
    }));
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput((input) => ({ ...input, [name]: value }));
  };

  const modalContainerStyle = {
    display: open ? 'flex' : 'none'
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validation = () => {
    if (!isNaN(input)) {
      toast.success(<Trans i18nKey='routes.created'></Trans>);
    } else if (isNaN(input) && input.length <= 3) {
      toast.warning(<Trans i18nKey='routes.already'></Trans>);
    } else {
      return true;
    }
  };

  const saveChanges = async () => {
    if (validation()) {
      dispatch(editRouteAction(input, routeID));
      toast.success(<Trans i18nKey='routes.edited'></Trans>);
      handleClose();
    }
  };

  return (
    <>
      <button
        data-testid='show-btn'
        className='editIcon-btn'
        onClick={handleOpen}
      >
        {<Trans i18nKey='routes.edit'></Trans>}
      </button>
      <div style={modalContainerStyle} className='modal-container'>
        <div className='modal'>
          <h2 data-testid='header' id='transition-modal-title'>
            {<Trans i18nKey='routes.editRoute'></Trans>}
          </h2>
          <form
            data-testid='form'
            onSubmit={(e) => {
              e.preventDefault();
              saveChanges();
            }}
          >
            <p className='label'> {<Trans i18nKey='routes.Origin'></Trans>}</p>
            <input
              type='text'
              data-testid='route'
              onChange={handleChange}
              value={input.origin}
              autoFocus
              name='origin'
              required
            />
            <p className='labell'>
              {' '}
              {<Trans i18nKey='routes.Destination'></Trans>}
            </p>
            <input
              type='text'
              data-testid='route'
              onChange={handleChange}
              name='destination'
              value={input.destination}
              autoFocus
              required
            />
            <p className='label'>{<Trans i18nKey='routes.Distance'></Trans>}</p>
            <input
              type='text'
              data-testid='route'
              onChange={handleChange}
              name='distance'
              value={input.distance}
              autoFocus
              required
            />
            <button
              style={{ fontSize: '80%', marginRight: '20px' }}
              type='submit'
            >
              {<Trans i18nKey='routes.save'></Trans>}
            </button>
            <button
              style={{ fontSize: '80%', backgroundColor: '#fb5b5b' }}
              type='button'
              onClick={handleClose}
            >
              {<Trans i18nKey='routes.cancel'></Trans>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
