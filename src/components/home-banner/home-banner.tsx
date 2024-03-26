import { useAuth } from '@/hooks/useAuth'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import HomeBannerCards from './home-banner-card'
const HomeBanner = () => {
	const router = useRouter()
	const auth = useAuth()
	return (
		<Box
			minH={{
				base: '430px',
				md: '430px',
			}}
			w={'full'}
			pos='relative'
			display={'flex'}
			alignItems='center'
			justifyContent={'center'}
			flexDir={'column'}
			textAlign={'center'}
			px={6}
			mb={{
				base: '400px',
				md: '150px',
			}}
		>
			<Image
				w={'full'}
				pos={'absolute'}
				h={'full'}
				objectFit={'cover'}
				src={'https://f.azh.kz/news/066/022/gettyimages-484286872.jpg'}
				zIndex={-1}
			/>
			<Box
				pos={'absolute'}
				bg={'rgba(0,0,0,.4)'}
				w='full'
				h='full'
				zIndex={0}
			></Box>
			<Box zIndex={'1'}>
				<Heading
					display={'flex'}
					fontSize={{
						base: '30px',
						md: '40px',
					}}
					color={'white'}
					textShadow={'lg'}
					mt={10}
				>
					Nátiyje.uz - Siz kútkennende joqarı nátiyje ushın!
				</Heading>
				<Text textShadow={'lg'} color={'white'} my={6} fontSize={'24px'}></Text>
				<Flex gap={4} justifyContent={'center'}>
					<Button
						px={6}
						h={12}
						display={'inline-block'}
						variant={'outline'}
						colorScheme='gray'
						_hover={{
							background: 'rgba(0,0,0,.2)',
						}}
						color={'white'}
						onClick={() => router.push('/courses')}
					>
						Kurslarımız
					</Button>
					{auth.user ? (
						<Button
							px={6}
							h={12}
							display={'inline-block'}
							variant={'solid'}
							colorScheme='brand'
							onClick={() => router.push('/enrolled-courses')}
						>
							Sabaqlardı dawam etiw
						</Button>
					) : (
						<Button
							px={6}
							h={12}
							display={'inline-block'}
							variant={'solid'}
							colorScheme='brand'
							onClick={() => router.push('/register')}
						>
							Dizimnen otiw
						</Button>
					)}
				</Flex>
				<HomeBannerCards />
			</Box>
		</Box>
	)
}

export default HomeBanner
