import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FileService } from '@/services/file.service'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	Button,
	HStack,
	Icon,
	Image,
	Input,
	Stack,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ChangeEvent, useRef, useState } from 'react'
import { BsCamera } from 'react-icons/bs'

const ProfileSidebar = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const { user, isLoading } = useTypedSelector(state => state.user)
	const { changeAvatarImage, logout } = useActions()
	const toast = useToast()
	const router = useRouter()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = useRef<HTMLButtonElement | any>()

	const onUpload = async (files: FileList | null) => {
		if (!files) return
		setLoading(true)

		const image = await FileService.uploadImage(files[0], 'user')
		changeAvatarImage({
			image: image?.path as string,
			callback() {
				toast({
					title: 'User avatar changed successful!',
					status: 'success',
					position: 'top',
				})
				setLoading(false)
			},
		})
	}

	return (
		<Box>
			<Stack p={6} justifyContent={'center'}>
				<Box
					w={'150px'}
					h={'150px'}
					mx={'auto'}
					pos={'relative'}
					rounded={'full'}
				>
					<Image
						h={'150px'}
						w={'full'}
						objectFit={'cover'}
						rounded={'full'}
						src={
							loadImage(user?.avatar as string) ||
							'https://avatars.mds.yandex.net/i?id=c521f9eb35de5167d329ad1ce22f046d_l-5236416-images-thumbs&n=13'
						}
					/>
					<Box
						pos={'absolute'}
						right={'2'}
						bottom={2}
						rounded={'full'}
						maxW={'30px'}
						w={'30px'}
						h={'40px'}
						bg={'brand.300'}
						border={'2px'}
						borderColor={'white'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						as={Button}
						isLoading={loading || isLoading}
					>
						<label>
							<Input
								display={'none'}
								type='file'
								accept='image/*'
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									onUpload(e.target.files)
								}
							/>
							<Icon
								mx={'auto'}
								as={BsCamera}
								color={'white'}
								cursor={'pointer'}
							/>
						</label>
					</Box>
				</Box>
				<Text
					textAlign={'center'}
					fontWeight={'bold'}
					color={'textColor'}
					fontSize={'24px'}
				>
					{user?.fullName}
				</Text>
				<Text textAlign={'center'} fontWeight={'500'} color={'gray.500'}>
					{user?.phone}
				</Text>
			</Stack>
			<Stack spacing={0}>
				<HStack
					py={4}
					px={6}
					w={'full'}
					borderTop={'1px'}
					borderBottomColor={'gray.100'}
					borderTopColor={'gray.100'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text>Oqiliwdagi kurslar</Text>
					<Text
						color={'white'}
						fontSize={'12px'}
						bg={'green.300'}
						px={2}
						rounded={'full'}
					>
						{user?.courses?.length}
					</Text>
				</HStack>
				<HStack
					py={4}
					px={6}
					w={'full'}
					borderBottom={'1px'}
					borderTop={'1px'}
					borderBottomColor={'gray.100'}
					borderTopColor={'gray.100'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text>Pitkerilgen kurslar</Text>
					<Text
						color={'white'}
						fontSize={'12px'}
						bg={'brand.300'}
						px={2}
						rounded={'full'}
					>
						{user?.courses?.length}
					</Text>
				</HStack>
				<HStack
					py={4}
					px={6}
					w={'full'}
					borderBottom={'1px'}
					borderBottomColor={'gray.100'}
					borderTopColor={'gray.100'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text>Sebetshedegi kurslar</Text>
					<Text
						color={'white'}
						fontSize={'12px'}
						bg={'orange.300'}
						px={2}
						rounded={'full'}
					>
						0
					</Text>
				</HStack>

				<Button
					mt={8}
					mx={6}
					variant={'outline'}
					colorScheme='brand'
					onClick={() => router.push('/courses')}
				>
					Kurslar
				</Button>
				<Button
					mt={2}
					mb={6}
					mx={6}
					variant={'ghost'}
					colorScheme='gray'
					onClick={() => {
						onOpen()
					}}
				>
					Akkounttan shigiw
				</Button>

				<AlertDialog
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}
				>
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader fontSize='lg' fontWeight='bold'>
								Akkounttan shigiw!
							</AlertDialogHeader>

							<AlertDialogBody>Akkounttan shigiwdi qaleysizbe?</AlertDialogBody>

							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onClose}>
									Biykarlaw
								</Button>
								<Button
									colorScheme='red'
									onClick={() => {
										logout()
										onClose()
										router.push('/')
									}}
									ml={3}
								>
									Shigiw
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			</Stack>
		</Box>
	)
}

export default ProfileSidebar
