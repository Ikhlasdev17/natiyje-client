import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { CourseType } from '@/interfaces/course.interface'
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Card,
	CardBody,
	Divider,
	HStack,
	Heading,
	Image,
	Input,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { BsList, BsPen, BsTrash } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

const AdminCourseItem = ({ course }: { course: CourseType }) => {
	const router = useRouter()
	const { deleteCourse, activateCourse, draftCourse } = useActions()
	const toast = useToast()
	const [courseTitleDel, setCourseTitleDel] = useState('')
	const { onClose, onOpen, isOpen } = useDisclosure()
	const cancelRef = useRef<any>()

	const onDelete = () => {
		deleteCourse({
			id: course._id as string,
			callback() {
				toast({
					title: 'Course deleted successfull!',
					status: 'success',
					position: 'top',
				})
				onClose()
				setTimeout(() => {
					router.reload()
				}, 1000)
				setCourseTitleDel('')
			},
		})
	}

	const changeStatus = () => {
		if (course.isActive) {
			draftCourse({
				id: course._id as string,
				callback: () => {
					router.reload()
				},
			})
		} else {
			activateCourse({
				id: course._id as string,
				callback: () => {
					router.reload()
				},
			})
		}
	}

	return (
		<Card>
			<CardBody p={3}>
				<Image
					src={loadImage(course.image as string) || 'https://picsum.photos/300'}
					rounded={'md'}
					w={'full'}
					maxH={'240px'}
					objectFit={'contain'}
				/>
				<Heading fontSize={'22px'} mt={4}>
					{course.title}
				</Heading>
				<Text mb={4}>
					{course?.price ? course?.price?.toLocaleString() + ' sum' : 'Biypul'}
				</Text>
				<Divider mb={4} />
				<HStack>
					<Button
						onClick={() => {
							setCourseTitleDel('')
							onOpen()
						}}
						colorScheme='red'
						size={'sm'}
						rightIcon={<BsTrash />}
					>
						Delete
					</Button>
					<Button
						onClick={() =>
							router.push(`/admin-page/update-course/${course.slug}`)
						}
						colorScheme='green'
						size={'sm'}
						rightIcon={<BsPen />}
					>
						Update
					</Button>
					<Button
						colorScheme='facebook'
						size={'sm'}
						rightIcon={<BsList />}
						onClick={() => router.push(`/admin-page/curriculum/${course._id}`)}
					>
						Curriculum
					</Button>
					<Button
						colorScheme='facebook'
						size={'sm'}
						rightIcon={<FaUsers />}
						onClick={() =>
							router.push(`/admin-page/course-students/${course._id}`)
						}
					>
						Students
					</Button>
				</HStack>
				<Button
					mt={3}
					colorScheme={course.isActive ? 'facebook' : 'green'}
					w={'full'}
					onClick={changeStatus}
				>
					{course?.isActive ? 'Draft course' : 'Activate'}
				</Button>
			</CardBody>

			<AlertDialog
				isOpen={isOpen}
				onClose={onClose}
				leastDestructiveRef={cancelRef}
			>
				<AlertDialogOverlay />
				<AlertDialogContent>
					<AlertDialogHeader fontSize='lg' fontWeight='bold'>
						<>Kursti oshiriwdi qaleysizbe?</>
						<AlertDialogCloseButton />
					</AlertDialogHeader>
					<AlertDialogBody>
						<Text fontSize={'14px'} mb={2} display={'flex'} gap={2}>
							Kursi oshiriw ushin kurs atin kiritin:{' '}
							<Text color={'red.400'}>{course.title}</Text>
						</Text>
						<Input
							onChange={e => setCourseTitleDel(e.target.value)}
							value={courseTitleDel}
						/>
						<AlertDialogFooter gap={2}>
							<Button size={'sm'} colorScheme='facebook' onClick={onClose}>
								Cancel
							</Button>
							<Button
								size={'sm'}
								colorScheme='red'
								onClick={onDelete}
								isDisabled={courseTitleDel !== course.title}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialog>
		</Card>
	)
}

export default AdminCourseItem
