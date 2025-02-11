import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// slice
import appReducer from "./slices/app";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  // Todo => Create and map reducer
  app: appReducer,
});

export { rootPersistConfig, rootReducer };
