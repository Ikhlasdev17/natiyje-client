import { AdminCourseItem } from '@/components'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Button,
	Flex,
	Grid,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsPlusCircle } from 'react-icons/bs'

const AdminCoursePageComponent = () => {
	const router = useRouter()
	const state = useTypedSelector(state => state.course)

	return (
		<Stack my={6}>
			<Flex justifyContent={'end'}>
				<Button
					onClick={() => router.push('/admin-page/new-course')}
					colorScheme='facebook'
					size={'sm'}
					rightIcon={<BsPlusCircle />}
				>
					Add course
				</Button>
			</Flex>
			<Tabs colorScheme='facebook'>
				<TabList>
					<Tab>Activ kurslar</Tab>
					<Tab>Draft kurslar</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid
							gridTemplateColumns={{
								base: '1fr',
								md: '1fr 1fr',
								lg: '1fr 1fr 1fr',
							}}
							gap={4}
							my={6}
						>
							{state?.courses
								?.filter(x => x.isActive)
								?.map(item => (
									<AdminCourseItem key={item._id} course={item} />
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
							my={6}
						>
							{state?.courses
								?.filter(x => !x.isActive)
								?.map(item => (
									<AdminCourseItem key={item._id} course={item} />
								))}
						</Grid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Stack>
	)
}

export default AdminCoursePageComponent
