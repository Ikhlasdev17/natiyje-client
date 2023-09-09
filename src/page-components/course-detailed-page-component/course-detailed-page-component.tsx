import {
	Container,
	CourseDetailMainInfo,
	CourseDetailTabs,
	SectionOverlay,
} from '@/components'
import CourseDetailCard from '@/components/course-detail-card/course-detail-card'
import { Box, Flex } from '@chakra-ui/react'

const CourseDetailedPageComponent = () => {
	return (
		<>
			<SectionOverlay />

			<Container
				mt={{
					base: 0,
					md: 0,
					lg: '80px',
				}}
				width={{
					base: 'full',
					md: '90%',
					lg: '80%',
				}}
				gap={4}
				mb={14}
			>
				<>
					<Flex
						align={'stretch'}
						gap={6}
						flexDir={{
							base: 'column-reverse',
							md: 'column-reverse',
							lg: 'row',
						}}
					>
						<Box
							w={{
								base: '100%',
								lg: '70%',
							}}
						>
							<CourseDetailMainInfo
								display={{
									base: 'none',
									lg: 'block',
								}}
							/>
							<Box
								mt={{
									base: 6,
									lg: 32,
								}}
							>
								<CourseDetailTabs />
							</Box>
						</Box>
						<Box
							w={{
								base: '100%',
								md: '100%',
								lg: '30%',
							}}
							pos={{
								base: 'relative',
								md: 'relative',
								lg: 'sticky',
							}}
							top={{
								base: 0,
								md: 0,
								lg: 32,
							}}
							maxH={{
								base: '',
								lg: '100vh',
							}}
						>
							<CourseDetailCard />
						</Box>
					</Flex>
				</>
			</Container>
		</>
	)
}

export default CourseDetailedPageComponent
