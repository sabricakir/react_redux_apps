import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./index";
import thunk from "redux-thunk";

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  }, applyMiddleware(thunk));

  return store;
}

export default configureAppStore;