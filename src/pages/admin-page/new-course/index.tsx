import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { NewCoursePageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'

const NewCourse = () => {
	useAdminRedirect()
	return (
		<>
			<NewCoursePageComponent />
		</>
	)
}

export default withAdminLayout(NewCourse)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	if (req.cookies.refresh) {
		return {
			props: {},
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
