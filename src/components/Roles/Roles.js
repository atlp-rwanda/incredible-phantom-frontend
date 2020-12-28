import React, { useEffect } from 'react';
import { SkeletonTable } from '../../skeletons/skeletonTable';
import moment from 'moment';
import './Roles.scss';
import 'react-toastify/dist/ReactToastify.css';
import AddRole from './addRole';
import EditRole from './editRole';
import DeleteRole from './deleteRole';
import { useDispatch, useSelector } from 'react-redux';
import { getRolesAction } from '../../redux/actionCreators/rolesAction';
import { useTranslation } from 'react-i18next';

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const state = useSelector((state) => state.getRolesReducer);
  useEffect(async () => {
    dispatch(getRolesAction());
    setInterval(() => {
      dispatch(getRolesAction());
    }, 2000);
  }, []);

  return (
    <div data-testid='table' className='roleTable-container'>
      <div>
        <h2 className='text-2xl font-semibold leading-tight uppercase'>
          <div className='addBtn'>
            <AddRole />
          </div>
        </h2>
      </div>
      <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
          <table className='min-w-full leading-normal'>
            <thead>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {t('roles.roles')}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider dates'>
                  {t('roles.createdon')}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider dates'>
                  {t('roles.editedon')}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {t('roles.actions')}
                </th>
              </tr>
            </thead>
            <tbody>
              {!state.roles &&
                [1, 2, 3, 4].map((skeleton) => (
                  <tr key={skeleton} data-testid='skeleton-wrapper'>
                    <td
                      data-testid='skeleton'
                      className='px-5 py-5 border-b border-gray-200 bg-white text-center'
                    >
                      <SkeletonTable />
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white  dates text-center'>
                      <SkeletonTable />
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white  dates text-center'>
                      <SkeletonTable />
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white  text-center'>
                      <SkeletonTable />
                    </td>
                  </tr>
                ))}
              {state.roles &&
                state.roles.map((data) => (
                  <tr data-testid='roles-data' key={data.id}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l text-center'>
                      <p
                        data-testid='role'
                        className='text-gray-900 whitespace-no-wrap'
                      >
                        {data.role}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {moment(data.createdAt).calendar()}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {moment(data.updatedAt).calendar()}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l text-center'>
                      <EditRole roleId={data.id} role={data.role} />
                      <DeleteRole roleId={data.id} role={data.role} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
