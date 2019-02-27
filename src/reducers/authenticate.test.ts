import { actionTypes } from '../actions/authenticate';
import authenticate from './authenticate'

test('should return the initial state', () => {
  expect(authenticate(undefined, {} as {
    type: string,
    payload: Object,
  } )).toEqual({
    isAuthenticated: false
  })
})
test('should handle LOGIN_SUCCESS', () => {
  expect(authenticate({} as { isAuthenticated: boolean }, {type: actionTypes.LOGIN_SUCCESS, payload: true } )).toEqual({
    isAuthenticated: true
  })
})
