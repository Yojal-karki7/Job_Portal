import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/slices/authSlice";
import jobSlice from "../redux/slices/jobSlice"
import companySlice from "../redux/slices/companySlice"
import applicationSlice from "../redux/slices/applicationSlice"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
    auth: authSlice,
    job:jobSlice,
    company: companySlice,
    application: applicationSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export default store;
