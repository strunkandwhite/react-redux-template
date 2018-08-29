import { SET_USER_NAME } from './types'

const initialState = {
  user: null,
}

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}
