import { errorCatch } from '@/helpers/catchError'
import axios from 'axios'
import Cookies from 'js-cookie'

export const API_URL = 'http://localhost:8000'
// export const API_URL =
// process.env.NODE_ENV === 'production'
// 	? 'http://103.195.7.191:4000'
// 	: 'http://localhost:8000'

export const axiosClassic = axios.create({
	baseURL: API_URL,
})

const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-type': 'Application/json',
	},
})

$axios.interceptors.request.use(config => {
	const accessToken = Cookies.get('access')

	if (config && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

$axios.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config

		if (
			error.response.status == 401 ||
			errorCatch(error) == 'jwt expired' ||
			(errorCatch(error) == 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true
			try {
				// await AuthService.getNewTokens()

				return $axios.request(originalRequest)
			} catch (e) {
				// if (errorCatch(e) === 'jwt expired') removeTokensCookie()
			}
		}
	}
)

export default $axios
