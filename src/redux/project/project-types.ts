export const ADD_PROJECT = 'ADD';
export const REMOVE_PROJECT = 'REMOVE';
export const UPDATE_PROJECT = 'UPDATE';
export const SET_PROJECT = 'SET';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

interface addProject {
  type: typeof ADD_PROJECT;
  payload: IProjectType;
}

interface updateProject {
  type: typeof UPDATE_PROJECT;
  payload: IProjectType;
}

interface removeProject {
  type: typeof REMOVE_PROJECT;
  payload: IProjectType;
}

interface setProject {
  type: typeof SET_PROJECT;
  payload: IProjectType[];
}

interface setError {
  type: typeof SET_ERROR;
  payload: ErrorType;
}

export interface projectState {
  data: IProjectType[] | null;
  error: boolean;
  loading: boolean;
}

interface setLoading {
  type: typeof SET_LOADING;
  payload: LoadingType;
}

export type ProjectActionTypes =
  | addProject
  | updateProject
  | setProject
  | setError
  | setLoading
  | removeProject;

export interface IProjectType {
  _id: string;
  name: string;
  user: string;
}

export type LoadingType = boolean;
export type ErrorType = boolean;
