import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';

import {
  getAllDriverAction,
  deleteDriverAction,
  editDriverAction,
  RegisterDriverAction
} from '../../../redux/actionCreators/registerDriverAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Registering drivers', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should Test get Drivers success ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'registered',
          data: {}
        }
      });
    });
    await store.dispatch(RegisterDriverAction());
    await flushPromises();
    done();
  });

  it('Should Test get Drivers fail ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: true,
          message: 'registered',
          data: {}
        }
      });
    });
    await store.dispatch(RegisterDriverAction());
    await flushPromises();
    done();
  });
});

describe('Fetching drivers', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should Test get Drivers Success ', async (done) => {
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
    await store.dispatch(getAllDriverAction());
    await flushPromises();
    done();
  });
  it('Should Test get Drivers Failed ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: true,
          message: 'logged in successfully',
          data: {}
        }
      });
    });
    await store.dispatch(getAllDriverAction());
    await flushPromises();
    done();
  });
});

describe('Edit drivers', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should Test update Driver Success ', async (done) => {
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
    await store.dispatch(
      editDriverAction(
        'numberID',
        'inputFirstnane',
        'inputLastnane',
        'inputPhone'
      )
    );
    await flushPromises();
    done();
  });
  it('Should Test update Driver Failed ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: true,
          message: 'logged in successfully',
          data: {}
        }
      });
    });
    await store.dispatch(
      editDriverAction(
        'numberID',
        'inputFirstnane',
        'inputLastnane',
        'inputPhone'
      )
    );
    await flushPromises();
    done();
  });
});

describe('Deleting drivers', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should Test Delete Driver Success ', async (done) => {
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
    await store.dispatch(deleteDriverAction());
    await flushPromises();
    done();
  });
  it('Should Test Delete Driver Failed ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: true,
          message: 'logged in successfully',
          data: {}
        }
      });
    });
    await store.dispatch(deleteDriverAction());
    await flushPromises();
    done();
  });
});
