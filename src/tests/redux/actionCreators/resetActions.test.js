import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import {
  RESET_SUCCESS,
  RESET_FAILED,
  FORGOT_SUCCESS,
  FORGOT_FAILED,
  FORGOT_PENDING,
  RESET_PENDING,
} from '../../../redux/actionTypes/actionTypes';
import {
  forgotAction,
  resetAction,
} from '../../../redux/actionCreators/resetAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Forgot password Actions', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should test forgot password ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'check your inbox',
          data: {},
        },
      });
    });
    await store.dispatch(forgotAction('test@test.test'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(FORGOT_PENDING);
    expect(calledActions[1].type).toEqual(FORGOT_SUCCESS);
    done();
  });

  it('Should fail forgot password ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: false,
          message: 'error',
          data: {},
        },
      });
    });
    await store.dispatch(forgotAction('test@test.test'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[3].type).toEqual(FORGOT_FAILED);
    done();
  });

  it('Should test reset password ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'password reset successfully',
          data: {},
        },
      });
    });
    await store.dispatch(resetAction('new password', `Bearer token`));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[4].type).toEqual(RESET_PENDING);
    expect(calledActions[5].type).toEqual(RESET_SUCCESS);
    done();
  });

  it('Should fail reset password ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {
          success: false,
          message: 'Not authorized',
          data: {},
        },
      });
    });
    await store.dispatch(resetAction('new password', `Bearer token`));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[7].type).toEqual(RESET_FAILED);
    done();
  });
});
