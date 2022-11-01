import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TokenPayload } from '../../gql/graphql'

interface UserState {
  user: TokenPayload | null
}

const initialState: UserState = {
  user: null,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TokenPayload>) {
      state.user = action.payload
    },
  },
})

export const userReducer = UserSlice.reducer

export const userActions = UserSlice.actions
