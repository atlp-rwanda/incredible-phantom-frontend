import React, { useEffect, useState } from "react";
import { SkeletonTable } from "../../skeletons/skeletonTable";
import { useDispatch, useSelector } from "react-redux";
import "../AssignBusToDriver/assign.scss";
import { useTranslation } from "react-i18next";
import {
  getDriversAction,
  getBusAction,
  assignDrivertoBusAction,
  unAssignDriverToBusAction,
} from "../../redux/actionCreators/assignAction";

const AssignDriver = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [dropDownAssign, setDropDownAssign] = useState("");
  const [clickedDriverID, setClickedDriverId] = useState(null);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.fetchDriverReducer.data);
  const getBusState = useSelector((state) => state.getBusReducer);

  const assignDriver = () => {
    dispatch(assignDrivertoBusAction(dropDownAssign, clickedDriverID));
    setShowModal(false);
  };

  const unassignDriver = () => {
    dispatch(unAssignDriverToBusAction(clickedDriverID));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getDriversAction());
    dispatch(getBusAction());
  }, []);

  return (
    <div className="tbl">
      <table
        className="text-left w-full shadow overflow-hidden rounded border-b border-gray-200 sm:text-left"
        data-testid="assignTable"
      >
        <thead className="flex text-black w-full">
          <tr className="flex w-full mb-1">
            <th className="p-4 w-1/4">{t("assignDriver.firstName")}</th>
            <th className="p-4 w-1/4">{t("assignDriver.lastName")}</th>
            <th className="p-4 w-1/4">{t("assignDriver.PlateNo")}</th>
            <th className="p-4 w-1/4">{t("assignDriver.Status")}</th>
          </tr>
        </thead>
        <tbody className="bg-white flex flex-col items-center  overflow-y-scroll w-full">
          {!state &&
            [1, 2, 3, 4].map((skeleton) => (
              <tr key={skeleton} className="flex w-full hover:bg-orange-100">
                <td className="p-4 w-1/4">
                  <SkeletonTable />
                </td>
                <td className="p-4 w-1/4">
                  <SkeletonTable />
                </td>
                <td className="p-4 w-1/4">
                  <SkeletonTable />
                </td>
                <td className="p-4 w-1/4">
                  <SkeletonTable />
                </td>
              </tr>
            ))}

          {state &&
            state.map((data) => (
              <tr
                key={data.id}
                className="cursor-pointer flex w-full hover:bg-orange-100 border-b border-gray-200"
                style={{ transition: "all .15s ease" }}
                onClick={() => {
                  setShowModal(true);
                  setClickedDriverId(data.id);
                }}
                data-testid="assignData"
              >
                <td className="p-4 w-1/4 ">{data.firstName}</td>
                <td className="p-4 w-1/4 ">{data.lastName}</td>
                <td className="p-4 w-1/4">
                  {data.busId ? data.bus.plateNo : <span>None</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {data.busId && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Assigned
                    </span>
                  )}
                  {!data.busId && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Unassigned
                    </span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {t("assignDriver.assign")}
                  </h3>
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setShowModal(false)}
                    data-testid="closeModal"
                  >
                    <span class="sr-only">Close menu</span>

                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <span class="px-1 text-sm text-gray-600">PlateNo</span>

                  <select
                    name="cars"
                    className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    onChange={(event) => setDropDownAssign(event.target.value)}
                    value={dropDownAssign}
                    data-testid="selectmenu"
                  >
                    <option value="" disabled selected>
                      {t("assignDriver.choosePlate")}
                    </option>
                    {getBusState.data &&
                      getBusState.data.map((data) => (
                        <option value={data.id} data-testid="option">
                          {data.plateNo}
                        </option>
                      ))}
                    {!getBusState.data && <option>loading</option>}
                  </select>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={assignDriver}
                    data-testid="assignButton"
                  >
                    {t("assignDriver.assign")}
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={unassignDriver}
                    data-testid="unassignButton"
                  >
                    {t("assignDriver.unassign")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default AssignDriver;
