import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import { GETTING_ROLES_ERROR } from '../../../../redux/actionTypes/actionTypes';
import { getRolesAction } from '../../../../redux/actionCreators/rolesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Getting Roles', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should get all the roles action ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      const testRole = {
        id: '123',
        role: 'test',
        createdAt: '20th 2020',
        updatedAt: '21st 2020'
      };
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: '',
          data: testRole
        }
      });
    });
    await store.dispatch(getRolesAction());
    await flushPromises();
    done();
  });

  it('Should fail Getting roles action ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          success: false,
          message: 'error',
          data: {}
        }
      });
    });
    await store.dispatch(getRolesAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[1].type).toEqual(GETTING_ROLES_ERROR);
    done();
  });
});
