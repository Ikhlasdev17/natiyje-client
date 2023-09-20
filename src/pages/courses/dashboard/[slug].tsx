import { useTypedSelector } from '@/hooks/useTypedSelector'
import { withLayout } from '@/layouts/layout'
import { CourseDashboardPageComponent } from '@/page-components'
import NotFoundPageComponent from '@/page-components/not-found-page-component/not-found-page-component'
import { UserService } from '@/services/user.service'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const Dashboard = () => {
	const { user } = useTypedSelector(state => state.user)
	const { query, push } = useRouter()

	if (user?.courses?.findIndex(item => item.slug === query.slug) === -1) {
		return <NotFoundPageComponent />
	}

	return <CourseDashboardPageComponent />
}

export default withLayout(Dashboard)

export const getServerSideProps: GetServerSideProps = async ({
	req,
	params,
}) => {
	try {
		const fullCourse = await UserService.getFullCourseData(
			params?.slug as string,
			req?.cookies?.refresh as string
		)

		return {
			props: {
				fullCourse: fullCourse,
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
