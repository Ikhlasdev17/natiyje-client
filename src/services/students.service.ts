import { getUserUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { UserType } from '@/interfaces/user.interface'

export const StudentsService = {
	async getStudents() {
		const response = await $axios.get<UserType[]>(getUserUrl('students'))
		return response.data
	},
}
