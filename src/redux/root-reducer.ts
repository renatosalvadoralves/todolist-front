import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';

import userReducer from './user/user-reducer';

const saveSubsetFilter = createFilter('user', ['name']);

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user'],
  transforms: [saveSubsetFilter],
};

const rootReducer = combineReducers({ user: userReducer });

export default persistReducer<RootState>(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
