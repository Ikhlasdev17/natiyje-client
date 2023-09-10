import { Card, CardBody, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { DashboardInfoCardPropTypes } from './dashboard-info-card.props'

const DashboardInfoCardItem: FC<DashboardInfoCardPropTypes> = () => {
	return (
		<GridItem>
			<Card>
				<CardBody p={4} pos={'relative'}>
					<Text mb={2} fontSize={'14px'}>
						Total revenue
					</Text>
					<Heading fontSize={'22px'}>$45,231.89</Heading>
					<Text fontSize={'12px'}>+20.1% from last month</Text>
					<Icon
						as={AiOutlineDollarCircle}
						pos={'absolute'}
						top={4}
						right={4}
						opacity={0.7}
					/>
				</CardBody>
			</Card>
		</GridItem>
	)
}

export default DashboardInfoCardItem
