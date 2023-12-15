import { Container, SectionOverlay } from '@/components'
import PaymentCard from '@/components/payment-card/payment-card'
import PaymentCourseDetailsCard from '@/components/payment-course-details-card/payment-course-details-card'
import { Box, Flex } from '@chakra-ui/react'

const PaymentPageComponent = () => {
	return (
		<Box>
			<SectionOverlay />
			<Container py={6}>
				<>
					<Flex gap={6} alignItems={'flex-start'}>
						<Box bg={'green.100'} w={'70%'}>
							<PaymentCourseDetailsCard />
						</Box>
						<Box w={'30%'}>
							<PaymentCard />
						</Box>
					</Flex>
				</>
			</Container>
		</Box>
	)
}

export default PaymentPageComponent
