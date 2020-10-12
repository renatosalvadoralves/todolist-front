import {
  SET_CURRENT_USER_SUCCESS,
  SET_CURRENT_USER_FAILURE,
  SET_LOADING,
  DataType,
  UserActionTypes,
  LoadingType,
} from './user-types';

export const setCurrentUserSuccess = (data: DataType): UserActionTypes => ({
  type: SET_CURRENT_USER_SUCCESS,
  payload: data,
});

export const setCurrentUserFailure = (): UserActionTypes => ({
  type: SET_CURRENT_USER_FAILURE,
});

export const setLoading = (loading: LoadingType): UserActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});
