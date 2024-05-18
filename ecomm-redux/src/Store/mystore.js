import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Combine your reducers
const reducers = combineReducers({
  cart: CartSlice,
  products: ProductSlice
});

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  debug: true,
  storage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

// Create the Redux Persist store
export const persistor = persistStore(store);
