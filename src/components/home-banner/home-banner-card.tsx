import { Flex, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

const HomeBannerCards = () => {
	return (
		<Flex
			shadow={'lg'}
			bg={'white'}
			p={'33px'}
			zIndex={1}
			pos={'absolute'}
			bottom={{
				base: '-350px',
				md: '-70px',
			}}
			minH={'140px'}
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
		>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon1.svg' width={74} height={74} />
				<Text fontSize={'lg'}>10+ online kurslar</Text>
			</HStack>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon2.svg' width={74} height={74} />
				<Text fontSize={'lg'}>Siz qa'legen waqit</Text>
			</HStack>
			<HStack minW={'200px'} gap={3}>
				<Image alt='' src='./home-icon3.svg' width={74} height={74} />
				<Text fontSize={'lg'}>Ku'shli bilim</Text>
			</HStack>
		</Flex>
	)
}

export default HomeBannerCards
