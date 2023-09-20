import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import ProfileMyCourses from '../profile-my-courses/profile-my-courses'
import ProfileSettings from '../profile-settings/profile-settings'

const ProfileMain = () => {
	return (
		<Box>
			<Tabs size={'lg'} colorScheme='brand' variant={'enclosed-colored'}>
				<TabList
					overflowX={'auto'}
					overflowY={'hidden'}
					flexDir={{
						base: 'column',
						md: 'row',
					}}
				>
					<Tab>Sazlawlar</Tab>
					<Tab>Oqiliwdagi kurslar</Tab>
					<Tab>Juwmaqlangan kurslar</Tab>
					<Tab>Paroldi ozgertiw</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ProfileSettings />
					</TabPanel>
					<TabPanel>
						<ProfileMyCourses />
					</TabPanel>
					<TabPanel>Juwmaqlangan kurslar</TabPanel>
					<TabPanel>Paroldi ozgertiw</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default ProfileMain
