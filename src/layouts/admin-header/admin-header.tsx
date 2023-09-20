import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Image,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsGrid, BsSearch } from 'react-icons/bs'
import { HiMenuAlt1 } from 'react-icons/hi'
import { HiMoon, HiOutlineShieldCheck, HiSun } from 'react-icons/hi2'
import { AdminHeaderPropsType } from './admin-header.props'

const AdminHeader: FC<AdminHeaderPropsType> = () => {
	const { user } = useAuth()
	const router = useRouter()
	const { logout, openSidebar } = useActions()
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Box
			w={'full'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
			bg={useColorModeValue('white', 'gray.800')}
			rounded={'md'}
			p={2}
			border={'1px'}
			borderColor={useColorModeValue('gray.100', 'gray.700')}
		>
			<HStack>
				<Box
					display={'flex'}
					alignItems={'center'}
					bg={useColorModeValue('gray.50', 'gray.700')}
					rounded={'md'}
					p={2}
					gap={2}
				>
					<Icon mx={1} fontSize={'14px'} color={'gray.500'} as={BsSearch} />
					<Input
						_placeholder={{
							color: 'gray.300',
						}}
						border={'none'}
						outline={'none'}
						placeholder='Search'
						variant={'unstyled'}
					/>
				</Box>
				<Button
					onClick={() => openSidebar()}
					variant={'ghost'}
					colorScheme='facebook'
				>
					<Icon fontSize={'20px'} as={HiMenuAlt1} />
				</Button>
			</HStack>

			<HStack>
				<>
					<Button
						onClick={toggleColorMode}
						variant={'ghost'}
						colorScheme='facebook'
					>
						<Icon
							fontSize={'20px'}
							as={colorMode === 'light' ? HiMoon : HiSun}
						/>
					</Button>
					<Menu>
						{({ isOpen }) => (
							<>
								<MenuButton
									display={'flex'}
									alignItems={'center'}
									gap={2}
									cursor={'pointer'}
									as={HStack}
								>
									<Flex alignItems={'center'} gap={2}>
										<Image
											objectFit={'cover'}
											w='37px'
											h='37px'
											rounded={'full'}
											src={
												loadImage(user?.avatar || null) ||
												'https://picsum.photos/200'
											}
										/>
									</Flex>
								</MenuButton>
								<MenuList>
									<MenuItem
										cursor={'pointer'}
										as={Flex}
										alignItems={'center'}
										gap={2}
									>
										<BiUserCircle fontSize={'16px'} />
										Profil
									</MenuItem>
									<MenuItem
										cursor={'pointer'}
										as={Flex}
										alignItems={'center'}
										gap={2}
									>
										<BsGrid fontSize={'16px'} />
										Kurslarim
									</MenuItem>
									{user?.role !== 'USER' ? (
										<MenuItem
											onClick={() => router.push('/admin-page')}
											cursor={'pointer'}
											as={Flex}
											alignItems={'center'}
											gap={2}
										>
											<HiOutlineShieldCheck fontSize={'16px'} />
											Admin panel
										</MenuItem>
									) : null}
									<MenuItem
										cursor={'pointer'}
										as={Flex}
										alignItems={'center'}
										gap={2}
										onClick={() => logout()}
									>
										<AiOutlinePoweroff fontSize={'16px'} />
										Shigiw
									</MenuItem>
								</MenuList>
							</>
						)}
					</Menu>
				</>
			</HStack>
		</Box>
	)
}

export default AdminHeader
