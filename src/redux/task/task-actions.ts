import {
  SET_LOADING,
  LoadingType,
  TaskActionTypes,
  ITaskType,
  ADD_TASK,
  UPDATE_TASK,
  SET_TASK,
  SET_ERROR,
  ErrorType,
  REMOVE_TASK,
} from './task-types';

export const addTask = (data: ITaskType): TaskActionTypes => ({
  type: ADD_TASK,
  payload: data,
});

export const updateTask = (data: ITaskType): TaskActionTypes => ({
  type: UPDATE_TASK,
  payload: data,
});

export const removeTask = (data: ITaskType): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: data,
});

export const setTask = (data: ITaskType[]): TaskActionTypes => ({
  type: SET_TASK,
  payload: data,
});

export const setError = (error: ErrorType): TaskActionTypes => ({
  type: SET_ERROR,
  payload: error,
});

export const setLoading = (loading: LoadingType): TaskActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});
