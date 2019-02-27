import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';

test('SignUp renders without crashing', () => {
  const wrapper = shallow(<SignUp />);
  expect(wrapper).toMatchSnapshot();
});

test('handleChange will update the state', () => {
  const event = {
          target : {
            id: 'email',
            value: "cunmap@mailinator.com"
          }
        }
  const wrapper = shallow(<SignUp />);
  wrapper.instance().handleChange(event);
  expect(wrapper.state().email).toBe(event.target.value);
});

test('check validate form', () => {
  const wrapper = shallow(<SignUp />);
  expect(wrapper.instance().validateForm()).toBe(false);
});

test('check validate confirm form', () => {
  const wrapper = shallow(<SignUp />);
  expect(wrapper.instance().validateConfirmationForm()).toBe(false);
});

test('check handleSubmit will update the state', () => {

  const event = {
    preventDefault: () => {}
  };
  const wrapper = shallow(<SignUp />);
  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().newUser).toBe(null);
});


test('check handleConfirmationSubmit will active the loader', () => {
  const event = {
    preventDefault: () => {}
  };
  const wrapper = shallow(<SignUp />);
  wrapper.instance().handleConfirmationSubmit(event);
  expect(wrapper.state().isLoading).toBe(true);
});

test('render confirmation form', () => {
  const wrapper = shallow(<SignUp />);
  wrapper.setState({newUser : {
    email: 'cunmap@mailinator.com',
    password: '123123'
  }});
  expect(wrapper.find('HelpBlock').dive().text()).toEqual('Please check your email for the code.')
});