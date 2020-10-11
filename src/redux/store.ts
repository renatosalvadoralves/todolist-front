import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const bindMiddleware = (middleware: Array<Middleware>) => {
  if (process.env.REACT_APP_NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([]));

export const persistor = persistStore(store);
