import { getUserUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { RoleUser, UserType } from '@/interfaces/user.interface'

export const StudentsService = {
	async getStudents(roles: RoleUser[] = ['USER']) {
		const response = await $axios.get<UserType[]>(
			getUserUrl(`all?roles=${roles.join('|')}`)
		)
		return response.data
	},
}
