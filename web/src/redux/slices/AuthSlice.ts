import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AuthState } from '../state_types/authStateType'
import { User } from './../../entities/User'
import type { RootState } from '../store'
import { IUser } from './../../@types/users'

const initialState: AuthState = {
    userData: null,
    token: null,
}

const loginUser = createAsyncThunk('user/login', async (params: any) => {
    const response = { data: new User({ login: 'check', email: 'check' }) } // * <- MOCK
    // const response = await userAPI.login(params)

    return response.data
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state: AuthState, action: PayloadAction<IUser>) => {
            state.userData = action.payload
        })
    },
})

export const { setUser } = authSlice.actions

export const authActions = {
    ...authSlice.actions,
    loginUser,
}

export const authState = (state: RootState) => state
export const selectCurrentUser = (state: RootState) => state.auth

export default authSlice.reducer
