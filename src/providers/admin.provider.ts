import { useActions } from '@/hooks/useActions'
import { CourseType } from '@/interfaces/course.interface'
import { FileFolderType } from '@/store/file/file.interface'
import { FC, ReactNode, useEffect } from 'react'

export interface AppProviderProps {
	courses: CourseType[]
	children: ReactNode
	fileFolders: FileFolderType[]
	course: CourseType
}

const AppProvider: FC<AppProviderProps> = ({
	courses,
	children,
	fileFolders,
	course,
}) => {
	const { getCourses, getFolders, getCourse } = useActions()

	useEffect(() => {
		if (courses?.length) {
			getCourses(courses)
		}

		if (fileFolders?.length) {
			getFolders(fileFolders)
		}

		if (course) {
			getCourse(course)
		}
	}, [])

	return children
}

export default AppProvider
