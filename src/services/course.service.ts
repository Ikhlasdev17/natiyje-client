import { getCourseUrl } from '@/api/api.constants'
import $axios, { axiosClassic } from '@/api/api.interceptor'
import { CourseType } from '@/interfaces/course.interface'

export const CourseService = {
	async fetchAll() {
		const response = await axiosClassic.get<CourseType[]>(getCourseUrl('all'))
		return response.data
	},
	async createCourse(data: CourseType) {
		const response = await $axios.post(getCourseUrl('create'), data)
		return response.data
	},
	async deleteCourse(id: string) {
		const response = await $axios.delete(getCourseUrl(`delete/${id}`))
		return response
	},
	async activateCourse(id: string) {
		const response = await $axios.put(getCourseUrl(`activate/${id}`))
		return response
	},
	async draftCourse(id: string) {
		const response = await $axios.put(getCourseUrl(`draft/${id}`))
		return response
	},
	async getSingleCourse(id: string) {
		const response = await $axios.get(getCourseUrl(`get/${id}`))
		return response
	},
	async getSingleCourseWithSlug(slug: string) {
		const response = await axiosClassic.get(getCourseUrl(`slug/${slug}`))

		if (!response.data) {
			return 'error'
		}
		return response.data
	},
	async updateCourse(course: CourseType) {
		const response = await $axios.put(
			getCourseUrl(`update/${course._id}`),
			course
		)
		return response
	},
}
