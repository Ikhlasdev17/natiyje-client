import { API_URL } from '@/api/api.interceptor'

export const loadImage = (url: string | null) => {
	if (!url) return null

	return API_URL + url
}
