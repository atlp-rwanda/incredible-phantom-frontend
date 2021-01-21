import moxios from 'moxios';
import axiosInstance from 'axios';
import { mockStore } from '../../../setupTest';
import { getDriversAction, assignDrivertoBusAction, unAssignDriverToBusAction, getBusAction } from '../../../redux/actionCreators/assignAction';
import { ASSIGN_BUSDRIVER_SUCCESS, GET_DRIVERS_FAILED, GET_BUS_FAILED } from '../../../redux/actionTypes/actionTypes';

const store = mockStore();
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Getting all Drivers', () => {
    beforeEach(() => {
        moxios.install(axiosInstance);
      });
    
      afterEach(() => {
        moxios.uninstall(axiosInstance);
      });

  it('It should get all drivers ', async (done) => {
        moxios.wait(async () => {
          const request = moxios.requests.mostRecent();
          const testDriver = {
            id: 2,
            firstName: "testF",
            lastName: "testL",
            busId: 2,
          };
          request.respondWith({
            status: 200,
            response: {
              success: true,
              message: '',
              data: testDriver
            }
          });
        });
        await store.dispatch(getDriversAction());
        await flushPromises();
        done();
      });

      it('Should fail Getting drivers action ', async (done) => {
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
        await store.dispatch(getDriversAction());
        await flushPromises();
        const calledActions = store.getActions();
        expect(calledActions[1].type).toEqual(GET_DRIVERS_FAILED);
        done();
    });



      it('It should assign a Driver ', async (done) => {

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: {
                success: true,
                message: 'Driver assigned to bus successfully.'
              }
            });
          });
          await store.dispatch(assignDrivertoBusAction(2,4));
          await flushPromises();
          const calledActions = store.getActions();
        //   expect(calledActions[1].type).toEqual(ASSIGN_BUSDRIVER_SUCCESS);
          done();
      });

      it('Should fail assign Driver ', async (done) => {
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
        await store.dispatch(assignDrivertoBusAction());
        await flushPromises();
        done();
      });

      it('It should unassign a Driver ', async (done) => {

        moxios.wait(async () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: {
                success: true,
                message: 'Driver Unassigned to bus successfully.'
              }
            });
          });
          await store.dispatch(unAssignDriverToBusAction());
          await flushPromises();
          const calledActions = store.getActions();
        //   expect(calledActions[0].type).toEqual(ASSIGN_BUSDRIVER_SUCCESS);
          done();
      });

      it('Should fail unassign Driver ', async (done) => {
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
        await store.dispatch(unAssignDriverToBusAction());
        await flushPromises();
        done();
      });

      it('It should get all bus ', async (done) => {
        moxios.wait(async () => {
          const request = moxios.requests.mostRecent();
          const testBus = {
            id: 2,
            plateNo: "RAB200"
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
        await store.dispatch(getBusAction());
        await flushPromises();
        done();
      });

      it('Should fail Getting Bus action ', async (done) => {
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
        await store.dispatch(getBusAction());
        await flushPromises();
        const calledActions = store.getActions();
        done();
    });




});