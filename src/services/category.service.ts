import { getCategoryUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'

export const CategoryService = {
	async getAll() {
		const response = await $axios.get(getCategoryUrl('all'))
		return response.data
	},
}
