import { getSectionUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { SectionType } from '@/interfaces/section.interface'

export const SectionService = {
	async getCourseSections(courseId: string) {
		const response = await $axios.get<SectionType[]>(
			`api/section/find/${courseId}`
		)
		return response.data
	},
	async createSection(sectionId: string, title: string) {
		const response = await $axios.post(getSectionUrl(`create/${sectionId}`), {
			title,
		})

		return response
	},
	async updateSectionPosition(courseId: string, sections: string[]) {
		const response = await $axios.put(
			getSectionUrl(`change-position/${courseId}`),
			{ sections }
		)
		return response
	},
	async deleteSection(courseId: string, sectionId: string) {
		const response = await $axios.delete(
			getSectionUrl(`delete/${courseId}/${sectionId}`)
		)

		return response
	},
}
