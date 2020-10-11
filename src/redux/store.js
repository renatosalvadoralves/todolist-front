import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const store = createStore(rootReducer, bindMiddleware([]))

export const persistor = persistStore(store)
