import { headerMenuItems } from '@/config/constants'
import { Box, Button, Flex, HStack, Heading, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri'
import { HeaderProps } from './header.props'
const Header = ({ colorScheme, color, pos }: HeaderProps) => {
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
					<Heading
						onClick={() => router.push('/')}
						cursor={'pointer'}
						color={textColor}
						textTransform={'uppercase'}
					>
						Nátiyje
					</Heading>
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
			</Box>
		</Box>
	)
}

export default Header
