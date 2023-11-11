import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export default configureAppStore;