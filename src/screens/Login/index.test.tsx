import React from 'react';
import createStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Login from './index';
import { userHasAuthenticated } from '../../actions/authenticate'

test('Login component renders without crashing', () => {
  let store = createStore()();
  const wrapper = shallow(<Login store={store} />).dive();
  expect(wrapper).toMatchSnapshot();
});

test('Login component - checks action on dispatching ', () => {
  let action;
  let store = createStore()();
  store.dispatch(userHasAuthenticated(true))
  action = store.getActions()
  expect(action[0].type).toBe("LOGIN_SUCCESS")
});

test('handleChange will update the state', () => {
  let store = createStore()();
  const event = {
          target : {
            id: 'email',
            value: "cunmap@mailinator.com"
          }
        }
  const wrapper = shallow(<Login store={store} />).dive();
  wrapper.instance().handleChange(event);
  expect(wrapper.state().email).toBe(event.target.value);
});

test('handleSubmit will update the state', () => {
  let store = createStore()();
  const event = {
    preventDefault: () => {}
  };
  const wrapper = shallow(<Login store={store} />).dive();
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().isLoading).toBe(true);
});