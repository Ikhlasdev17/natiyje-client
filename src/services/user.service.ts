import { getAuthUrl } from '@/api/api.constants'
import { axiosClassic } from '@/api/api.interceptor'
import { removeTokensCookie, saveTokensCookie } from '@/helpers/auth.helper'
import Cookies from 'js-cookie'
import {
	AuthUserResponse,
	InterfaceEmailAndPassword,
	InterfacePhoneAndPassword,
} from '../store/user/user.interface'

export const UserService = {
	async register(data: InterfaceEmailAndPassword) {
		const response = await axiosClassic.post<AuthUserResponse>(
			getAuthUrl('register'),
			data
		)

		if (response.data) {
			saveTokensCookie(response.data)
		}

		return response.data
	},
	async getNewTokens() {
		const refresh = Cookies.get('refresh')

		const response = await axiosClassic.post<AuthUserResponse>(
			getAuthUrl('access'),
			{ refreshToken: refresh }
		)

		if (response.data) {
			saveTokensCookie(response.data)
		}

		return response.data
	},

	async logout() {
		removeTokensCookie()
	},
	async login(data: InterfacePhoneAndPassword) {
		const response = await axiosClassic.post(getAuthUrl('login'), data)

		if (response.data) {
			saveTokensCookie(response.data)
		}

		return response.data
	},
}
