import { configureStore } from "@reduxjs/toolkit";
import appNavigationSlice from '../services/slices/app-navigation-slice';

const store = configureStore({
  reducer: {
    appNavigation: appNavigationSlice
  },
})

export default store;