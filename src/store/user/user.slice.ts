import { CourseType } from '@/interfaces/course.interface'
import { LessonType } from '@/interfaces/section.interface'
import { LessonReviewType } from '@/interfaces/user.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	changeAvatarImage,
	changeCoverImage,
	checkIsExistUser,
	checkUser,
	createLessonReview,
	createUserAction,
	enrollCourse,
	findLessonReviews,
	login,
	logout,
	register,
	sendSmsForgetPass,
	sendSmsRegister,
	updatePassword,
	updateUserData,
	verifyOTP,
} from './user.action'
import { UserInitialStateType } from './user.interface'

export const initialState: UserInitialStateType = {
	user: {},
	isLoading: false,
	error: null,
	currentCourse: null,
	lesson: null,
	lessonReviews: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getFullCourse: (state, action: PayloadAction<CourseType>) => {
			state.currentCourse = action.payload
		},
		getLesson(state, action: PayloadAction<LessonType>) {
			state.lesson = action.payload
		},
	},
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
			.addCase(changeCoverImage.pending, state => {
				state.isLoading = true
			})
			.addCase(changeCoverImage.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(changeCoverImage.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(changeAvatarImage.pending, state => {
				state.isLoading = true
			})
			.addCase(changeAvatarImage.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(changeAvatarImage.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updateUserData.pending, state => {
				state.isLoading = true
			})
			.addCase(updateUserData.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(updateUserData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(findLessonReviews.pending, state => {
				state.isLoading = true
			})
			.addCase(
				findLessonReviews.fulfilled,
				(state, action: PayloadAction<LessonReviewType[]>) => {
					state.lessonReviews = action.payload
					state.isLoading = false
				}
			)
			.addCase(findLessonReviews.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(createLessonReview.pending, state => {
				state.isLoading = true
			})
			.addCase(createLessonReview.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(createLessonReview.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(sendSmsRegister.pending, state => {
				state.isLoading = true
			})
			.addCase(sendSmsRegister.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(sendSmsRegister.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(checkIsExistUser.pending, state => {
				state.isLoading = true
			})
			.addCase(checkIsExistUser.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(checkIsExistUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(verifyOTP.pending, state => {
				state.isLoading = true
			})
			.addCase(verifyOTP.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(verifyOTP.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(sendSmsForgetPass.pending, state => {
				state.isLoading = true
			})
			.addCase(sendSmsForgetPass.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(sendSmsForgetPass.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updatePassword.pending, state => {
				state.isLoading = true
			})
			.addCase(updatePassword.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(updatePassword.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(createUserAction.pending, state => {
				state.isLoading = true
			})
			.addCase(createUserAction.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(createUserAction.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(enrollCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(enrollCourse.fulfilled, state => {
				state.isLoading = false
			})
			.addCase(enrollCourse.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const userReducer = userSlice.reducer
export const userSliceActions = userSlice.actions
