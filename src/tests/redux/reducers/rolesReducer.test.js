import {
  getRolesReducer,
  editRoleReducer,
  deleteRoleReducer,
  createRoleReducer
} from '../../../redux/reducers/rolesReducer';
import {
  GETTING_ROLES_ERROR,
  GETTING_ROLES_SUCCESS,
  EDIT_ROLE_ERROR,
  EDIT_ROLE_SUCCESS,
  DELETE_ROLE_ERROR,
  DELETE_ROLE_SUCCESS,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_SUCCESS
} from '../../../redux/actionTypes/actionTypes';

describe('Testing roles reducer', () => {
  const initialGetRolesState = {
    fetching: false,
    fetched: false,
    roles: null,
    onError: null
  };

  const initialCreateRoleState = {
    creating: false,
    onSuccess: '',
    onError: null
  };

  const initialEditRoleState = {
    editing: false,
    onSuccess: null,
    onError: null
  };
  const initialDeleteRoleState = {
    deleting: false,
    onSuccess: '',
    onError: null
  };

  it('Should test success get roles reducer', () => {
    expect(
      getRolesReducer(initialGetRolesState, {
        type: GETTING_ROLES_SUCCESS,
        payload: 'test'
      })
    ).toEqual({ ...initialGetRolesState, fetched: true, roles: 'test' });
  });

  it('Should test failure get roles reducer', () => {
    expect(
      getRolesReducer(initialGetRolesState, {
        type: GETTING_ROLES_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialGetRolesState, onError: 'error' });
  });
  it('Should test create role success reducer', () => {
    expect(
      createRoleReducer(initialCreateRoleState, {
        type: CREATE_ROLE_SUCCESS,
        payload: 'success'
      })
    ).toEqual({ ...initialCreateRoleState, onSuccess: 'success' });
  });
  it('Should test create role failure reducer', () => {
    expect(
      createRoleReducer(initialCreateRoleState, {
        type: CREATE_ROLE_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialCreateRoleState, onError: 'error' });
  });
  it('Should test edit role success reducer', () => {
    expect(
      editRoleReducer(initialEditRoleState, {
        type: EDIT_ROLE_SUCCESS,
        payload: 'success'
      })
    ).toEqual({ ...initialEditRoleState, onSuccess: 'success' });
  });
  it('Should test edit role failure reducer', () => {
    expect(
      editRoleReducer(initialEditRoleState, {
        type: EDIT_ROLE_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialEditRoleState, onError: 'error' });
  });
  it('Should test delete role success reducer', () => {
    expect(
      deleteRoleReducer(initialDeleteRoleState, {
        type: DELETE_ROLE_SUCCESS,
        payload: 'deleted'
      })
    ).toEqual({ ...initialDeleteRoleState, onSuccess: 'deleted' });
  });
  it('Should test delete role failure reducer', () => {
    expect(
      deleteRoleReducer(initialDeleteRoleState, {
        type: DELETE_ROLE_ERROR,
        payload: 'error'
      })
    ).toEqual({ ...initialDeleteRoleState, onError: 'error' });
  });
});
