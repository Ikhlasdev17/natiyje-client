import { useAuth } from '@/hooks/useAuth'
import { withAdminLayout } from '@/layouts/admin-layout'
import { DashboardPageComponent } from '@/page-components'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Index = () => {
	const { user } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!user) {
			router.push('/')
		}

		if (user?.role === 'USER') {
			router.push('/')
		}
	}, [user, router.pathname])

	return <DashboardPageComponent />
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
