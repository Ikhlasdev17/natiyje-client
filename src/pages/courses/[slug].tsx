import { withLayout } from '@/layouts/layout'
import { CourseDetailedPageComponent } from '@/page-components'
import { CourseService } from '@/services/course.service'
import { GetServerSideProps } from 'next'

const CourseDetailed = () => {
	return (
		<>
			<CourseDetailedPageComponent />
		</>
	)
}

export default withLayout(CourseDetailed)

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
				destination: '/courses',
				permanent: false,
			},
		}
	}
}
