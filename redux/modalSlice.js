import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupModalOpen: false
}


const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  openSignupModal: (state) => {
    state,signupModalOpen = true
  },
  closeSignupModal: (state) => {
    state,signupModalOpen = false
  }
});

export const {openSignupModal, closeSignupModal} = ModalSlice.actions;

export default ModalSlice.reducer;
