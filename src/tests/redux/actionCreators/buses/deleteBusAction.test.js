import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../../setupTest';
import {
  DELETE_BUS_SUCCESS,
  DELETE_BUS
} from '../../../../redux/actionTypes/actionTypes';
import { deleteBusAction } from '../../../../redux/actionCreators/busesAction';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Deleting a Buses', () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it('It should delete a Bus ', async (done) => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          success: 'Bus deleted successfully'
        }
      });
    });
    await store.dispatch(deleteBusAction('123'));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(DELETE_BUS);
    done();
  });

  it('Should fail deleting a Bus ', async (done) => {
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
    await store.dispatch(deleteBusAction());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[1].type).toEqual(DELETE_BUS_SUCCESS);
    done();
  });
});
