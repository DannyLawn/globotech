import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  headerState: true,
  lineFxState: true,
  footerState: true,
  descriptionState: false,
  technologyState: false,
  productsState: false,
  projectsState: false,
  contactsState: false,
  aboutUsState: false
};



const appNavigationSlice = createSlice({
  name: 'appNavigation',
  initialState,
  reducers: {
    openMainPage() {
      return {
        ...initialState,
        descriptionState: true,
        technologyState: true
      }
    },
    openServicesPage() {
      return {
        ...initialState,
        productsState: true
      }
    },
    openProjectsPage() {
      return {
        ...initialState,
        projectsState: true
      }
    },
    openContactsPage() {
      return {
        ...initialState,
        contactsState: true
      }
    },
    openAboutUsPage() {
      return {
        ...initialState,
        headerState: false,
        lineFxState: false,
        footerState: false,
        aboutUsState: true
      }
    }
  },
})

export default appNavigationSlice.reducer;
export const { openMainPage, openServicesPage, openProjectsPage, openContactsPage, openAboutUsPage } = appNavigationSlice.actions;