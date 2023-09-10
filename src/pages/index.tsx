import { withLayout } from '@/layouts/layout'
import { HomePageComponent } from '@/page-components'
import { CourseService } from '@/services/course.service'
import { useColorMode } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
	const router = useRouter()
	const { setColorMode } = useColorMode()

	useEffect(() => {
		if (!router.pathname.includes('admin-page')) {
			if (setColorMode) {
				setColorMode('light')
			}
		}
	}, [router.pathname, setColorMode])
	return (
		<>
			<HomePageComponent />
		</>
	)
}

export default withLayout(Home)

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await CourseService.fetchAll()

	return {
		props: {
			courses: response,
		},
	}
}
