import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import CourseDetailCurriculum from '../course-detail-curriculum/course-detail-curriculum'
import CourseDetailInstructor from '../course-detail-instructor/course-detail-instructor'
import CourseDetailOverview from '../course-detail-overview/course-detail-overview'
import CourseDetailReviews from '../course-detail-reviews/course-detail-reviews'

const CourseDetailTabs = () => {
	return (
		<Tabs colorScheme='brand' isFitted variant={'enclosed-colored'}>
			<TabList w={'full'} overflowX={'auto'} overflowY={'hidden'}>
				<Tab>Kurs haqqinda</Tab>
				<Tab>Sabaqlar</Tab>
				<Tab>Mentor</Tab>
				<Tab>Pikirler</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<CourseDetailOverview />
				</TabPanel>
				<TabPanel>
					<CourseDetailCurriculum />
				</TabPanel>
				<TabPanel>
					<CourseDetailInstructor />
				</TabPanel>
				<TabPanel>
					<CourseDetailReviews />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default CourseDetailTabs
