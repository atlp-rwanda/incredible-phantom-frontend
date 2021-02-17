import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Routes.scss';
import { SkeletonTable } from '../../../skeletons/skeletonTable';
import { useDispatch, useSelector } from 'react-redux';
import { getRoutesAction } from '../../../redux/actionCreators/routesAction';
import {
  getRoutesReducer,
  createRouteReducer,
  editRouteReducer,
  deleteRouteReducer
} from '../../../redux/reducers/routesReducer';
import { AddRoute } from './AddRoute';
import EditRoute from './EditRoute';
import DeleteRoute from './DeleteRoute';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const routes = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getRoutesReducer);
  const createState = useSelector((state) => state.createRouteReducer);
  const editState = useSelector((state) => state.editRouteReducer);
  const deleteState = useSelector((state) => state.deleteRouteReducer);
  useEffect(() => {
    dispatch(getRoutesAction());
  }, []);

  useEffect(() => {
    if (createState.onSuccess || editState.onSuccess || deleteState.onSuccess) {
      dispatch(getRoutesAction());
    }
  }, [createState.onSuccess, editState.onSuccess, deleteState.onSuccess]);
  return (
    <div data-testid='table' className='roleTable-container'>
      <div className='topNav'>
        <h1 class=' text-2xl text-center border-gray-100 font-semibold text-xxs'>
          {' '}
          {<Trans i18nKey='routes.Route'></Trans>}{' '}
        </h1>
        <div className='addbtn'>
          <div class='flex items-center justify-center '>
            <form method='GET'>
              <div class='relative text-gray-600 focus-within:text-gray-400'>
                <span class='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button
                    type='submit'
                    class='p-1 focus:outline-none focus:shadow-outline'
                  ></button>
                </span>
              </div>
            </form>
          </div>
          <div>
            <h2 className='text-2xl font-semibold leading-tight uppercase'>
              <div className='addBtn'>
                <AddRoute />
              </div>
            </h2>
          </div>
        </div>
      </div>

      <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
          <table className='min-w-full leading-normal'>
            <thead>
              <tr>
                <th className='no px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {<Trans i18nKey='routes.RouteId'></Trans>}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider '>
                  {<Trans i18nKey='routes.Origin'></Trans>}
                </th>
                <th className='plate px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider '>
                  {<Trans i18nKey='routes.Destination'></Trans>}
                </th>

                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {<Trans i18nKey='routes.Distance'></Trans>}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {<Trans i18nKey='routes.AssignedBus'></Trans>}
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider'>
                  {<Trans i18nKey='routes.Action'></Trans>}
                </th>
              </tr>
            </thead>
            <tbody>
              {!state.routes &&
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
                    <td className='px-5 py-5 border-b border-gray-200 bg-white  text-center'>
                      <SkeletonTable />
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white  text-center'>
                      <SkeletonTable />
                    </td>
                  </tr>
                ))}
              {state.routes &&
                state.routes.map((data) => (
                  <tr key={data.id}>
                    <td className='no px-5 py-5 border-b border-gray-200 bg-white text-l text-center'>
                      <p
                        data-testid='bus'
                        className='text-gray-900 whitespace-no-wrap'
                      >
                        {data.routeID}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.origin}
                      </p>
                    </td>
                    <td className='plate px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.destination}
                      </p>
                    </td>
                    <td className='plate px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.distance}
                      </p>
                    </td>
                    <td className='plate px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {data.assignedBuses.length}
                      </p>
                    </td>

                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-l text-center'>
                      <EditRoute
                        routeID={data.routeID}
                        origin={data.origin}
                        destination={data.destination}
                        distance={data.distance}
                      />
                      <DeleteRoute routeID={data.routeID} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default routes;
