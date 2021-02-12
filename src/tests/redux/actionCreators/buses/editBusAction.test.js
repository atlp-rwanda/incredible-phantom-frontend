import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import {
  EDIT_BUS,
  EDIT_BUS_SUCCESS
} from '../../../../redux/actionTypes/actionTypes';
import { editBusAction } from '../../../../redux/actionCreators/busesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Editing Buses', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should Edit a Bus ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: true,
          message: 'Bus updated successfully'
        }
      });
    });
    await store.dispatch(editBusAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(EDIT_BUS);
    done();
  });

  it('Should fail editing a bus ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          success: false,
          message: 'error'
        }
      });
    });
    await store.dispatch(editBusAction());
    await flushPromises();
    done();
  });
});
