import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';

import userReducer from './user/user-reducer';
import projectReducer from './project/project-reducer';
import taskReducer from './task/task-reducer';

const saveSubsetFilter = createFilter('user', ['data']);

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user'],
  transforms: [saveSubsetFilter],
};

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
});

export default persistReducer<RootState>(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
