import { loadImage } from '@/helpers/load-image'
import {
	Box,
	Card,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	Image,
	Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import {
	AiOutlineEye,
	AiOutlinePlayCircle,
	AiOutlineStar,
} from 'react-icons/ai'
import { CourseItemProps } from './course-item.props'
const CourseItem: FC<CourseItemProps> = ({ course }) => {
	const router = useRouter()
	return (
		<Card
			shadow={'lg'}
			cursor={'pointer'}
			_hover={{ shadow: 'xl' }}
			transition={'.3s ease'}
		>
			<Image
				onClick={() => router.push(`/courses/${course.slug}`)}
				p={4}
				src={loadImage(course?.image as string) || ''}
				width={'full'}
				objectFit={'contain'}
				maxH={'300px'}
				borderRadius={'20px'}
			/>
			<Flex
				p={4}
				pt={0}
				align={'center'}
				justifyContent={'space-between'}
				gap={4}
			>
				<Flex align={'center'} gap={'10px'}>
					<Icon as={AiOutlineStar} color={'gold'} fontSize={'18px'} />
					<Text fontSize={'16px'}>4.5(120)</Text>
				</Flex>
				<Flex align={'center'} gap={'10px'}>
					<Icon as={AiOutlineEye} color={'red.400'} fontSize={'18px'} />
					<Text fontSize={'16px'}>23.400</Text>
				</Flex>
				<Flex align={'center'} gap={'10px'}>
					<Icon
						as={AiOutlinePlayCircle}
						color={'green.400'}
						fontSize={'18px'}
					/>
					<Text fontSize={'16px'}>44 sabaq</Text>
				</Flex>
			</Flex>
			<Divider color={'gray.100'} />
			<Box p={4}>
				<Heading
					fontSize={'24px'}
					fontWeight={'500'}
					mb={2}
					color={'textColor'}
				>
					{course?.title}
				</Heading>
				<Flex mt={'15px'} justify={'space-between'} alignItems={'center'}>
					<HStack spacing={'7px'} align={'center'}>
						<Image
							src={loadImage(course.teacher?.avatar || '') || '/avatar.jpg'}
							w={'40px'}
							height={'40px'}
							rounded={'full'}
							objectFit={'cover'}
						/>
						<Text color={'lightTextColor'}>{course?.teacher?.fullName}</Text>
					</HStack>

					<HStack>
						<Text
							color={'green.600'}
							px={3}
							py={1}
							rounded={'md'}
							bg={'green.50'}
						>
							{course?.price
								? course?.price?.toLocaleString() + ' sum'
								: 'Biypul'}
						</Text>
					</HStack>
				</Flex>
			</Box>
		</Card>
	)
}

export default CourseItem
