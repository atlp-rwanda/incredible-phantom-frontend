
import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import { viewProfileAction} from '../../../redux/actionCreators/viewProfileAction';
import { updateProfileAction} from '../../../redux/actionCreators/updateProfileAction';
import {
  VIEW_PROFILE,
  VIEW_SUCCESS,
  VIEW_FAIL,
  UPDATE_PROFILE,
  UPDATE_SUCCESS,
  UPDATE_FAILED
} from '../../../redux/actionTypes/profileType';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('View Profile', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
    const user = JSON.stringify({
      id: 12,
     });
     localStorage.setItem('loggedInUser', user);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should View a Profile Action ', async (done) => {
    const user = JSON.stringify({
      id: 12,
     });
     localStorage.setItem('loggedInUser', user);
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'View successifully',
          data: {}
        }
      });
    });
    await store.dispatch(viewProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(VIEW_PROFILE);
    expect(calledActions[1].type).toEqual(VIEW_SUCCESS);
    done();
  });

  it('Should fail View Profile ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          success: false,
          message: 'error',
          data: {}
        }
      });
    });
    await store.dispatch(viewProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[2].type).toEqual(VIEW_FAIL);
    done();
  });
});

describe('Update Profile', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should UPDATE a Profile ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'Updated successifully',
          data: {}
        }
      });
    });
    await store.dispatch(updatedProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(UPDATE_PROFILE);
    expect(calledActions[1].type).toEqual(UPDATE_SUCCESS);
    done();
  });

  it('Should fail Update Profile ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          success: false,
          message: 'error',
          data: {}
        }
      });
    });
    await store.dispatch(updateProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[2].type).toEqual(UPDATE_FAILED);
    done();
  });
});
