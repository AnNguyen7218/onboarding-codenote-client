import {LOGGED_IN} from '../actions/type'

const initialState = {
  isAuthenticated: false,
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN: 
      return { ...state, isAuthenticated: action.payload }
    default: 
      return state
  }
};
