import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react'

const HomeMidBanner = () => {
	return (
		<Box my={'40px'} py={'100px'} bg={'#fff'}>
			<Box
				w={{
					base: '90%',
					md: '70%',
				}}
				mx={'auto'}
			>
				<Flex
					align={'center'}
					gap={'90px'}
					flexDir={{
						base: 'column',
						lg: 'row',
					}}
				>
					<Stack flex={1}>
						<Heading
							fontSize={'40px'}
							color={'textColor'}
							mb={'30px'}
							fontWeight={'500'}
						>
							Natiyje platformasi sizge usinis etedi!
						</Heading>
						<Box color={'lightTextColor'} fontSize={'24px'} mb={'30px'}>
							87% of people learning for professional development report career
							benefits like getting a promotion, a raise, or starting a new
							career
						</Box>
						<Stack>
							<HStack mb={'20px'}>
								<Image src={'./check.svg'} width={30} height={30} alt='' />
								<Box color={'textColor'}>Top instructors from around world</Box>
							</HStack>
							<HStack mb={'20px'}>
								<Image src={'./check.svg'} width={30} height={30} alt='' />
								<Text color={'textColor'}>Top courses for your team.</Text>
							</HStack>
						</Stack>
						<Box>
							<Button colorScheme='brand'>Haziraq baslaw</Button>
						</Box>
					</Stack>
					<Box
						flex={1}
						height={'450px'}
						w={{
							base: 'full',
							md: '500px',
						}}
						pos={'relative'}
					>
						<Image
							alt=''
							src={'/mid-banner.jpg'}
							width={'full'}
							height={'full'}
							objectFit={'cover'}
							rounded={'md'}
						/>
					</Box>
				</Flex>
			</Box>
		</Box>
	)
}

export default HomeMidBanner
