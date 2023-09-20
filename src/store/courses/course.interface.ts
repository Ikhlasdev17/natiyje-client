import { CourseType } from '@/interfaces/course.interface'
import { SectionType } from '@/interfaces/section.interface'

export interface CourseInitialStateProps {
	courses: CourseType[]
	isLoading: boolean
	error: string | null | unknown
	sections: SectionType[]
	course: CourseType | null
}

export interface CourseCreateBodyProps {
	data: CourseType
	callback: () => void
	errorCallback: () => void
}
