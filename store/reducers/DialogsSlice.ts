import { createSlice } from '@reduxjs/toolkit'

interface DialogsState {
  addImageDialog: boolean
  loginDialog: boolean
}

const initialState: DialogsState = {
  addImageDialog: false,
  loginDialog: false,
}

export const DialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    openImageDialog(state) {
      state.addImageDialog = true
    },
    closeImageDialog(state) {
      state.addImageDialog = false
    },
    openLoginDialog(state) {
      state.loginDialog = true
    },
    closeLoginDialog(state) {
      state.loginDialog = false
    },
  },
})

export const dialogsReducer = DialogsSlice.reducer

export const dialogsActions = DialogsSlice.actions
