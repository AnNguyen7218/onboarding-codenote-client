import React from 'react';
import createStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import AuthenticatedRoute from './index';

const store = createStore()
test('renders without crashing', () => {
  let notLoggedin = store({
    authenticate: {isAuthenticated: false}
  });
  const wrapper = shallow(<AuthenticatedRoute store={notLoggedin}/>);
  expect(wrapper).toMatchSnapshot();
});
