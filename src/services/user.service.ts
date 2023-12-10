import {
	getAuthUrl,
	getCourseUrl,
	getSmsUrl,
	getUserUrl,
} from '@/api/api.constants'
import $axios, { axiosClassic } from '@/api/api.interceptor'
import { removeTokensCookie, saveTokensCookie } from '@/helpers/auth.helper'
import { CreateUserType, UserType } from '@/interfaces/user.interface'
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
	async changeCoverImage(image: string) {
		const response = await $axios.put(getUserUrl('change-cover'), {
			coverImage: image,
		})

		return response.status === 200 ? response.data : null
	},
	async changeAvatar(image: string) {
		const response = await $axios.put(getUserUrl('change-avatar'), {
			avatar: image,
		})

		return response.status === 200 ? response.data : null
	},
	async updateData(data: UserType) {
		const response = await $axios.put(getUserUrl('update-data'), {
			data,
		})

		return response.status === 200 ? response.data : null
	},
	async getFullCourseData(slug: string, refresh: string) {
		const response = await axiosClassic.get(
			getCourseUrl(`full-course/${slug}`),
			{
				headers: {
					Authorization: 'Bearer ' + refresh,
				},
			}
		)

		if (response.status !== 200) return null
		return response.data
	},
	async sendSMSCodeRegister(phone: string) {
		const response = await axiosClassic.post(getSmsUrl('send-otp'), {
			phone,
		})

		return response
	},

	async sendSmsCodeForgetPassword(phone: string) {
		const response = await axiosClassic.post(getSmsUrl('send-otp-fp'), {
			phone,
		})

		return response
	},

	async checkIsExistUser(phone: string) {
		const response = await axiosClassic.post(getAuthUrl('exist-user'), {
			phone,
		})

		return response
	},

	async verifyOTP(otp: string, phone: string) {
		const response = await axiosClassic.post(getSmsUrl('verify-otp'), {
			phone: phone,
			otpCode: otp,
		})

		return response
	},

	async changePassword(phone: string, password: string) {
		const response = await axiosClassic.post(getAuthUrl('update-password'), {
			phone,
			password,
		})

		return response
	},

	async createUserByAdmin(userData: CreateUserType) {
		return $axios.post(getUserUrl(`create-user`), userData)
	},

	async enrollCourse(courseId: string) {
		return $axios.post(getUserUrl(`enroll-course/${courseId}`))
	},
}
