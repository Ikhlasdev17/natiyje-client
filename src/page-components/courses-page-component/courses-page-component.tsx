import { Container, SectionOverlay } from '@/components'
import CourseItem from '@/components/CourseItem/course-item'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Grid,
	GridItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'

const CoursesPageComponent = () => {
	const { courses } = useTypedSelector(state => state.course)

	return (
		<>
			<SectionOverlay />

			<Container>
				<>
					<Tabs
						w={'full'}
						overflowX={'auto'}
						overflowY={'hidden'}
						variant={'solid-rounded'}
						colorScheme={'brand'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<TabList my={10}>
							<Tab>Barshesi</Tab>
							<Tab>Biypul kurslar</Tab>
							<Tab>Programmalastiriw</Tab>
							<Tab>Dizayn</Tab>
							<Tab>Marketing</Tab>
						</TabList>

						<TabPanels mb={14}>
							<TabPanel>
								<Grid
									gridTemplateColumns={{
										base: '1fr',
										md: '1fr 1fr',
										lg: '1fr 1fr 1fr',
									}}
									gap={4}
								>
									{courses?.map(item => (
										<GridItem key={item._id}>
											<CourseItem course={item} />
										</GridItem>
									))}
								</Grid>
							</TabPanel>
							<TabPanel>
								<Grid
									gridTemplateColumns={{
										base: '1fr',
										md: '1fr 1fr',
										lg: '1fr 1fr 1fr',
									}}
									gap={4}
								>
									{courses?.map(item => (
										<GridItem key={item._id}>
											<CourseItem course={item} />
										</GridItem>
									))}
								</Grid>
							</TabPanel>
							<TabPanel>
								<Grid
									gridTemplateColumns={{
										base: '1fr',
										md: '1fr 1fr',
										lg: '1fr 1fr 1fr',
									}}
									gap={4}
								>
									{courses?.map(item => (
										<GridItem key={item._id}>
											<CourseItem course={item} />
										</GridItem>
									))}
								</Grid>
							</TabPanel>
							<TabPanel>
								<Grid
									gridTemplateColumns={{
										base: '1fr',
										md: '1fr 1fr',
										lg: '1fr 1fr 1fr',
									}}
									gap={4}
								>
									{courses?.map(item => (
										<GridItem key={item._id}>
											<CourseItem course={item} />
										</GridItem>
									))}
								</Grid>
							</TabPanel>
							<TabPanel>
								<Grid
									gridTemplateColumns={{
										base: '1fr',
										md: '1fr 1fr',
										lg: '1fr 1fr 1fr',
									}}
									gap={4}
								>
									{courses?.map(item => (
										<GridItem key={item._id}>
											<CourseItem course={item} />
										</GridItem>
									))}
								</Grid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</>
			</Container>
		</>
	)
}

export default CoursesPageComponent
