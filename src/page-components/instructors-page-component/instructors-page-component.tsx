import { Container, SectionOverlay } from '@/components'
import { instructors } from '@/config/constants'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Grid,
	GridItem,
	HStack,
	Icon,
	Image,
	Text,
} from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'

const InstructorPageComponent = () => {
	return (
		<>
			<SectionOverlay h={'280px'} />
			<Container>
				<>
					<Flex
						h={'280px'}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Text fontSize={'40px'} color={'textColor'} fontWeight={'500'}>
							Mentorlarimiz
						</Text>
						<Breadcrumb>
							<BreadcrumbItem>
								<BreadcrumbLink href='#'>Bas bet</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href='#'>Mentorlarimiz</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</Flex>
					<Grid
						gridTemplateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr 1fr',
						}}
						gap={'30px'}
						mt={12}
					>
						{instructors.map(item => (
							<GridItem
								key={item._id}
								cursor={'pointer'}
								_hover={{
									img: {
										transform: 'scale(1.2)',
									},
								}}
							>
								<Box w={'full'} h={'280px'} overflow={'hidden'} rounded={'md'}>
									<Image
										src={item.avatar}
										w={'full'}
										h={'280px'}
										rounded={'md'}
										objectFit={'cover'}
										transition={'.3s ease'}
									/>
								</Box>
								<Flex
									my={'18px'}
									alignItems={'center'}
									justifyContent={'space-between'}
								>
									<Text fontSize={'18px'} color={'#5F5982'}>
										{item.fullName}
									</Text>
									<HStack spacing={'8px'}>
										<Icon color={'yellow.500'} as={BsStar} />
										<Text fontSize={'14px'}>{item.rate}</Text>
									</HStack>
								</Flex>
							</GridItem>
						))}
					</Grid>
				</>
			</Container>
		</>
	)
}

export default InstructorPageComponent
