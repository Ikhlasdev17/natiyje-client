import { withLayout } from '@/layouts/layout'
import { CoursesPageComponent } from '@/page-components'
import { CourseService } from '@/services/course.service'
import { GetServerSideProps } from 'next'

const Courses = () => {
	return (
		<>
			<CoursesPageComponent />
		</>
	)
}

export default withLayout(Courses)

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await CourseService.fetchAll()

	return {
		props: {
			courses: response,
		},
	}
}
