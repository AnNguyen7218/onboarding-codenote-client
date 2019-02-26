import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

test('renders without crashing', () => {
  const wrapper = shallow(<Home />);
  console.log(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});

// it('check lander is rendered by default', () => {
//   const wrapper = shallow(<Home />);
//   console.log(wrapper.debug());
//   // expect(wrapper).toMatchSnapshot();
// });