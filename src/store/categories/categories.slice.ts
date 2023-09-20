import { createSlice } from '@reduxjs/toolkit'
import { fetchAllCategories } from './categories.actions'
import { CategoryInitialStateType } from './categories.interface'

export const initialState: CategoryInitialStateType = {
	categories: [],
	isLoading: false,
}

export const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAllCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchAllCategories.fulfilled, (state, action) => {
				state.isLoading = false
				state.categories = action.payload
			})
			.addCase(fetchAllCategories.rejected, (state, action) => {
				state.isLoading = false
			})
	},
})

export const categoryReducer = categorySlice.reducer
