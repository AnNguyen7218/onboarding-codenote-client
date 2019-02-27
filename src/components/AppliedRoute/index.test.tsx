import { shallow, mount } from 'enzyme';
import React from 'react';
import { Route } from 'react-router';
import AppliedRoute from './index';
import Home from '../../screens/Home/index'

test('AppliedRoute renders without crashing', () => {
  let props
  const wrapper = shallow(<AppliedRoute {...props}/>);
  expect(wrapper).toMatchSnapshot();
});
