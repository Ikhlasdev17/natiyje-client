import {
	Box,
	BoxProps,
	Flex,
	HStack,
	Heading,
	Icon,
	Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import {
	AiOutlineEye,
	AiOutlinePlayCircle,
	AiOutlineStar,
} from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

const CourseDetailMainInfo: FC<BoxProps> = ({ ...props }) => {
	return (
		<Box
			p={{
				base: 0,
				lg: 6,
			}}
			my={{
				base: 5,
				lg: 0,
			}}
			w={'full'}
			{...props}
		>
			<Heading
				color={'#5F5982'}
				fontWeight={'500'}
				fontSize={{
					base: '24px',
					md: '40px',
				}}
				mb={'20px'}
			>
				Adobe CC Masterclass: Photoshop, Illustrator, XD & InDesign
			</Heading>
			<Text
				color={'#5F5982'}
				fontSize={{
					base: '18px',
					md: '24px',
				}}
				fontWeight={'400'}
				mb={'20px'}
			>
				Learn graphic design today with Photoshop, Illustrator, Adobe XD,
				InDesign & more in this Adobe CC Masterclass!
			</Text>
			<Flex
				gap={'24px'}
				flexDir={{
					base: 'column',
					lg: 'row',
				}}
			>
				<HStack>
					<Icon color={'gold'} as={AiOutlineStar} />
					<Text fontSize={'14px'} color={'lightTextColor'}>
						4.5 (4.5 (1,348 ratings)
					</Text>
				</HStack>
				<HStack>
					<Icon color={'brand.700'} as={AiOutlineEye} />
					<Text fontSize={'14px'} color={'lightTextColor'}>
						45 oqiwshi satip aldi
					</Text>
				</HStack>
				<HStack>
					<Icon as={BiTimeFive} />
					<Text fontSize={'14px'} color={'lightTextColor'}>
						52 saat
					</Text>
				</HStack>
				<HStack>
					<Icon color={'green'} as={AiOutlinePlayCircle} />
					<Text fontSize={'14px'} color={'lightTextColor'}>
						42 sabaq
					</Text>
				</HStack>
			</Flex>
		</Box>
	)
}

export default CourseDetailMainInfo