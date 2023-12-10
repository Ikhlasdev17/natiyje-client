import { errorCatch } from '@/helpers/catchError'
import {
	CreateUserType,
	LessonReviewType,
	UserType,
} from '@/interfaces/user.interface'
import { LessonService } from '@/services/lesson.service'
import { UserService } from '@/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	AuthUserResponse,
	InterfaceEmailAndPassword,
	InterfacePhoneAndPassword,
} from './user.interface'

interface InterfaceEmailAndPasswordWithClbcs extends InterfaceEmailAndPassword {
	callback: () => void
	error: () => void
}

export const register = createAsyncThunk<
	AuthUserResponse,
	InterfaceEmailAndPasswordWithClbcs
>('user/register', async (data, thunkAPI) => {
	try {
		const response = await UserService.register(data)

		if (response.user) {
			data.callback()
		} else {
			data.error()
		}

		return response
	} catch (error) {
		data.error()
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

export const sendSmsRegister = createAsyncThunk(
	'auth/send-sms',
	async (
		{
			phone,
			callback,
			errorCallback,
		}: { phone: string; callback: () => void; errorCallback: () => void },
		thunkAPI
	) => {
		try {
			const response = await UserService.sendSMSCodeRegister(phone)
			if (response.status === 201 || response.status === 200) {
				callback()
			} else {
				errorCallback()
			}

			return response
		} catch (error) {
			errorCallback()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const sendSmsForgetPass = createAsyncThunk(
	'auth/send-sms-forget-pass',
	async (
		{
			phone,
			callback,
			errorCallback,
		}: { phone: string; callback: () => void; errorCallback: () => void },
		thunkAPI
	) => {
		try {
			const response = await UserService.sendSmsCodeForgetPassword(phone)
			if (response.status === 201 || response.status === 200) {
				callback()
			} else {
				errorCallback()
			}

			return response
		} catch (error) {
			errorCallback()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const checkIsExistUser = createAsyncThunk(
	'auth/check-isexist',
	async (
		body: { phone: string; callback: () => void; error: () => void },
		thunkAPI
	) => {
		try {
			const response = await UserService.checkIsExistUser(body.phone)

			if (response.data.isExist) {
				body.error()
			} else {
				body.callback()
			}

			return response
		} catch (error) {
			body.error()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const verifyOTP = createAsyncThunk(
	'auth/verify-otp',
	async (
		body: {
			phone: string
			otp: string
			callback: () => void
			error: () => void
		},
		thunkAPI
	) => {
		try {
			const response = await UserService.verifyOTP(body.otp, body.phone)

			if (response.status === 201) {
				body.callback()
			} else {
				body.error()
			}

			return response
		} catch (error) {
			body.error()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const updatePassword = createAsyncThunk(
	'auth/update-password',
	async (
		body: {
			phone: string
			password: string
			callback: () => void
			error: () => void
		},
		thunkAPI
	) => {
		try {
			const response = await UserService.changePassword(
				body.phone,
				body.password
			)

			if (response.status === 200) {
				body.callback()
			} else {
				body.error()
			}

			return response
		} catch (error) {
			body.error()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

interface CreateUserActionType extends CreateUserType {
	callback: (userId?: string) => void
	errorCallback: (error: string) => void
}

export const createUserAction = createAsyncThunk<
	'Success',
	CreateUserActionType
>('user/create-by-admin', async (userData, thunkAPI) => {
	return await UserService.createUserByAdmin(userData)
		.then(response => {
			if (response && (response?.status === 200 || response?.status === 201)) {
				userData.callback(response.data._id)
				return response.data
			} else {
				userData.errorCallback('Error or user already exist!')
				return thunkAPI.rejectWithValue('Error')
			}
		})
		.catch(error => {
			console.log(error.response.data.message)
			userData.errorCallback(errorCatch(error.response.data.error))
		})
})

export const enrollCourse = createAsyncThunk(
	'user/enroll-course',
	async (
		{
			courseId,
			callback,
			errorCallback,
		}: {
			courseId: string
			callback: () => void
			errorCallback: () => void
		},
		thunkApi
	) => {
		try {
			const response = await UserService.enrollCourse(courseId)

			if ((response && response.status === 200) || response.status === 201) {
				callback()
				return response.data
			} else {
				errorCallback()
			}
		} catch (error) {
			errorCallback()
			return thunkApi.rejectWithValue(error)
		}
	}
)
