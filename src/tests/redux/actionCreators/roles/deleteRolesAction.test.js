import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import {
  DELETE_ROLE_ERROR,
  DELETE_ROLE_SUCCESS
} from '../../../../redux/actionTypes/actionTypes';
import { deleteRoleAction } from '../../../../redux/actionCreators/rolesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Deleting a role', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should delete a Role ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'Role deleted successfully'
        }
      });
    });
    await store.dispatch(deleteRoleAction('123'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(DELETE_ROLE_SUCCESS);
    done();
  });

  it('Should fail deleting a role ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: false,
          message: 'error'
        }
      });
    });
    await store.dispatch(deleteRoleAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[1].type).toEqual(DELETE_ROLE_ERROR);
    done();
  });
});
