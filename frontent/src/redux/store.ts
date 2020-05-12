import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const persistConfig = {
  whitelist: ['settings', 'user'],
  key: 'readableStore',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
const store: any = createStore(persistedReducer, composeWithDevTools(middleware));
const persistor = persistStore(store);

export { store, persistor };
