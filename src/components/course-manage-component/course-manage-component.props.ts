import { CourseType } from '@/interfaces/course.interface'

export interface CourseManagePropsType {
	data?: CourseType
	onComplete: (data: CourseType) => void
}
