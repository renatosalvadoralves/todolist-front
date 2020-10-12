import {
  SET_LOADING,
  TaskActionTypes,
  SET_TASK,
  taskState,
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  SET_ERROR,
} from './task-types';

const INITIAL_STATE: taskState = {
  data: null,
  error: false,
  loading: false,
};

const taskReducer = (state = INITIAL_STATE, action: TaskActionTypes) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    case REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload._id),
      };
    case UPDATE_TASK:
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

export default taskReducer;
