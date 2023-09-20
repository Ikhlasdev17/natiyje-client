import { createSlice } from '@reduxjs/toolkit'
import {
	changeLessonPosition,
	createCourse,
	createLesson,
	createSection,
	deleteCourse,
	deleteSection,
	getCourseSections,
	updateCourse,
} from './course.actions'
import { CourseInitialStateProps } from './course.interface'

export const initialState: CourseInitialStateProps = {
	courses: [],
	isLoading: false,
	error: null,
	sections: [],
	course: null,
}

export const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		getCourses(state, action) {
			state.courses = action.payload
		},
		getCourse(state, action) {
			state.course = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(createCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(createCourse.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(createCourse.rejected, state => {
				state.isLoading = false
			})
			.addCase(getCourseSections.pending, state => {
				state.isLoading = true
			})
			.addCase(getCourseSections.fulfilled, (state, action) => {
				state.isLoading = false
				state.sections = action.payload
			})
			.addCase(getCourseSections.rejected, state => {
				state.isLoading = false
			})
			.addCase(createSection.pending, state => {
				state.isLoading = true
			})
			.addCase(createSection.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(createSection.rejected, state => {
				state.isLoading = false
			})
			.addCase(changeLessonPosition.pending, state => {
				state.isLoading = true
			})
			.addCase(changeLessonPosition.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(changeLessonPosition.rejected, state => {
				state.isLoading = false
			})
			.addCase(deleteSection.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteSection.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(deleteSection.rejected, state => {
				state.isLoading = false
			})
			.addCase(createLesson.pending, state => {
				state.isLoading = true
			})
			.addCase(createLesson.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(createLesson.rejected, state => {
				state.isLoading = false
			})
			.addCase(deleteCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(deleteCourse.rejected, state => {
				state.isLoading = false
			})
			.addCase(updateCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(updateCourse.fulfilled, (state, action) => {
				state.isLoading = false
			})
			.addCase(updateCourse.rejected, state => {
				state.isLoading = false
			})
	},
})

export const courseSliceActions = courseSlice.actions

export const courseReducer = courseSlice.reducer