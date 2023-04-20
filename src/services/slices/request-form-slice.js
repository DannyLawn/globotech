import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  popupState: false,
  sendingRequest: false,
  sendingAnApplication: null,
  boardMessage: ''
};



const requestFormSlice = createSlice({
  name: 'requestForm',
  initialState,
  reducers: {
    openPopup(state){
      state.popupState = true;
      state.sendingAnApplication = null;
    },
    closePopup(state){
      state.popupState = false;
    },


    sendRequest(state, action){
      state.sendingRequest = true
    },
    successfulSending(){
      return {
        ...initialState,
        sendingAnApplication: true,
        sendingRequest: false
      }
    },
    failedSending(state){
        state.sendingAnApplication= false;
        state.sendingRequest= false;
    },
    updateMessage(state, action) {
      state.boardMessage = action.payload
    },
    clearError(state, action){
      state.sendingAnApplication = null
    }
    
  },
})

export default requestFormSlice.reducer;
export const { openPopup, closePopup, sendRequest, successfulSending, failedSending, updateMessage, clearError} = requestFormSlice.actions;