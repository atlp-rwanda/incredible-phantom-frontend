import '../styles/register.scss';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SkeletonTable } from '../skeletons/skeletonTable';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  RegisterAction,
  getAllOperatorAction,
  deleteOperatorAction
} from '../redux/actionCreators/registerOperatorAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditOperator from './editOperator';

toast.configure();
const RegisterOperators = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.getOperatorReducer.data);
  const onSubmit = async (data) => {
    await dispatch(RegisterAction(data));
  };

  const { t } = useTranslation();
  useEffect(() => {
    setInterval(async () => {
      dispatch(getAllOperatorAction());
    }, 2000);
  }, []);

  const removeOperator = (operatorID) => {
    window.confirm('Are you sure?') &&
      dispatch(deleteOperatorAction(operatorID));
  };

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='rightside'>
      <div className='newop'>
        <Modal
          className='modal'
          isOpen={ModalIsOpen}
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.25)' } }}
        >
          <div className='formContainer'>
            <i
              data-testid='closeModal'
              className='far fa-times-circle'
              id='times'
              onClick={() => setModalIsOpen(false)}
            ></i>
            <h2 className='modal_detail'>{t('operator.15')}</h2>
            <div className='form'>
              <form data-testid='form' onSubmit={handleSubmit(onSubmit)}>
                <p>{t('operator.10')}</p>
                <input
                  type='text'
                  data-testid='firstName'
                  name='firstName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  ref={register({ required: true })}
                />
                <p>{t('operator.11')}</p>
                <input
                  type='text'
                  name='lastName'
                  data-testid='lastName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  ref={register({ required: true })}
                />

                <p>{t('operator.12')}</p>
                <input
                  type='number'
                  name='nationalId'
                  data-testid='nationalId'
                  placeholder='ID'
                  ref={register({ required: true })}
                />

                <p>{t('operator.13')}</p>
                <input
                  type='email'
                  name='email'
                  data-testid='email'
                  placeholder='Email'
                  ref={register({ required: true })}
                />

                <p>{t('operator.14')}</p>
                <input
                  type='text'
                  name='phone'
                  data-testid='phone'
                  placeholder='Phone Number'
                  ref={register({ required: true })}
                />

                <div className='buttons'>
                  <button className='deny' type='submit'>
                    Add
                  </button>
                  <button
                    data-testid='closeModal2'
                    className='confirm'
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
      <div className='midsection mb-5'>
        <h2>{t('operator.8')}</h2>
        <button
          data-testid='openModal+'
          className='bg-green-600 pt-1 pb-1 pr-3 pl-3 rounded-full text-white text-lg'
          onClick={() => setModalIsOpen(true)}
        >
          +
        </button>
      </div>
      <div className='table-container rounded-lg  shadow overflow-hidden'>
        <table className='min-w-full leading-normal text-center'>
          <thead>
            <tr>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('operator.9')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dates'
                className='headtable'
                className='dates'
              >
                {t('operator.10')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dates'
                className='headtable'
              >
                {t('operator.11')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dates'
                className='headtable'
                className='dates'
              >
                {t('operator.12')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dates'
                className='headtable'
                className='dates'
              >
                {t('operator.13')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('operator.14')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
              >
                {t('operator.18')}
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) =>
                data.role === 'operator' ? (
                  <tr key={data.objectId}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm dates'>
                      <div className='flex items-center'>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {data.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm dates'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.firstName}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.lastName}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm dates'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.nationalId}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm dates'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.email}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm dates'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.phone}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm flex space-around'>
                      <p
                        className='text-gray-900 whitespace-no-wrap'
                        className='buttons'
                      >
                        <EditOperator
                          numberID={data.id}
                          firstName={data.firstName}
                          lastName={data.lastName}
                          phone={data.phone}
                        />
                        <button
                          data-testid='deleteBtn'
                          className='delete'
                          onClick={(e) => {
                            e.preventDefault(), removeOperator(data.id);
                          }}
                        >
                          {t('operator.20')}
                        </button>
                      </p>
                    </td>
                  </tr>
                ) : null
              )}
            {!data.length &&
              [1, 2, 3, 4, 5].map((skeleton) => (
                <tr key={skeleton}>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <SkeletonTable />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RegisterOperators;
