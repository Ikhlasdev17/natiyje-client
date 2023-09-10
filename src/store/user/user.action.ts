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
