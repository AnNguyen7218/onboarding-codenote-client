import {LOGGED_IN} from './type'

export const userHasAuthenticated = (value) => ({
  type: LOGGED_IN,
  payload: value
})
