import { Container, SectionOverlay } from '@/components'
import CourseItem from '@/components/CourseItem/course-item'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'

const EnrolledCoursePageComponent = () => {
	const { user } = useTypedSelector(state => state.user)
	return (
		<Box mb={24}>
			<SectionOverlay />
			<Container>
				<Box>
					<Heading pt={24} mb={12} color='gray.600'>
						Oqiliwdagi kurslarim
					</Heading>

					<Grid
						gridTemplateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr',
						}}
						gap={4}
					>
						{user?.courses?.map(item => (
							<GridItem key={item._id}>
								<CourseItem course={item} />
							</GridItem>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}

export default EnrolledCoursePageComponent
