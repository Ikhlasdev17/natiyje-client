import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import HomeBannerCards from './home-banner-card'
const HomeBanner = () => {
	return (
		<Box
			minH={{
				base: '730px',
				md: '630px',
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
						base: '40px',
						md: '50px',
					}}
					color={'white'}
					textShadow={'lg'}
					mt={10}
				>
					Na'tiyje.uz - Siz ku'tkennende joqari na'tiyje ushin!
				</Heading>
				<Text textShadow={'lg'} color={'white'} my={6} fontSize={'24px'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
					deserunt voluptas ut enim consectetur.
				</Text>
				<Button
					px={6}
					h={12}
					display={'inline-block'}
					variant={'solid'}
					colorScheme='brand'
				>
					Dizimnen o'tiw
				</Button>
				<HomeBannerCards />
			</Box>
		</Box>
	)
}

export default HomeBanner
