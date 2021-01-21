import '../styles/register.scss';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SkeletonTable } from '../skeletons/skeletonTable';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  RegisterDriverAction,
  getAllDriverAction,
  deleteDriverAction
} from '../redux/actionCreators/registerDriverAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditDriver from './editDriver';

toast.configure();
const RegisterDrivers = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getDriverReducer.data);

  const onSubmit = async (data) => {
    await dispatch(RegisterDriverAction(data));
  };

  const { t } = useTranslation();
  useEffect(() => {
    setInterval(async () => {
      dispatch(getAllDriverAction());
    }, 2000);
  }, []);

  const removeDriver = async (driverID) => {
    window.confirm('Are you sure?') &&
      (await dispatch(deleteDriverAction(driverID)));
  };

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='rightside'>
      <div className='newop'>
        <Modal
          className='modal mt-20'
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
            <h2 className='modal_detail'>{t('drivers.15')}</h2>
            <div className='form'>
              <form data-testId='form' onSubmit={handleSubmit(onSubmit)}>
                <p>{t('drivers.10')}</p>
                <input
                  type='text'
                  data-testId='firstName'
                  name='firstName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  ref={register({ required: true })}
                />
                <p>{t('drivers.11')}</p>
                <input
                  type='text'
                  name='lastName'
                  data-testId='lastName'
                  placeholder='Names'
                  pattern='[A-Za-z, ]{3,}'
                  ref={register({ required: true })}
                />

                <p>{t('drivers.12')}</p>
                <input
                  type='number'
                  name='nationalId'
                  data-testId='nationalId'
                  placeholder='ID'
                  ref={register({ required: true })}
                />

                <p>{t('drivers.13')}</p>
                <input
                  type='email'
                  name='email'
                  data-testId='email'
                  placeholder='Email'
                  ref={register({ required: true })}
                />

                <p>{t('drivers.14')}</p>
                <input
                  type='text'
                  name='phone'
                  data-testId='phone'
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
        <h2>{t('drivers.8')}</h2>
        <button
          data-testid='openModal+'
          className='bg-green-600 pt-1 pb-1 pr-3 pl-3 rounded-full text-white text-lg'
          onClick={() => setModalIsOpen(true)}
        >
          +
        </button>
      </div>
      <div className='table-container rounded-lg   overflow-hidden'>
        <table className='min-w-full leading-normal text-center'>
          <thead>
            <tr>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('drivers.9')}
              </th>
              <th
                class='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('drivers.10')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
              >
                {t('drivers.11')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('drivers.12')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('drivers.13')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
                className='dates'
              >
                {t('drivers.14')}
              </th>
              <th
                className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                className='headtable'
              >
                {t('drivers.18')}
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) =>
                data.role === 'driver' ? (
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
                        <EditDriver
                          numberID={data.id}
                          firstName={data.firstName}
                          lastName={data.lastName}
                          nationalId={data.nationalId}
                          email={data.email}
                          phone={data.phone}
                        />
                        <button
                          className='delete'
                          data-testid='deleteBtn'
                          onClick={(e) => {
                            e.preventDefault(), removeDriver(data.id);
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
export default RegisterDrivers;
