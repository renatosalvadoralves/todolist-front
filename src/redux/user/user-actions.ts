import {
  SET_CURRENT_USER_SUCCESS,
  SET_CURRENT_USER_FAILURE,
  SET_LOADING,
  NameType,
  UserActionTypes,
  LoadingType,
} from './user-types';

export const setCurrentUserSuccess = (name: NameType): UserActionTypes => ({
  type: SET_CURRENT_USER_SUCCESS,
  payload: name,
});

export const setCurrentUserFailure = (): UserActionTypes => ({
  type: SET_CURRENT_USER_FAILURE,
});

export const setLoading = (loading: LoadingType): UserActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});
