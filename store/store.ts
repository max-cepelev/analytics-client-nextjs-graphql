'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dialogsReducer } from './reducers/DialogsSlice'
import { selectorsReducer } from './reducers/SelectorsSlice'
import { userReducer } from './reducers/UserSlice'

const rootReducer = combineReducers({
  userReducer,
  dialogsReducer,
  selectorsReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']

export default store
