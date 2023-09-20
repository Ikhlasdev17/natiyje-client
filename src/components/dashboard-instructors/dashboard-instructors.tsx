import {
	Box,
	Flex,
	HStack,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

const DashboardInstructors = () => {
	return (
		<Stack
			p={4}
			border={'1px'}
			m={{
				base: 0,
				md: 4,
			}}
			w={{
				base: 'full',
				md: '40%',
			}}
			borderColor={useColorModeValue('gray.100', 'gray.700')}
			rounded={'md'}
			maxHeight={'50vh'}
			overflowY={'auto'}
		>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/100'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Bazarbay Tursinbaev
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998907280613
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					234 oqiwshi
				</Text>
			</HStack>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/102'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Jasur Dabilov
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998905567813
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					355 oqiwshi
				</Text>
			</HStack>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/101'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Ikhlas Aralbaev
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998953555020
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					355 oqiwshi
				</Text>
			</HStack>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/100'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Bazarbay Tursinbaev
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998907280613
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					234 oqiwshi
				</Text>
			</HStack>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/102'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Jasur Dabilov
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998905567813
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					355 oqiwshi
				</Text>
			</HStack>
			<HStack
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
				align={'center'}
				justifyContent={'space-between'}
				py={2}
			>
				<Flex align={'center'} justifyContent={'space-between'} gap={4}>
					<Image
						src='https://picsum.photos/101'
						w={'37px'}
						height={'37px'}
						rounded='full'
					/>
					<Box>
						<Text
							cursor={'pointer'}
							_hover={{ color: 'green.300' }}
							fontSize={'16px'}
						>
							Ikhlas Aralbaev
						</Text>
						<Text color={'gray.500'} fontSize={'12px'}>
							+998953555020
						</Text>
					</Box>
				</Flex>

				<Text
					px={3}
					py={1}
					fontSize={'12px'}
					rounded={'md'}
					bg={'green.100'}
					color={'green.700'}
				>
					355 oqiwshi
				</Text>
			</HStack>
		</Stack>
	)
}

export default DashboardInstructors
