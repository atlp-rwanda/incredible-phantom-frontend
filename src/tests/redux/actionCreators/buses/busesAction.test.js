import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import { GETTING_BUSES_ERROR } from '../../../../redux/actionTypes/actionTypes';
import { getBusesAction } from '../../../../redux/actionCreators/busesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Getting Buses', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should get all the buses action ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      const testBus = {
        brand: 'test',
        plateNo: 'RAB12',
        seats: 0,
        location: 'Nyaruguru',
        status: 'active',
        commuters: 0,
        type: 'hiace'
      };
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: '',
          data: testBus
        }
      });
    });
    await store.dispatch(getBusesAction());
    await flushPromises();
    done();
  });

  it('Should fail Getting buses action ', async (done) => {
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
    await store.dispatch(getBusesAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[1].type).toEqual(GETTING_BUSES_ERROR);
    done();
  });
});
