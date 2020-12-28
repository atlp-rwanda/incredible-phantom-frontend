import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import { logoutAction } from '../../../redux/actionCreators/logoutAction';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../../../redux/actionTypes/actionTypes';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Login Actions', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should logout user ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'logged in successfully',
          data: {}
        }
      });
    });
    await store.dispatch(logoutAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(LOGOUT_REQUEST);
    expect(calledActions[1].type).toEqual(LOGOUT_SUCCESS);
    done();
  });

  it('Should fail logging out ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: false,
          message: 'error',
          data: {}
        }
      });
    });
    await store.dispatch(logoutAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[2].type).toEqual(LOGOUT_ERROR);
    done();
  });
});
