import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import AdminEmployeePageComponent from '@/page-components/admin-page-component/admin-employee-page-component'
import { GetServerSideProps } from 'next'

const Employee = () => {
	useAdminRedirect()
	return <AdminEmployeePageComponent />
}

export default withAdminLayout(Employee)

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
