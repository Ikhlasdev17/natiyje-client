import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Box,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react'
import HTMLReactParser from 'html-react-parser'
import LessonReview from '../lesson-review/lesson-review'

const CourseDashboardMain = () => {
	const { lesson, lessonReviews } = useTypedSelector(state => state.user)

	return (
		<Stack>
			<Box
				w={'full'}
				p={2}
				bg={'white'}
				rounded={'md'}
				minH={{
					base: '250px',
					md: '400px',
				}}
				overflow={'hidden'}
			>
				<Box
					as='iframe'
					src={
						lesson?.embedVideo?.includes('youtu.be')
							? lesson?.embedVideo.replace('youtu.be', 'youtube.com/embed')
							: lesson?.embedVideo
					}
					w={'full'}
					h={{
						base: '250px',
						md: '400px',
					}}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					allowFullScreen
					textAlign={'center'}
					rounded={'md'}
				/>
			</Box>

			<Box bg={'white'} p={4} rounded={'md'} w={'full'}>
				<Tabs colorScheme='brand'>
					<TabList>
						<Tab>Materiallar</Tab>
						<Tab>Pikirler ({lessonReviews?.length})</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Text fontSize={'20px'} color={'gray.600'} fontWeight={'600'}>
								{lesson?.name}
							</Text>

							<Box w={'full'}>{HTMLReactParser(lesson?.material || '')}</Box>
						</TabPanel>
						<TabPanel>
							<Box w={'full'}>
								<LessonReview />
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Stack>
	)
}

export default CourseDashboardMain
