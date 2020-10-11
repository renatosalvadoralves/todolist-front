import { UserActionTypes, userState, SET_CURRENT_USER } from './user-types'

const INITIAL_STATE: userState = {
  name: null,
}

const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
