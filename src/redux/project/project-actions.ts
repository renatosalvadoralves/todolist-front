import {
  SET_LOADING,
  LoadingType,
  ProjectActionTypes,
  IProjectType,
  ADD_PROJECT,
  UPDATE_PROJECT,
  SET_PROJECT,
  SET_ERROR,
  ErrorType,
  REMOVE_PROJECT,
} from './project-types';

export const addProject = (data: IProjectType): ProjectActionTypes => ({
  type: ADD_PROJECT,
  payload: data,
});

export const updateProject = (data: IProjectType): ProjectActionTypes => ({
  type: UPDATE_PROJECT,
  payload: data,
});

export const removeProject = (data: IProjectType): ProjectActionTypes => ({
  type: REMOVE_PROJECT,
  payload: data,
});

export const setProject = (data: IProjectType[]): ProjectActionTypes => ({
  type: SET_PROJECT,
  payload: data,
});

export const setError = (error: ErrorType): ProjectActionTypes => ({
  type: SET_ERROR,
  payload: error,
});

export const setLoading = (loading: LoadingType): ProjectActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});
