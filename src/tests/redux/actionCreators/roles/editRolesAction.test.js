import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import {
  EDIT_ROLE,
  EDIT_ROLE_SUCCESS
} from '../../../../redux/actionTypes/actionTypes';
import { editRoleAction } from '../../../../redux/actionCreators/rolesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Editing Roles', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should Edit a Role ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'Role updated successfully'
        }
      });
    });
    await store.dispatch(editRoleAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(EDIT_ROLE_SUCCESS);
    done();
  });

  it('Should fail editing a role ', async (done) => {
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
    await store.dispatch(editRoleAction());
    await flushPromises();
    done();
  });
});
