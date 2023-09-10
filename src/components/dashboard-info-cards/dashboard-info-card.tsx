import { Grid } from '@chakra-ui/react'
import DashboardInfoCardItem from './dashboard-info-card-item'

const DashboardInfoCards = () => {
	return (
		<Grid
			gridTemplateColumns={{
				base: '1fr',
				sm: '1fr 1fr',
				md: '1fr 1fr 1fr',
				lg: '1fr 1fr 1fr 1fr',
			}}
			gap={4}
			my={6}
		>
			{[1, 2, 3, 4].map(item => (
				<DashboardInfoCardItem key={item} />
			))}
		</Grid>
	)
}

export default DashboardInfoCards
