import { getCourseUrl } from '@/api/api.constants'
import { axiosClassic } from '@/api/api.interceptor'
import { CourseType } from '@/interfaces/course.interface'

export const CourseService = {
	async fetchAll() {
		const response = await axiosClassic.get<CourseType[]>(getCourseUrl('all'))
		return response.data
	},
}
