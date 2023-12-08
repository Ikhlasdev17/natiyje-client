import CourseManageComponent from '@/components/course-manage-component/course-manage-component'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CourseType } from '@/interfaces/course.interface'
import { useToast } from '@chakra-ui/react'
import { FormikValues } from 'formik'
import { useRouter } from 'next/router'

const UpdateCoursePageComponent = () => {
	const { course } = useTypedSelector(state => state.course)
	const { updateCourse } = useActions()
	const toast = useToast()
	const router = useRouter()
	const onComplete = (formikValues: FormikValues) => {
		updateCourse({
			course: {
				description: formikValues.description,
				title: formikValues.title,
				embedVideo: formikValues.embedVideo,
				excerpt: formikValues.excerpt,
				image: formikValues.image,
				level: formikValues.level,
				learn: formikValues.learn,
				price: formikValues.price,
				requirements: formikValues.requirements,
				tags: formikValues.tags,
				_id: formikValues._id,
				category: formikValues.category,
				teacher: formikValues.teacher,
			} as CourseType,
			callback() {
				toast({
					title: 'Course updated successful!',
					status: 'success',
					position: 'top',
				})
				router.push('/admin-page/courses')
			},
		})
	}

	return (
		<>
			<CourseManageComponent
				data={course as CourseType}
				onComplete={onComplete}
			/>
		</>
	)
}

export default UpdateCoursePageComponent
