import '../styles/register.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Skeleton from 'react-loading-skeleton';
import { LangSelection } from './LangSelection/LangSelection';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const RegisterOperators = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/users',
        { ...data },
        {
          headers: {
            auth:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJpYXQiOjE2MTE4MjcxMzh9.YJ4lrlUan9X3X95FVgRt_tJrS57D5CwDXEtnhUQB8ZY'
          }
        }
      );
      if (response) {
        toast.success(t('Operator registered!'));
        window.location.reload(true);
      }
    } catch (error) {
      {
        if (error.response.status === 400) {
          toast.info(error.response.data.message, { autoClose: 8000 });
        } else {
          toast.error(error.response.data.message, { autoClose: 8000 });
        }
      }
    }
  };

  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    const result = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/users',
      headers: {
        auth:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJpYXQiOjE2MTE3NjY3NjV9.xfZ8qv5yPu6VgNO1FKve7hHjGdeSFIunnEAwrl_AnNo'
      }
    });
    setData(result.data.data);
    setIsLoading(false);
  }, []);

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='operatorPage'>
      <div className='rightside'>
        <div className='newop'>
          <button onClick={() => setModalIsOpen(true)}>
            <strong>{t('operator.7')}</strong>
          </button>

          <Modal className='modal' isOpen={ModalIsOpen}>
            <div className='Driver-container'>
              <div className='formContainer'>
                <i
                  class='far fa-times-circle'
                  id='times'
                  onClick={() => setModalIsOpen(false)}
                ></i>
                <h2>{t('operator.15')}</h2>
                <div className='form'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                      <li>
                        <p>{t('operator.10')}</p>
                        <input
                          type='text'
                          name='firstName'
                          placeholder='Names'
                          pattern='[A-Za-z, ]{3,}'
                          ref={register({ required: true })}
                        />
                      </li>
                      <li>
                        <li>
                          <p>{t('operator.11')}</p>
                          <input
                            type='text'
                            name='lastName'
                            placeholder='Names'
                            pattern='[A-Za-z, ]{3,}'
                            ref={register({ required: true })}
                          />
                        </li>
                        <p>{t('operator.12')}</p>
                        <input
                          type='number'
                          name='nationalId'
                          placeholder='ID'
                          ref={register({ required: true })}
                        />
                      </li>

                      <li>
                        <p>{t('operator.13')}</p>
                        <input
                          type='email'
                          name='email'
                          placeholder='Email'
                          ref={register({ required: true })}
                        />
                      </li>
                      <li>
                        <p>{t('operator.14')}</p>
                        <input
                          type='number'
                          name='phone'
                          placeholder='Phone Number'
                          ref={register({ required: true })}
                        />
                      </li>
                      <li>
                        <p>{t('operator.17')}</p>
                        <input
                          type='string'
                          name='role'
                          placeholder='Role'
                          ref={register({ required: true })}
                        />
                      </li>
                      <div className='buttons'>
                        <button
                          className='deny'
                          onClick={() => setModalIsOpen(false)}
                        >
                          Cancel
                        </button>
                        <button className='confirm' type='submit'>
                          Add
                        </button>
                      </div>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
          <div className='lang'>
            <LangSelection />
          </div>
        </div>
        <div>
          <div className='midsection'>
            <h2>{t('operator.8')}</h2>
            <input placeholder='Search Operator' className='search' />
          </div>
          <div className='table-container'>
            <table>
              <tr>
                <th scope='col'>{t('operator.9')}</th>
                <th scope='col'>{t('operator.10')}</th>
                <th scope='col'>{t('operator.11')}</th>
                <th scope='col'>{t('operator.12')}</th>
                <th scope='col'>{t('operator.13')}</th>
                <th scope='col'>{t('operator.14')}</th>
                <th scope='col'>{t('operator.18')}</th>
              </tr>
              {data.length ? (
                <tbody>
                  {data.map((data) => {
                    return (
                      <tr key={data.objectId}>
                        <td data-label='id'>{data.id}</td>
                        <td data-label='First Name'>{data.firstName}</td>
                        <td data-label='Last Name'>{data.lastName}</td>
                        <td data-label='National ID'>{data.nationalId}</td>
                        <td data-label='Email'>{data.email}</td>
                        <td data-label='phone'>{data.phone}</td>
                        <td data-label='Action' className='buttons'>
                          <button>Edit</button>
                          <button>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  {[1, 2, 3, 4, 5].map((data) => {
                    return (
                      <tr key={data}>
                        <td scope='row'>
                          <Skeleton />
                          {data.id}
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterOperators;
