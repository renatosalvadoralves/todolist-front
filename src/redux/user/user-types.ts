export const SET_CURRENT_USER_SUCCESS = 'SET_CURRENT_USER_SUCCESS';
export const SET_CURRENT_USER_FAILURE = 'SET_CURRENT_USER_FAILURE';
export const SET_LOADING = 'SET_LOADING';

interface setCurrentUserSuccess {
  type: typeof SET_CURRENT_USER_SUCCESS;
  payload: DataType;
}

interface setCurrentUserFailure {
  type: typeof SET_CURRENT_USER_FAILURE;
}

interface setLoading {
  type: typeof SET_LOADING;
  payload: LoadingType;
}

export interface userState {
  data: DataType | null;
  error: boolean;
  loading: boolean;
}

export type UserActionTypes =
  | setCurrentUserSuccess
  | setCurrentUserFailure
  | setLoading;

export interface DataType {
  _id: string;
  name: string;
  token: string;
}
export type LoadingType = boolean;
