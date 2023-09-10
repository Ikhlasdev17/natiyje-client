import { CourseType } from '@/interfaces/course.interface'

export interface CourseInitialStateProps {
	courses: CourseType[]
	isLoading: boolean
	error: string | null | unknown
}
