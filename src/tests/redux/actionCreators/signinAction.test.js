import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import { loggedUser } from '../../../redux/actionCreators/signinAction';
import {
  SET_LOADING,
  SET_LOGIN,
  SET_LOGIN_ERROR
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

  it('Should test logged user ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          data: {}
        }
      });
    });
    await store.dispatch(loggedUser({
      email: 'admin@test.test',
      password: '123abc'
    }));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(SET_LOADING);
    expect(calledActions[1].type).toEqual(SET_LOGIN);
    done();
  });

  it('Should fail signing in ', async (done) => {
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
    await store.dispatch(loggedUser('test@test.test'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[3].type).toEqual(SET_LOGIN_ERROR);
    done();
  });
});
