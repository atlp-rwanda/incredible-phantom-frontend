import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import {
  getAllOperatorAction,
  editOperatorAction,
  deleteOperatorAction,
  RegisterAction
} from '../../../redux/actionCreators/registerOperatorAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Registering operators', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('Should Test register Drivers success ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: '',
          data: {}
        }
      });
    });
    await store.dispatch(
      RegisterAction({
        email: 'hhhh@gmail.com',
        firstName: 'HABIYAREMYE',
        lastName: 'Janfier',
        nationalId: 2222222222222222,
        phone: '0788327715',
        role: 'operator'
      })
    );
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
    await store.dispatch(
      RegisterAction(1075555555589, 'hello', 'hello', 12, 'hi', '0789999999')
    );
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
    await store.dispatch(getAllOperatorAction());
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
    await store.dispatch(getAllOperatorAction());
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
      editOperatorAction(
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
      editOperatorAction(
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

describe('Deleting Operators', () => {
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
    await store.dispatch(deleteOperatorAction());
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
    await store.dispatch(deleteOperatorAction());
    await flushPromises();

    done();
  });
});
