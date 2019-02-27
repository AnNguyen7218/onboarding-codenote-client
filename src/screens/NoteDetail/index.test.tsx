import React from 'react';
import { shallow } from 'enzyme';
import NoteDetail from './index';
import { API, Storage } from "aws-amplify";

test('NewNote renders without crashing', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('state should be updated', () => {
  let props 
  const event = {
          target : {
            id: 'content',
            value: 'test on change content'
          }
        }
  const wrapper = shallow(<NoteDetail {...props}/>);
  wrapper.instance().handleChange(event);
  expect(wrapper.state().content).toBe(event.target.value);
});

test('should update file', () => {
  let props 
  const event = {
          target : {
            files: [
              'a file'
            ]
          }
        }
  const wrapper = shallow(<NoteDetail {...props}/>);
  wrapper.instance().handleFileChange(event);
  expect(wrapper.instance().file).toBe(event.target.files[0]);
});

test('should close loader', () => {
  let props 
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NoteDetail {...props}/>);

  wrapper.instance().handleSubmit(event);
  expect(wrapper.state().isLoading).toBe(false);
})

test('should update state', () => {
  let props 
  const event = {
    preventDefault: () => {}
  }
  const wrapper = shallow(<NoteDetail {...props}/>);

  wrapper.instance().handleDelete(event);
  expect(wrapper.state().isDeleting).toBe(false);
})

test('should get note', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  let mockResult = {
    noteId: '123123',
    content: 'this is the content',
    attachment: 'file',
    createdAt: '12/12/2012',
  }

  wrapper.setProps({match: {
    params: {
      id: '123123',
    }
  }});
  API.get = jest.fn().mockImplementation(() => {
    return mockResult
  });
  const responseJson =  wrapper.instance().getNote();
  expect(responseJson).toEqual(mockResult);
})

test('should delete note', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  let mockResult = true

  wrapper.setProps({match: {
    params: {
      id: '123123',
    }
  }});
  API.del = jest.fn().mockImplementation(() => {
    return mockResult
  });
  const responseJson =  wrapper.instance().deleteNote();
  expect(responseJson).toEqual(mockResult);
})

test('should save note', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  let mockResult = true
  let newNote = {
    noteId: '123123',
    content: 'this is the content',
    attachment: 'file',
    createdAt: '12/12/2012',
  }

  wrapper.setProps({match: {
    params: {
      id: '123123',
    }
  }});
  API.put = jest.fn().mockImplementation(() => {
    return mockResult
  });
  const responseJson =  wrapper.instance().saveNote(newNote);
  expect(responseJson).toEqual(mockResult);
})

test('should be validated', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  wrapper.setState({content: 'Hello Wolrd'});
  expect(wrapper.instance().validateForm()).toBe(true);
})

test('should be formatted', () => {
  let props 
  const wrapper = shallow(<NoteDetail {...props}/>);
  const name = 'file name';
  expect(wrapper.instance().formatFilename(name)).toBe(name)
})