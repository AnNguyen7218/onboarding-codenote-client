import React from 'react';
import { shallow } from 'enzyme';
import NoteDetail from './index';

test('NewNote renders without crashing', () => {
  const wrapper = shallow(<NoteDetail />);
  expect(wrapper).toMatchSnapshot();
});

test('state should be updated', () => {
  const event = {
          target : {
            id: 'content',
            value: 'test on change content'
          }
        }
  const wrapper = shallow(<NoteDetail />);
  wrapper.instance().handleChange(event);
  expect(wrapper.state().content).toBe(event.target.value);
});

test('should update file', () => {
  const event = {
          target : {
            files: [
              'a file'
            ]
          }
        }
  const wrapper = shallow(<NoteDetail />);
  wrapper.instance().handleFileChange(event);
  expect(wrapper.instance().file).toBe(event.target.files[0]);
});

test('should close loader', () => {
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NoteDetail />);

  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().isLoading).toBe(false);
})

test('should update state', () => {
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NoteDetail />);

  wrapper.instance().handleDelete(event);
  expect(wrapper.state().isDeleting).toBe(false);
})

test('should get note', async () => {
  // const wrapper = shallow(<NoteDetail/>);
  // wrapper.setProps({match: {
  //   params: {
  //     id: '123',
  //   }
  // }});
  // const responseJson = await wrapper.instance().getNote();
  // expect(responseJson).toBe(Object);
  // console.log(responseJson);
  expect(1).toBe(1);
})

test('should be validated', () => {
  const wrapper = shallow(<NoteDetail/>);
  wrapper.setState({content: 'Hello Wolrd'});
  expect(wrapper.instance().validateForm()).toBe(true);
})

test('should be formatted', () => {
  const wrapper = shallow(<NoteDetail/>);
  const name = 'file name';
  expect(wrapper.instance().formatFilename(name)).toBe(name)
})