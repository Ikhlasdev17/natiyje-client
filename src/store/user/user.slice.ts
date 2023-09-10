import { createSlice } from '@reduxjs/toolkit'
import { checkUser, login, logout, register } from './user.action'
import { UserInitialStateType } from './user.interface'

export const initialState: UserInitialStateType = {
	user: {},
	isLoading: false,
	error: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.isLoading = false
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.user = null
				state.isLoading = false
			})
			.addCase(checkUser.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.isLoading = false
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.isLoading = false
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const userReducer = userSlice.reducer
