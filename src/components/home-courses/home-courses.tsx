import { Box, Button, Grid, GridItem } from '@chakra-ui/react'
import CourseItem from '../CourseItem/course-item'
import Container from '../container/container'
import SectionTitle from '../section-title/section-title'

const HomeCourses = () => {
	return (
		<Box my={'40px'}>
			<Container>
				<>
					<SectionTitle
						extraEl={<Button colorScheme='brand'>Barshe kurslar</Button>}
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
						{[1, 2, 3, 4, 5, 6].map(item => (
							<GridItem key={item}>
								<CourseItem />
							</GridItem>
						))}
					</Grid>
				</>
			</Container>
		</Box>
	)
}

export default HomeCourses
