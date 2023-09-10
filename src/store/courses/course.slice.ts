import { createSlice } from '@reduxjs/toolkit'
import { CourseInitialStateProps } from './course.interface'

export const initialState: CourseInitialStateProps = {
	courses: [],
	isLoading: false,
	error: null,
}

export const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		getCourses(state, action) {
			state.courses = action.payload
		},
	},
	extraReducers: builder => {},
})

export const courseSliceActions = courseSlice.actions

export const courseReducer = courseSlice.reducer
