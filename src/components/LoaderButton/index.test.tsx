import { shallow } from 'enzyme';
import React from 'react';
import LoaderButton from './index';

test('AppliedRoute renders without crashing', () => {
  let props
  const wrapper = shallow(<LoaderButton {...props} />);
  expect(wrapper).toMatchSnapshot();
});
