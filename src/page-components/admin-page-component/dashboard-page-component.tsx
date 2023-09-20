import { DashboardInstructors } from '@/components'
import DashboardChart from '@/components/dashboard-chart/dashboard-chart'
import DashboardInfoCards from '@/components/dashboard-info-cards/dashboard-info-card'
import { Flex, Stack } from '@chakra-ui/react'

const DashboardPageComponent = () => {
	return (
		<Stack>
			<DashboardInfoCards />
			<Flex
				flexDir={{
					base: 'column',
					md: 'row',
				}}
				gap={4}
			>
				<DashboardChart />
				<DashboardInstructors />
			</Flex>
		</Stack>
	)
}

export default DashboardPageComponent
