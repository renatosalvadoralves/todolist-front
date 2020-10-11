import { combineReducers } from 'redux'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({ user: userReducer })

export default persistReducer<RootState>(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
