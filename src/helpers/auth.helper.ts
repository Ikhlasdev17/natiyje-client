import { AuthTokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const saveTokensCookie = (data: AuthTokens) => {
	Cookies.set('access', data.accessToken)
	Cookies.set('refresh', data.accessToken)
}

export const saveDataCookie = (key: string, value: string) => {
	Cookies.set(key, value)
}

export const removeTokensCookie = () => {
	Cookies.remove('access')
	Cookies.remove('refresh')
	Cookies.remove('role')
}
