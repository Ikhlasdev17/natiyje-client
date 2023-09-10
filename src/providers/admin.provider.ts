import { useActions } from '@/hooks/useActions'
import { CourseType } from '@/interfaces/course.interface'
import { FC, ReactNode, useEffect } from 'react'

export interface AppProviderProps {
	courses: CourseType[]
	children: ReactNode
}

const AppProvider: FC<AppProviderProps> = ({ courses, children }) => {
	const { getCourses } = useActions()

	useEffect(() => {
		getCourses(courses)
	}, [])

	return children
}

export default AppProvider
