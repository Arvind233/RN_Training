// import {createStore} from 'redux';
// import rootReducer from '../reducers/reducers';

// const store = createStore(rootReducer);

// export default store;

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers/reducers';
import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(logger),
  //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // other store configuration options
});

const persistor = persistStore(store);

export {store, persistor};
