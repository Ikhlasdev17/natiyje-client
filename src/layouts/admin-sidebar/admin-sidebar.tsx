import { adminSidebarMenus } from '@/config/constants'
import { useActions } from '@/hooks/useActions'
import {
	Box,
	Button,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BiLogOutCircle } from 'react-icons/bi'

const AdminSidebar = () => {
	const router = useRouter()
	const { logout } = useActions()

	return (
		<Box
			w={'full'}
			bg={'indigo.500'}
			h={'100vh'}
			overflowY={'auto'}
			borderRight={'1px '}
			borderRightColor={useColorModeValue('gray.100', 'gray.700')}
		>
			<Heading
				py={6}
				textAlign={'center'}
				onClick={() => router.push('/')}
				cursor={'pointer'}
				textTransform={'uppercase'}
				color={'gray.500'}
				borderBottom={'1px'}
				borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
			>
				<Image
					src={useColorModeValue('/dark-logo.svg', '/light-logo.svg')}
					onClick={() => router.push('/')}
					cursor={'pointer'}
					textTransform={'uppercase'}
					width={120}
					mx={'auto'}
				/>
			</Heading>

			<Stack p={4}>
				{adminSidebarMenus.map(item => (
					<Button
						key={item.id}
						display={'flex'}
						justifyContent={'flex-start'}
						gap={3}
						pl={4}
						h={12}
						colorScheme='facebook'
						variant={router.pathname === item.path ? 'solid' : 'ghost'}
						onClick={() => router.push(item.path)}
					>
						<item.icon />
						<Text>{item.label}</Text>
					</Button>
				))}
				<Divider />
				<Button
					display={'flex'}
					justifyContent={'flex-start'}
					gap={3}
					pl={4}
					h={12}
					colorScheme='facebook'
					variant={'ghost'}
					onClick={() => {
						logout()
					}}
				>
					<BiLogOutCircle />
					<Text>Shigiw</Text>
				</Button>
			</Stack>
		</Box>
	)
}

export default AdminSidebar
