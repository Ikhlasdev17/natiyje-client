import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CourseItem from '../CourseItem/course-item'
import Container from '../container/container'
import SectionTitle from '../section-title/section-title'

const HomeCourses = () => {
	const router = useRouter()
	const { courses } = useTypedSelector(state => state.course)

	return (
		<Box my={'40px'}>
			<Container>
				<>
					<SectionTitle
						extraEl={
							<Button
								onClick={() => router.push('/courses')}
								colorScheme='brand'
							>
								Barshe kurslar
							</Button>
						}
					>
						Qizigiwshiliginizga mas kursti saylan
					</SectionTitle>
					<Grid
						gridTemplateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr',
						}}
						gap={'30px'}
					>
						{courses
							?.filter(x => x.isActive)
							?.map(item => (
								<GridItem key={item._id}>
									<CourseItem course={item} />
								</GridItem>
							))}
					</Grid>
				</>
			</Container>
		</Box>
	)
}

export default HomeCourses
