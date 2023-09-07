import { Box, Button, Flex, HStack, Heading, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { RiMenu4Line } from 'react-icons/ri'
import { HeaderProps } from './header.props'
const Header = ({ colorScheme, color, pos }: HeaderProps) => {
	const textColor = color === 'white' ? 'white' : 'gray.800'

	return (
		<Box
			w={'full'}
			py={'30px'}
			bg={colorScheme === 'white' ? 'white' : 'transparent'}
			transition={'.3s ease'}
			pos={pos}
			zIndex={50}
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
				<Flex alignItems={'center'} gap={'35px'}>
					<Heading color={textColor} textTransform={'uppercase'}>
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
						<Button color={textColor} variant={'link'}>
							<Link href={'/'}>Bas bet</Link>
						</Button>
						<Button color={textColor} variant={'link'}>
							<Link href={'/'}>Kurslar</Link>
						</Button>
						<Button color={textColor} variant={'link'}>
							<Link href={'/'}>Blog</Link>
						</Button>
						<Button color={textColor} variant={'link'}>
							<Link href={'/'}>Mentorlarimiz</Link>
						</Button>
						<Button color={textColor} variant={'link'}>
							<Link href={'/'}>Baylanis</Link>
						</Button>
					</Flex>
				</Flex>

				<HStack gap={'35px'}>
					{/* <Icon as={AiOutlineShoppingCart} /> */}
					<Button color={textColor} variant={'link'}>
						<Link href={'/'}>Kiriw</Link>
					</Button>
					<Button colorScheme='brand'>Dizimnen o'tiw</Button>
				</HStack>
			</Box>
		</Box>
	)
}

export default Header
