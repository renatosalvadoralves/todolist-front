
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

interface setCurrentUser {
  type: typeof SET_CURRENT_USER
  payload: NameType
}

export interface userState {
  name: string | null
}

export type UserActionTypes = setCurrentUser
export type NameType = string

