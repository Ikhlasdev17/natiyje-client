import { headerMenuItems } from '@/config/constants'
import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import {
	Badge,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
import { BsChevronDown, BsGrid } from 'react-icons/bs'
import { HiOutlineShieldCheck } from 'react-icons/hi2'
import { RiMenu4Line } from 'react-icons/ri'
import { HeaderProps } from './header.props'

const Header = ({ colorScheme, color, pos }: HeaderProps) => {
	const { user } = useAuth()
	const { logout } = useActions()
	const [scrolly, setScrolly] = useState(0)

	const textColor =
		scrolly < 300
			? color === 'white'
				? 'white'
				: 'lightTextColor'
			: 'lightTextColor'
	const router = useRouter()
	useEffect(() => {
		window?.addEventListener('scroll', () => {
			setScrolly(window?.scrollY)
		})
	})

	return (
		<Box
			w={'full'}
			py={scrolly < 300 ? '30px' : '20px'}
			bg={
				scrolly < 300
					? colorScheme === 'white'
						? 'white'
						: 'transparent'
					: 'white'
			}
			transition={'.3s ease'}
			pos={scrolly < 300 ? pos : pos === 'absolute' ? 'fixed' : 'sticky'}
			zIndex={50}
			top={0}
			shadow={scrolly < 300 ? 'none' : '0 0 10px rgba(0,0,0,.1)'}
		>
			<Box
				display={'flex'}
				mx={'auto'}
				alignItems={'center'}
				justifyContent={'space-between'}
				w={{
					base: '90%',
					md: '80%',
				}}
			>
				<Flex
					alignItems={'center'}
					gap={'35px'}
					w={{
						base: 'full',
						sm: 'auto',
					}}
					justifyContent={{
						base: 'space-between',
						sm: '',
					}}
				>
					<Image
						src={
							scrolly < 300
								? color === 'white'
									? '/light-logo.svg'
									: '/dark-logo.svg'
								: '/dark-logo.svg'
						}
						onClick={() => router.push('/')}
						cursor={'pointer'}
						color={textColor}
						textTransform={'uppercase'}
						width={120}
					/>
					<Button
						display={{
							base: 'block',
							lg: 'none',
						}}
					>
						<Icon as={RiMenu4Line} />
					</Button>
					<Flex
						gap={6}
						display={{
							base: 'none',
							lg: 'flex',
						}}
					>
						{headerMenuItems.map(item => (
							<Button
								key={item.id}
								fontWeight={item.path === router.pathname ? '900' : '500'}
								fontSize={'16px'}
								color={textColor}
								variant={'link'}
							>
								<Link href={item.path}>{item.label}</Link>
							</Button>
						))}
					</Flex>
				</Flex>

				{!user ? (
					<>
						<HStack gap={'35px'}>
							{/* <Icon as={AiOutlineShoppingCart} /> */}
							<Button
								display={{ base: 'none', md: 'block' }}
								color={textColor}
								variant={'link'}
								fontWeight={'500'}
							>
								<Link href={'/login'}>Kiriw</Link>
							</Button>
							<Button
								display={{
									base: 'none',
									sm: 'block',
								}}
								colorScheme='brand'
								onClick={() => router.push('/register')}
							>
								Dizimnen otiw
							</Button>
						</HStack>
					</>
				) : (
					<>
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
												ml={4}
												minW='42px'
												maxW='42px'
												maxH='42px'
												minH='42px'
												rounded={'full'}
												border={'1px'}
												borderColor={'green.500'}
												objectFit={'cover'}
												src={loadImage(user.avatar || null) || '/avatar.jpg'}
											/>
											<Text
												display={{
													base: 'none',
													md: 'block',
												}}
												color={textColor}
											>
												{user.fullName}
											</Text>
											<Icon
												color={textColor}
												fontSize={'14px'}
												as={BsChevronDown}
											/>
										</Flex>
									</MenuButton>
									<MenuList>
										<MenuItem
											cursor={'pointer'}
											as={Flex}
											alignItems={'center'}
											gap={2}
											onClick={() => router.push('/profile')}
										>
											<BiUserCircle fontSize={'16px'} />
											Profil
										</MenuItem>
										<MenuItem
											cursor={'pointer'}
											as={Flex}
											alignItems={'center'}
											gap={2}
											onClick={() => {
												router.push('/enrolled-courses')
											}}
										>
											<BsGrid fontSize={'16px'} />
											Kurslarim{' '}
											<Badge colorScheme='green' rounded={'full'}>
												{' '}
												({user.courses?.length})
											</Badge>
										</MenuItem>
										{user.role !== 'USER' ? (
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
											onClick={() => {
												router.push('/register')
												logout()
											}}
										>
											<AiOutlinePoweroff fontSize={'16px'} />
											Shigiw
										</MenuItem>
									</MenuList>
								</>
							)}
						</Menu>
					</>
				)}
			</Box>
		</Box>
	)
}

export default Header
