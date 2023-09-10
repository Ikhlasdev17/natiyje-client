import { HomeBanner } from '@/components'
import HomeCourses from '@/components/home-courses/home-courses'
import { Box } from '@chakra-ui/react'
import HomeMidBanner from './home-mid-banner'

const HomePageComponent = () => {
	return (
		<Box>
			<HomeBanner />
			{/* <HomeAchieveCards /> */}
			<HomeMidBanner />
			<HomeCourses />
		</Box>
	)
}

export default HomePageComponent
