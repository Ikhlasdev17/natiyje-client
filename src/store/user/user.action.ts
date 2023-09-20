import { LessonReviewType, UserType } from '@/interfaces/user.interface'
import { LessonService } from '@/services/lesson.service'
import { UserService } from '@/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	AuthUserResponse,
	InterfaceEmailAndPassword,
	InterfacePhoneAndPassword,
} from './user.interface'

export const register = createAsyncThunk<
	AuthUserResponse,
	InterfaceEmailAndPassword
>('user/register', async (data, thunkAPI) => {
	try {
		const response = await UserService.register(data)

		return response
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

export const logout = createAsyncThunk('user/logout', async () => {
	UserService.logout()
})

export const checkUser = createAsyncThunk('user/check', async (_, thunkApi) => {
	return await UserService.getNewTokens()
})

export const login = createAsyncThunk<
	AuthUserResponse,
	InterfacePhoneAndPassword
>('user/login', async (data, thunkAPI) => {
	try {
		const response = await UserService.login(data)
		if (response && data.callback) {
			data.callback()
		}
		return response
	} catch (error) {
		if (data.callbackError) {
			data.callbackError()
		}
		return thunkAPI.rejectWithValue(error)
	}
})

export const changeCoverImage = createAsyncThunk(
	'user/change-cover',
	async (
		{ image, callback }: { image: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = UserService.changeCoverImage(image)

			if (!response) return thunkAPI.rejectWithValue('Error')

			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const changeAvatarImage = createAsyncThunk(
	'user/change-avatar',
	async (
		{ image, callback }: { image: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = UserService.changeAvatar(image)

			if (!response) return thunkAPI.rejectWithValue('Error')

			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const updateUserData = createAsyncThunk(
	'user/update-data',
	async (
		{ data, callback }: { data: UserType; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = UserService.updateData(data)

			if (!response) return thunkAPI.rejectWithValue('Error')

			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const findLessonReviews = createAsyncThunk(
	'lesson/reviews',
	async (
		{ lessonId, callback }: { lessonId: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = LessonService.findLessonReviews(lessonId)

			if (!response) return thunkAPI.rejectWithValue('Error')

			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
export const createLessonReview = createAsyncThunk(
	'lesson/create-review',
	async (
		{
			lessonId,
			data,
			callback,
		}: { lessonId: string; data: LessonReviewType; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = LessonService.createLessonReview(lessonId, data)

			if (!response) return thunkAPI.rejectWithValue('Error')

			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
