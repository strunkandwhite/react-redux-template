import { SET_USER_NAME } from './types'

export function setUserName(name) {
  return {
    type: SET_USER_NAME,
    payload: name,
  }
}
