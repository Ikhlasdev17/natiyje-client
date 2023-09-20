import { getLessonUrl } from '@/api/api.constants'
import $axios from '@/api/api.interceptor'
import { LessonType } from '@/interfaces/section.interface'
import { LessonReviewType } from '@/interfaces/user.interface'
export const LessonService = {
	async changeLessonPosition(sectionId: string, lessons: string[]) {
		const section = await $axios.put(
			getLessonUrl(`change-position/${sectionId}`),
			{
				lessons,
			}
		)

		return section
	},
	async createLesson(sectionId: string, lesson: LessonType) {
		const response = await $axios.post(
			getLessonUrl(`create/${sectionId}`),
			lesson
		)

		return response.data
	},
	async findLessonReviews(lessonId: string) {
		const response = await $axios.get(`/api/lesson-review/find/${lessonId}`)

		return response.data
	},
	async createLessonReview(lessonId: string, data: LessonReviewType) {
		const response = await $axios.post(`/api/lesson-review/create`, {
			...data,
			lessonId,
		})

		return response
	},
}
