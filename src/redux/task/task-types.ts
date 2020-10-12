export const ADD_TASK = 'ADD';
export const REMOVE_TASK = 'REMOVE';
export const UPDATE_TASK = 'UPDATE';
export const SET_TASK = 'SET';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

interface addTask {
  type: typeof ADD_TASK;
  payload: ITaskType;
}

interface updateTask {
  type: typeof UPDATE_TASK;
  payload: ITaskType;
}

interface removeTask {
  type: typeof REMOVE_TASK;
  payload: ITaskType;
}

interface setTask {
  type: typeof SET_TASK;
  payload: ITaskType[];
}

interface setError {
  type: typeof SET_ERROR;
  payload: ErrorType;
}

export interface taskState {
  data: ITaskType[] | null;
  error: boolean;
  loading: boolean;
}

interface setLoading {
  type: typeof SET_LOADING;
  payload: LoadingType;
}

export type TaskActionTypes =
  | addTask
  | updateTask
  | setTask
  | setError
  | setLoading
  | removeTask;

export interface ITaskType {
  _id: string;
  name: string;
  user: string;
}

export type LoadingType = boolean;
export type ErrorType = boolean;
