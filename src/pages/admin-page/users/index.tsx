import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { AdminUsersPageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'

const Students = () => {
	useAdminRedirect()
	return <AdminUsersPageComponent />
}

export default withAdminLayout(Students)

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
