import {
  SET_LOADING,
  ProjectActionTypes,
  SET_PROJECT,
  projectState,
  ADD_PROJECT,
  REMOVE_PROJECT,
  UPDATE_PROJECT,
  SET_ERROR,
} from './project-types';

const INITIAL_STATE: projectState = {
  data: null,
  error: false,
  loading: false,
};

const projectReducer = (state = INITIAL_STATE, action: ProjectActionTypes) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    case REMOVE_PROJECT:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload._id),
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload._id ? { ...action.payload } : item,
        ),
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
