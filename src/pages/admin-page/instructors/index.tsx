import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { AdminInstructorPageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'

const Instructors = () => {
	useAdminRedirect()
	return <AdminInstructorPageComponent />
}

export default withAdminLayout(Instructors)

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
