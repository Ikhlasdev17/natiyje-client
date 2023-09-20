import {
	Container,
	ProfileMain,
	ProfileSidebar,
	SectionOverlay,
} from '@/components'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FileService } from '@/services/file.service'
import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Text,
	useToast,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { BsCamera } from 'react-icons/bs'

const ProfilePageComponent = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const { user, isLoading } = useTypedSelector(state => state.user)
	const { changeCoverImage } = useActions()
	const toast = useToast()

	const onUpload = async (file: FileList | null) => {
		if (!file) return
		setLoading(true)
		const image = await FileService.uploadImage(file[0], 'user')
		if (!image)
			return toast({
				title: 'Keshiresiz qatelik juz berdi!',
				status: 'warning',
				position: 'top',
			})

		changeCoverImage({
			image: image?.path as string,
			callback: () => {
				toast({
					title: 'Cover image changed successful!',
					status: 'success',
					position: 'top',
				})
				setLoading(false)
			},
		})
	}

	if (!user) {
		return (
			<Box
				pos={'relative'}
				mb={20}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				flexDir={'column'}
				minH={'400px'}
			>
				<SectionOverlay />
				<Heading fontSize={'100px'}>404</Heading>
				<Text fontSize={'24px'}>Bunday bet tabilmadi!</Text>
				<Link href={'/'}>Bas betke qaytiw.</Link>
			</Box>
		)
	}

	return (
		<Box pos={'relative'} mb={20}>
			<SectionOverlay coverImage={user?.coverImage || null} h={'500px'} />
			<Flex justify={'end'}>
				<label>
					<Input
						type='file'
						accept='image/*'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							onUpload(e.target.files)
						}
						display={'none'}
						id='file'
					/>
					<Button
						isLoading={loading || isLoading}
						as={Box}
						type='submit'
						mr={4}
						mt={4}
						variant={'outline'}
						colorScheme='twitter'
						leftIcon={<BsCamera />}
					>
						Change cover
					</Button>
				</label>
			</Flex>
			<Container>
				<>
					<Flex
						mt={'150px'}
						gap={6}
						flexDir={{
							base: 'column',
							md: 'row',
						}}
					>
						<Box
							border={'1px'}
							borderColor={'gray.100'}
							w={{
								base: 'full',
								md: '30%',
							}}
							bg={'white'}
							rounded={'md'}
						>
							<ProfileSidebar />
						</Box>
						<Box
							border={'1px'}
							borderColor={'gray.100'}
							w={{
								base: 'full',
								md: '70%',
							}}
							bg={'white'}
							rounded={'md'}
						>
							<ProfileMain />
						</Box>
					</Flex>
				</>
			</Container>
		</Box>
	)
}

export default ProfilePageComponent
