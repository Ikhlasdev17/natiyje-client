import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { AdminCoursePageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'

const Index = () => {
	useAdminRedirect()
	return <AdminCoursePageComponent />
}

export default withAdminLayout(Index)

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
