import { SET_CURRENT_USER, NameType, UserActionTypes } from './user-types'

export const setCurrentUser = (name: NameType): UserActionTypes  => ({
  type: SET_CURRENT_USER,
  payload: name,
})


