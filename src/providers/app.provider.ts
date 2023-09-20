import { useActions } from '@/hooks/useActions'
import { CourseType } from '@/interfaces/course.interface'
import { FileFolderType } from '@/store/file/file.interface'
import { FC, ReactNode, useEffect } from 'react'

export interface AppProviderProps {
	courses: CourseType[]
	children: ReactNode
	fileFolders: FileFolderType[]
	course: CourseType
	fullCourse: CourseType
}

const AppProvider: FC<AppProviderProps> = ({
	courses,
	children,
	course,
	fullCourse,
}) => {
	const { getCourses, getCourse, getFullCourse } = useActions()

	useEffect(() => {
		if (courses?.length) {
			getCourses(courses)
		}

		if (course) {
			getCourse(course)
		}

		if (fullCourse) {
			getFullCourse(fullCourse)
		}
	}, [course, courses, fullCourse])

	return children
}

export default AppProvider
