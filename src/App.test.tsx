import React from 'react';
import { shallow, mount } from 'enzyme';
import createStore from 'redux-mock-store';
import { Auth } from 'aws-amplify';
import App from './App';
import { userHasAuthenticated } from './actions/authenticate'

const store = createStore()();

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

test('checks action on dispatching ', () => {
  let action;
  store.dispatch(userHasAuthenticated(true))
  action = store.getActions()
  expect(action[0].type).toBe("LOGIN_SUCCESS")
});
