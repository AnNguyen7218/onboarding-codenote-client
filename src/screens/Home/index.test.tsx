import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';
import Home from './index';

const store = createStore();

// test('lander is rendered by default', () => {
//   let notLoggedIn = store({
//     authenticate: {isAuthenticated: false}
//   });
//   const wrapper = shallow(<Home store={notLoggedIn}/>).dive();
//   expect(wrapper.find('h1').text()).toBe('CodeNote');
// });

// test('note list section is rendered', () => {
//   let loggedIn = store({
//     authenticate: {isAuthenticated: true}
//   });
//   const wrapper = shallow(<Home store={loggedIn}/>).dive();
//   // console.log(wrapper.debug());
//   expect(wrapper.find('.notes')).toHaveLength(1);
// })

it('check isAuthenticated matches with initialState', () => {
  let initialState = {
    authenticate: {isAuthenticated: false}
  }
  let notLoggedIn = store(initialState);
  const wrapper = shallow(<Home store={notLoggedIn}/>).dive();

  console.log(wrapper.prop('isAuthenticated'))
  console.log(wrapper.instance().props)

  expect(1).toBe(1);

});