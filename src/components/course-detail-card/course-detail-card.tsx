import { loadImage } from '@/helpers/load-image'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Box,
	Button,
	Divider,
	HStack,
	Heading,
	Icon,
	Image,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
	AiFillPlayCircle,
	AiOutlineFacebook,
	AiOutlineFieldTime,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
	AiOutlineWhatsApp,
	AiOutlineYoutube,
} from 'react-icons/ai'
import { BiDesktop } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { HiLanguage } from 'react-icons/hi2'
import CourseDetailMainInfo from '../course-detail-main-info/course-detail-main-info'
import EmbedVideoModal from '../embed-video-modal/embed-video-modal'

const CourseDetailCard = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { course } = useTypedSelector(state => state.course)
	const { user } = useTypedSelector(state => state.user)
	const router = useRouter()

	return (
		<Box
			w={'full'}
			minH={'full'}
			bg={'white'}
			rounded='md'
			shadow={{
				base: 'none',
				lg: 'lg',
			}}
			p={5}
		>
			<EmbedVideoModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				embedVideo={course?.embedVideo}
			/>

			<Box
				pos={'relative'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Box
					height={'full'}
					w={'full'}
					bg={'rgba(0,0,0,.4)'}
					pos={'absolute'}
					rounded={'md'}
				></Box>
				<Image
					src={loadImage(course?.image as string) || ''}
					rounded={'md'}
					w={'full'}
					maxH={'250px'}
					objectFit={'contain'}
				/>
				<Icon
					onClick={onOpen}
					as={AiFillPlayCircle}
					pos={'absolute'}
					fontSize={'40px'}
					color={'brand.500'}
					bg={'white'}
					rounded={'full'}
					cursor={'pointer'}
					_active={{
						transform: 'scale(.95)',
					}}
				/>
			</Box>

			<CourseDetailMainInfo
				display={{
					base: 'block',
					lg: 'none',
				}}
			/>

			<Heading color={'textColor'} fontSize={'30px'} my={4} fontWeight={'500'}>
				{course?.price?.toLocaleString()} sum
			</Heading>

			{user ? (
				user?.courses?.findIndex(item => item._id === course?._id) === -1 ? (
					<Button colorScheme='brand' w={'full'} h={12}>
						Hazir satip aliw
					</Button>
				) : (
					<Button
						colorScheme='brand'
						w={'full'}
						h={12}
						onClick={() => {
							router.push(`/courses/dashboard/${course?.slug}`)
						}}
					>
						Kursti dawam etiw
					</Button>
				)
			) : (
				<Button
					onClick={() => router.push('/register')}
					colorScheme='brand'
					w={'full'}
					h={12}
				>
					Dizimnen otiw
				</Button>
			)}

			<Text
				my={4}
				fontSize={'24px'}
				fontWeight={'600'}
				color={'lightTextColor'}
			>
				Bul kurs oz ishine aladi:
			</Text>

			<Stack>
				<HStack mb={'15px'} spacing={'20px'}>
					<Icon fontSize={'20px'} color={'green.400'} as={HiLanguage} />
					<Text color={'lightTextColor'} fontWeight={'400'} fontSize={'16px'}>
						Til - Qaraqalpaq
					</Text>
				</HStack>
				<HStack mb={'15px'} spacing={'20px'}>
					<Icon fontSize={'20px'} color={'green.400'} as={BiDesktop} />
					<Text color={'lightTextColor'} fontWeight={'400'} fontSize={'16px'}>
						Barshe qurilma arqali koriw.
					</Text>
				</HStack>
				<HStack mb={'15px'} spacing={'20px'}>
					<Icon fontSize={'20px'} color={'green.400'} as={AiOutlineFieldTime} />
					<Text color={'lightTextColor'} fontWeight={'400'} fontSize={'16px'}>
						Videolar bir omir sizde qaladi.
					</Text>
				</HStack>
				<HStack mb={'15px'} spacing={'20px'}>
					<Icon fontSize={'20px'} color={'green.400'} as={BsCheck2Circle} />
					<Text color={'lightTextColor'} fontWeight={'400'} fontSize={'16px'}>
						Pitiriwshilerge sertifikat.
					</Text>
				</HStack>
			</Stack>

			<Divider mb={'20px'} />

			<Text color={'textColor'} fontWeight={'600'}>
				Kursti bolisiw
			</Text>

			<HStack mt={3}>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					color={'white'}
					display={'flex'}
					alignItems={'center'}
					fontSize={'24px'}
					cursor='pointer'
					as={AiOutlineInstagram}
				/>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					fontSize={'24px'}
					cursor='pointer'
					color={'white'}
					display={'flex'}
					as={AiOutlineFacebook}
				/>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					fontSize={'24px'}
					cursor='pointer'
					color={'white'}
					display={'flex'}
					as={AiOutlineWhatsApp}
				/>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					fontSize={'24px'}
					cursor='pointer'
					color={'white'}
					display={'flex'}
					as={AiOutlineTwitter}
				/>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					fontSize={'24px'}
					cursor='pointer'
					color={'white'}
					display={'flex'}
					as={AiOutlineLinkedin}
				/>
				<Icon
					p={1}
					bg='gray.300'
					rounded={'md'}
					fontSize={'24px'}
					cursor='pointer'
					color={'white'}
					display={'flex'}
					as={AiOutlineYoutube}
				/>
			</HStack>
		</Box>
	)
}

export default CourseDetailCard
