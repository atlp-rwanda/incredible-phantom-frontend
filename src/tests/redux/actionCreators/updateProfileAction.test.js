import React from 'react';
import { Provider } from 'react-redux';
import Profile from '../../../components/dashboard/profile/Profile';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import {
  UPDATE_FAILED,
  UPDATE_SUCCESS,
  UPDATE_PROFILE,
  VIEW_FAIL,
  VIEW_PROFILE,
  VIEW_SUCCESS
} from '../../../redux/actionTypes/profileType';
import { viewProfileAction } from '../../../redux/actionCreators/viewProfileAction';
import { updateProfileAction } from '../../../redux/actionCreators/updateProfileAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('profile', () => {
  it('should take a snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('update profile Actions', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should test updating profile loading ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'profile updated successfully',
          data: {}
        }
      });
    });
    await store.dispatch(updateProfileAction('test', 'test', 'test'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(UPDATE_PROFILE);
    done();
  });

  it('Should test updating profile success ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'profile updated successfully',
          data: {}
        }
      });
    });
    await store.dispatch(updateProfileAction('sibo', 'jean', '82323233434'));
    await flushPromises();
    const calledActions = store.getActions();
    done();
  });

  it('Should fail updating user ', async (done) => {
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
    expect(calledActions[1].type).toEqual(UPDATE_FAILED);
    done();
  });
});

describe('VIEW profile Actions', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should test VIEW profile loading ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'profile Vewed successfully',
          data: {}
        }
      });
    });
    await store.dispatch(viewProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    done();
  });

  it('Should test VIEW profile success ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'profile Viewed successfully',
          data: {}
        }
      });
    });
    await store.dispatch(viewProfileAction());
    await flushPromises();
    const calledActions = store.getActions();
    done();
  });

  it('Should fail Viewing Profile user ', async (done) => {
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
    done();
  });
});
