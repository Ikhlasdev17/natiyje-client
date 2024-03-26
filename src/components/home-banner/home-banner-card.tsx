import { Flex, HStack, Image, Text } from '@chakra-ui/react'

const HomeBannerCards = () => {
	return (
		<Flex
			shadow={'lg'}
			bg={'white'}
			p={'33px'}
			py={'20px'}
			zIndex={1}
			pos={'absolute'}
			bottom={{
				base: '-350px',
				md: '-70px',
			}}
			minH={'100px'}
			left={'50%'}
			transform={'translateX(-50%)'}
			gap={14}
			minW={{
				base: '90%',
				md: '80%',
				lg: '60%',
			}}
			justify={{
				base: 'start',
				md: 'center',
			}}
			flexWrap={{
				base: 'wrap',
				md: 'nowrap',
			}}
			flexDir={{
				base: 'column',
				md: 'row',
			}}
			rounded={'md'}
		>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon1.svg' width={54} height={54} />
				<Text fontSize={'lg'}>Kúshli ortalıq</Text>
			</HStack>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon2.svg' width={54} height={54} />
				<Text fontSize={'lg'}>Qısqa waqıtta</Text>
			</HStack>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon3.svg' width={54} height={54} />
				<Text fontSize={'lg'}>Kushli bilim</Text>
			</HStack>
		</Flex>
	)
}

export default HomeBannerCards
