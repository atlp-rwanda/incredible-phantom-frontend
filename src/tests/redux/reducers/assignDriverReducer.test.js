import {
  GET_DRIVERS_FAILED,
  GET_DRIVERS_SUCCESS,
  ASSIGN_BUSDRIVER_SUCCESS,
  ASSIGN_BUSDRIVER_FAILED,
  UNASSIGN_BUSDRIVER_FAILED,
  UNASSIGN_BUSDRIVER_SUCCESS,
  GET_BUS_FAILED,
  GET_BUS_SUCCESS,
} from "../../../redux/actionTypes/actionTypes";

import {
  fetchDriverReducer,
  assignDriveReducer,
  UnassignDriverReducer,
  getBusReducer,
} from "../../../redux/reducers/assignDriverReducer";

describe("Assign Driver Reducer TEST", () => {
  const initialGetDriversState = {
    fetching: false,
    fetched: false,
    data: null,
    onError: "",
  };

  const initialAssignDriver = {
    onError: null,
    onSuccess: null,
    assign: false,
  };

  const initialUnassignDriver = {
    onError: null,
    onSuccess: null,
    unAssign: false,
  };

  const initialGetBus = {
    fetching: false,
    fetched: false,
    data: null,
    onError: "",
  };

  it("Should test success get driver reducer", () => {
    expect(
      fetchDriverReducer(initialGetDriversState, {
        type: GET_DRIVERS_SUCCESS,
        payload: "test",
      })
    ).toEqual({
      ...initialGetDriversState,
      fetching: false,
      fetched: true,
      data: "test",
    });
  });

  it("Should test failure get driver reducer", () => {
    expect(
      fetchDriverReducer(initialGetDriversState, {
        type: GET_DRIVERS_FAILED,
        payload: "error",
      })
    ).toEqual({ ...initialGetDriversState, onError: "error" });
  });

  it("Should test success assign driver reducer", () => {
    expect(
      assignDriveReducer(initialAssignDriver, {
        type: ASSIGN_BUSDRIVER_SUCCESS,
        payload: "test",
      })
    ).toEqual({ ...initialAssignDriver, onSuccess: "test" });
  });

  it("Should test fail assign driver reducer", () => {
    expect(
      assignDriveReducer(initialAssignDriver, {
        type: ASSIGN_BUSDRIVER_FAILED,
        payload: "test",
      })
    ).toEqual({ ...initialAssignDriver, onError: "test" });
  });

  it("Should test success unassign driver reducer", () => {
    expect(
      UnassignDriverReducer(initialUnassignDriver, {
        type: UNASSIGN_BUSDRIVER_SUCCESS,
        payload: "test",
      })
    ).toEqual({ ...initialUnassignDriver, onSuccess: "test" });
  });

  it("Should test fail unassign driver reducer", () => {
    expect(
      UnassignDriverReducer(initialUnassignDriver, {
        type: UNASSIGN_BUSDRIVER_FAILED,
        payload: "test",
      })
    ).toEqual({ ...initialUnassignDriver, onError: "test" });
  });

  it("Should test success get Bus reducer", () => {
    expect(
      getBusReducer(initialGetBus, {
        type: GET_BUS_SUCCESS,
        payload: "test",
      })
    ).toEqual({
      ...initialGetBus,
      fetching: false,
      fetched: true,
      data: "test",
    });
  });

  it("Should test fail get Bus reducer", () => {
    expect(
      getBusReducer(initialGetBus, {
        type: GET_BUS_FAILED,
        payload: "error",
      })
    ).toEqual({ ...initialGetBus, onError: "error" });
  });
});
