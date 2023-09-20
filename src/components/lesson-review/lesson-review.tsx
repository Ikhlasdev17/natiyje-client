import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { LessonReviewType } from '@/interfaces/user.interface'
import {
	Box,
	Button,
	Divider,
	Flex,
	Image,
	Stack,
	Text,
	Textarea,
	useToast,
} from '@chakra-ui/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import ReactStars from 'react-stars'
const LessonReview = () => {
	const { lesson, lessonReviews, isLoading } = useTypedSelector(
		state => state.user
	)
	const { findLessonReviews, createLessonReview } = useActions()
	const [initialValues, setInitialValues] = useState({ text: '', rate: 5 })

	const toast = useToast()
	useEffect(() => {
		findLessonReviews({
			lessonId: lesson?._id as string,
			callback() {},
		})
	}, [lesson])

	const onSubmit = () => {
		setInitialValues({ text: '', rate: 5 })
		createLessonReview({
			lessonId: lesson?._id as string,
			data: initialValues as LessonReviewType,
			callback() {
				toast({
					title: 'Pikir bildirgeniniz ushin raxmet! :)',
					status: 'success',
					position: 'top',
				})
				setTimeout(() => {
					findLessonReviews({
						lessonId: lesson?._id as string,
						callback() {},
					})
				}, 500)
			},
		})
	}

	return (
		<Stack>
			<Box>
				<Textarea
					onChange={e =>
						setInitialValues({ ...initialValues, text: e.target.value })
					}
					value={initialValues.text}
					name='text'
				/>
				<Flex alignItems={'center'} justifyContent={'space-between'} mt={4}>
					<ReactStars
						onChange={e => setInitialValues({ ...initialValues, rate: e })}
						value={initialValues.rate}
						size={24}
					/>
					<Button
						isLoading={isLoading}
						type='submit'
						colorScheme='facebook'
						onClick={onSubmit}
						rightIcon={<BsSend />}
						isDisabled={!initialValues.rate || !initialValues.text}
					>
						Jiberiw
					</Button>
				</Flex>
			</Box>
			{lessonReviews?.map(item => (
				<Box
					p={4}
					my={2}
					border={'1px'}
					borderColor={'gray.100'}
					rounded={'md'}
				>
					<Flex align={'start'} justifyContent={'space-between'}>
						<Flex align={'center'} gap={4} justifyContent={'space-between'}>
							<Image
								w={'42px'}
								h={'42px'}
								rounded={'full'}
								objectFit={'cover'}
								src={loadImage(item.author?.avatar || null) || ''}
							/>
							<Box>
								<Text fontSize={'16px'} fontWeight={'bold'} color={'gray.600'}>
									{item.author?.fullName}
								</Text>
								<Text fontSize={'14px'}>
									{moment(item.createdAt).format('DD MMM YYYY')}
								</Text>
							</Box>
						</Flex>
						<ReactStars value={item.rate} edit={false} size={18} />
					</Flex>
					<Divider my={4} />
					<Text>{item.text}</Text>
				</Box>
			))}
		</Stack>
	)
}

export default LessonReview
