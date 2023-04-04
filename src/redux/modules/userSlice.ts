import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux'

// Define a type for the slice state
export interface UserState {
  _id?: string
  nickname?: string
  email?: string
  phone?: string
  token?: string
  avator?: string
}

// Define the initial state using that type
const initialState: UserState = {
  nickname: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload
    },
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
