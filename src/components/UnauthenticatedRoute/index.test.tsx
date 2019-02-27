import { shallow } from 'enzyme';
import React from 'react';
import createStore from 'redux-mock-store';
import UnauthenticatedRoute from './index';

test('UnauthenticatedRoute renders without crashing', () => {
  let store = createStore()({authenticate: {isAuthenticated: true}});
  const wrapper = shallow(<UnauthenticatedRoute store={store}/>).dive();
  expect(wrapper).toMatchSnapshot();
});


