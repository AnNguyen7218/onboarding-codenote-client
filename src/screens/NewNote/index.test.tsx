import React from 'react';
import { shallow, mount } from 'enzyme';
import NewNote from './index';

test('NewNote renders without crashing', () => {
  let props 
  const wrapper = shallow(<NewNote {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('handleChange will update the state', () => {
  let props 
  const event = {
          target : {
            id: 'content',
            value: 'test on change content'
          }
        }
  const wrapper = shallow(<NewNote {...props}/>);
  wrapper.instance().handleChange(event);
  expect(wrapper.state().content).toBe(event.target.value);
});

test('checks update file', () => {
  let props 
  const event = {
          target : {
            files: [
              'test file'
            ]
          }
        }
  const wrapper = shallow(<NewNote {...props}/>);
  wrapper.instance().handleFileChange(event);
  expect(wrapper.instance().file).toBe(event.target.files[0]);
});

test('should active loader', () => {
  let props 
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NewNote {...props}/>);

  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().isLoading).toBe(true);
});