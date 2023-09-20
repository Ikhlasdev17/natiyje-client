import {
	Container,
	CourseDashboardMain,
	CourseDashboardMenu,
} from '@/components'
import { Box, Button, Flex, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { BsListCheck } from 'react-icons/bs'

const DashboardPageComponent = () => {
	const [menu, setMenu] = useState(false)
	return (
		<Box minHeight={'100vh'} bg={'#F6F7FB'}>
			<Container>
				<Flex gap={3} py={12} align={'start'} minH={'100vh'}>
					<Box
						w={{
							base: 'full',
							lg: '70%',
						}}
					>
						<CourseDashboardMain />
					</Box>
					<Box
						transition={'.3s ease'}
						w={{
							base: '80%',
							md: '300px',
							lg: '30%',
						}}
						bg={'white'}
						p={2}
						rounded={'md'}
						pos={{
							base: 'fixed',
							lg: 'sticky',
						}}
						left={{
							base: menu ? '30px' : '-100%',
							lg: 0,
						}}
						maxH={'100vh'}
						overflowY={'auto'}
						overflowX={'auto'}
						top={'120px'}
					>
						<CourseDashboardMenu />
					</Box>
				</Flex>
			</Container>
			<Button
				display={{
					base: 'flex',
					lg: 'none',
				}}
				pos={'fixed'}
				right={0}
				top={'50%'}
				colorScheme='brand'
				borderRightRadius={'none'}
				onClick={() => setMenu(!menu)}
			>
				<Icon as={BsListCheck} fontSize={'22px'} />
			</Button>
		</Box>
	)
}

export default DashboardPageComponent
