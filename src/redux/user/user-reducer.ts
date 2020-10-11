import {
  UserActionTypes,
  userState,
  SET_CURRENT_USER_FAILURE,
  SET_LOADING,
  SET_CURRENT_USER_SUCCESS,
} from './user-types';

const INITIAL_STATE: userState = {
  name: null,
  error: false,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        name: action.payload,
        error: false,
      };
    case SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        name: null,
        error: true,
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

export default userReducer;
