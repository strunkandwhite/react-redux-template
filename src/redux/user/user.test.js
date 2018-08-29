import { userTypes, userActions, userReducer } from './'

const machoMan = 'machomanrandysavage'
const hulkHogan = '22inchpythons'

describe('user actions', () => {
  describe('setUserName', () => {
    it('returns a payload with the user name', () => {
      const expectedPayload = {
        type: userTypes.SET_USER_NAME,
        payload: machoMan,
      }
      expect(userActions.setUserName(machoMan)).toEqual(expectedPayload)
    })
  })
})

describe('user reducers', () => {
  describe(userTypes.SET_USER_NAME, () => {
    it('should set the user name', () => {
      const expectedState = {
        name: machoMan,
      }
      expect(userReducer({ name: hulkHogan }, { type: userTypes.SET_USER_NAME, payload: machoMan })).toEqual(
        expectedState,
      )
    })
  })
  describe('default', () => {
    it('should return the initialized state if it exists', () => {
      const expectedState = {
        name: machoMan,
      }
      expect(userReducer({ name: machoMan }, {})).toEqual(expectedState)
    })

    it('should return the initial state if no state is passed in', () => {
      const expectedState = { user: null }
      expect(userReducer()).toEqual(expectedState)
    })
  })
})
