import React from 'react';
import { shallow, mount } from 'enzyme';
import NewNote from './index';

test('NewNote renders without crashing', () => {
  const wrapper = shallow(<NewNote />);
  expect(wrapper).toMatchSnapshot();
});

test('handleChange will update the state', () => {
  const event = {
          target : {
            id: 'content',
            value: 'test on change content'
          }
        }
  const wrapper = shallow(<NewNote />);
  wrapper.instance().handleChange(event);
  expect(wrapper.state().content).toBe(event.target.value);
});

test('checks update file', () => {
  const event = {
          target : {
            files: [
              'test file'
            ]
          }
        }
  const wrapper = shallow(<NewNote />);
  console.log('wadw', wrapper.instance());
  wrapper.instance().handleFileChange(event);
  expect(wrapper.instance().file).toBe(event.target.files[0]);
});

test('should active loader', () => {
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NewNote />);

  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().isLoading).toBe(true);
});