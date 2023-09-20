import CourseManageComponent from '@/components/course-manage-component/course-manage-component'
import { useActions } from '@/hooks/useActions'
import { CourseType } from '@/interfaces/course.interface'
import { Box, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const NewCoursePageComponent = () => {
	const { createCourse } = useActions()
	const toast = useToast()
	const router = useRouter()

	const onSubmit = (data: CourseType) => {
		createCourse({
			data,
			callback: () => {
				toast({
					title: "Kurs a'wmetli qosildi!",
					status: 'success',
				})
				router.push('/admin-page/courses')
			},
			errorCallback: () => {
				toast({
					title: "Qa'telik ju'z berdi! Qayta urinip ko'rin'!",
					status: 'error',
				})
			},
		})
	}

	return (
		<Box>
			<CourseManageComponent onComplete={onSubmit} />
		</Box>
	)
}

export default NewCoursePageComponent
