import { withAdminLayout } from '@/layouts/admin-layout'
import UpdateCoursePageComponent from '@/page-components/admin-page-component/update-course-page-component'
import { CourseService } from '@/services/course.service'
import { GetServerSideProps } from 'next'

const UpdateCourse = () => {
	return (
		<>
			<UpdateCoursePageComponent />
		</>
	)
}

export default withAdminLayout(UpdateCourse)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const course = await CourseService.getSingleCourseWithSlug(
			params?.slug as string
		)

		return {
			props: {
				course: course,
			},
		}
	} catch (error) {
		return {
			redirect: {
				destination: '/admin-page/courses',
				permanent: false,
			},
		}
	}
}
