import { CourseType } from '@/interfaces/course.interface'

export interface CategoryType {
	title: string
	courses: string[] | CourseType[]
	_id: string
}

export interface CategoryInitialStateType {
	categories: CategoryType[]
	isLoading: boolean
}
