import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import { createBusAction } from '../../../../redux/actionCreators/busesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Creating Buses', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should create a Bus ', async (done) => {
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
    await store.dispatch(createBusAction('test'));
    await flushPromises();
    done();
  });

  it('Should fail creating a bus ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: {
          success: false,
          message: 'error'
        }
      });
    });
    await store.dispatch(createBusAction('test'));
    await flushPromises();
    done();
  });
});
