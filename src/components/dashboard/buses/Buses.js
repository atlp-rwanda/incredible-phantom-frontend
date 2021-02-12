import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Bus.scss';
import { SkeletonTable } from '../../../skeletons/skeletonTable';
import { useDispatch, useSelector } from 'react-redux';
import { getBusesAction } from '../../../redux/actionCreators/busesAction';
import AddBus from './addBus';
import EditBus from './editBus';
import DeleteBus from './deleteBus';
import { useTranslation } from 'react-i18next';
import pagination from './pagination';

const Buses = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getBusesReducer);
  const createState = useSelector((state) => state.createBusReducer);
  const editState = useSelector((state) => state.editBusReducer);
  const deleteState = useSelector((state) => state.deleteBusReducer);
  useEffect(() => {
    dispatch(getBusesAction());
  }, []);

  useEffect(() => {
    if (createState.onSuccess || editState.onSuccess || deleteState.onSuccess) {
      dispatch(getBusesAction());
    }
  }, [createState.onSuccess, editState.onSuccess, deleteState.onSuccess]);
  return (
    <div data-testid="table" className="roleTable-container">
      <div className="topNav">
        <h1 class=" text-2xl text-center border-gray-100 font-semibold text-xxs">
          {' '}
          {t('buses.allBuses')}{' '}
        </h1>
        <div className="addbtn">
          <div class="flex items-center justify-center ">
            <form method="GET">
              <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className=" searchbar py-2 text-sm text-white  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder={t('buses.search')}
                  autocomplete="off"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold leading-tight uppercase">
              <div className="addBtn">
                <AddBus />
              </div>
            </h2>
          </div>
        </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="no px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  {t('buses.busId')}
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider ">
                  {t('buses.brand')}
                </th>
                <th className="plate px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider ">
                  {t('buses.plateNo')}
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  {t('buses.actions')}
                </th>
              </tr>
            </thead>
            <tbody>
              {!state.buses &&
                [1, 2, 3, 4].map((skeleton) => (
                  <tr key={skeleton} data-testid="skeleton-wrapper">
                    <td
                      data-testid="skeleton"
                      className="px-5 py-5 border-b border-gray-200 bg-white text-center"
                    >
                      <SkeletonTable />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white  dates text-center">
                      <SkeletonTable />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white  dates text-center">
                      <SkeletonTable />
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white  text-center">
                      <SkeletonTable />
                    </td>
                  </tr>
                ))}
              {state.buses &&
                state.buses.map((data) => (
                  <tr key={data.id}>
                    <td className="no px-5 py-5 border-b border-gray-200 bg-white text-l text-center">
                      <p
                        data-testid="bus"
                        className="text-gray-900 whitespace-no-wrap"
                      >
                        {data.id}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.brand}
                      </p>
                    </td>
                    <td className="plate px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.plateNo}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l text-center">
                      <EditBus
                        busId={data.id}
                        brand={data.brand}
                        plateNo={data.plateNo}
                        seats={data.seats}
                        commuters={data.commuters}
                        type={data.type}
                        status={data.status}
                        location={data.location}
                      />
                      <DeleteBus busId={data.id} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <pagination
            totalRecords={12}
            pageLimit={3}
            pageNeighbours={3}
            onPageChanged={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Buses;
