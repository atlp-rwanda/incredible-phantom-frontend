import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

export const mockStore = configureMockStore([thunk]);
