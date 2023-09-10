import useAdminRedirect from '@/hooks/useAdminRedirect'
import { withAdminLayout } from '@/layouts/admin-layout'
import { AdminBlogPageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'

const Blogs = () => {
	useAdminRedirect()
	return <AdminBlogPageComponent />
}

export default withAdminLayout(Blogs)

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
