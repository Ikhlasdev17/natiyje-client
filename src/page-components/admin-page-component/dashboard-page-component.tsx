import DashboardChart from '@/components/dashboard-chart/dashboard-chart'
import DashboardInfoCards from '@/components/dashboard-info-cards/dashboard-info-card'
import { Stack } from '@chakra-ui/react'

const DashboardPageComponent = () => {
	return (
		<Stack>
			<DashboardInfoCards />
			<DashboardChart />
		</Stack>
	)
}

export default DashboardPageComponent
