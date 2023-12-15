import { loadImage } from '@/helpers/load-image'
import { Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'

const PaymentCourseDetailsCard = () => {
	return (
		<HStack
			p={4}
			bg={'white'}
			rounded={'md'}
			shadow={'sm'}
			alignItems={'flex-start'}
			gap={4}
		>
			<Image
				rounded={'md'}
				minW={'150px'}
				maxW={'150px'}
				h={'100px'}
				objectFit={'cover'}
				src='https://picsum.photos/300'
			/>
			<Stack w={'full'}>
				<Text color={'brand.400'} fontSize={'26px'} fontWeight={'semibold'}>
					Fullstack development
				</Text>
				<Flex
					mt={'15px'}
					justify={'space-between'}
					alignItems={'center'}
					w={'full'}
					gap={4}
				>
					<HStack spacing={'7px'} align={'center'}>
						<Image
							src={loadImage('') || '/avatar.jpg'}
							w={'40px'}
							height={'40px'}
							rounded={'full'}
							objectFit={'cover'}
						/>
						<Text color={'lightTextColor'}>Ikhlas Aralbaev</Text>
					</HStack>

					<HStack>
						<Text
							color={'green.600'}
							px={3}
							py={1}
							rounded={'md'}
							bg={'green.50'}
						>
							500 000 sum
						</Text>
					</HStack>
				</Flex>
			</Stack>
		</HStack>
	)
}

export default PaymentCourseDetailsCard
