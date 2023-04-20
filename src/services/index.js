import { configureStore } from "@reduxjs/toolkit";
import appNavigationSlice from '../services/slices/app-navigation-slice';
import requestFormSlice from "./slices/request-form-slice";

const store = configureStore({
  reducer: {
    appNavigation: appNavigationSlice,
    requestForm: requestFormSlice
  },
})

export default store;