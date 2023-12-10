import { CourseType } from '@/interfaces/course.interface'
import { SectionType } from '@/interfaces/section.interface'
import { UserType } from '@/interfaces/user.interface'

export interface CourseInitialStateProps {
	courses: CourseType[]
	isLoading: boolean
	error: string | null | unknown
	sections: SectionType[]
	course: CourseType | null
	courseStudents: UserType[] | []
}

export interface CourseCreateBodyProps {
	data: CourseType
	callback: () => void
	errorCallback: () => void
}
