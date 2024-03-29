import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { AdminCoursePageComponent } from '@/page-components'
import { CourseService } from '@/services/course.service'
import { GetServerSideProps } from 'next'

const Index = () => {
	useAdminRedirect()
	return <AdminCoursePageComponent />
}

export default withAdminLayout(Index)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const response = await CourseService.fetchAll()

	if (req.cookies.refresh) {
		return {
			props: { courses: response },
		}
	} else {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
}
