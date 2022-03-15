import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  open: false,
  title: null,
  description: null,
  content: null,
  onClickYes: null,
  onClickNo: null,
  yesLabel: 'YES',
  noLabel: 'No',
  yesButtonOnly: false,
};

const initialState = {
  modal: modalInitialState,
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    openModal(state, action) {
      AppSlice.actions.resetModal();
      state.modal = { ...state.modal, ...action.payload };
    },
    resetModal(state) {
      state.modal = modalInitialState;
    },
    closeModal(state) {
      state.modal = { ...state.modal, open: false };
    },
  },

  extraReducers: () => {},
});

export const selectModal = () => (state) => state.app.modal;

export const { openModal, resetModal, closeModal } = AppSlice.actions;

export default AppSlice.reducer;
