import { shallow } from 'enzyme';
import React from 'react';
import createStore from 'redux-mock-store';
import Navigation from './index';
import { userHasAuthenticated } from '../../actions/authenticate'

const store = createStore()
test('AppliedRoute renders without crashing', () => {
  let notLoggedIn = store({
    authenticate: {isAuthenticated: false}
  });
  const wrapper = shallow(<Navigation store={notLoggedIn}/>);
  expect(wrapper).toMatchSnapshot();
});

test('checks action on dispatching ', () => {
  let action;
  let callDispatch = store();
  callDispatch.dispatch(userHasAuthenticated(true))
  action = callDispatch.getActions()
  expect(action[0].type).toBe("LOGIN_SUCCESS")
});
