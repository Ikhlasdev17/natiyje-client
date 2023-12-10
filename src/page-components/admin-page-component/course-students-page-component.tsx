import { CreateUserForm } from '@/components'
import UsersSkeletonTable from '@/components/users-skeleton-table/users-skeleton-table'
import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CreateUserType } from '@/interfaces/user.interface'
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	FormLabel,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Select,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Table,
	TableContainer,
	Tabs,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { BsList, BsSend, BsTrash } from 'react-icons/bs'

const CourseStudentsPageComponent = () => {
	const router = useRouter()
	const {
		courseStudentsAction,
		fetchStudents,
		createUserAction,
		addStudentToCourseAction,
	} = useActions()
	const { courseStudents } = useTypedSelector(state => state.course)
	const { students, isLoading } = useTypedSelector(state => state.student)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [updatingUserData, setUpdatingUserData] =
		useState<CreateUserType | null>(null)
	const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
	const [userAddDrawerType, setUserAddDrawerType] = useState<'exist' | 'new'>(
		'new'
	)
	const toast = useToast()

	useEffect(() => {
		courseStudentsAction({ courseId: router.query.courseId as string })
	}, [router.query.courseId])

	useEffect(() => {
		fetchStudents({ roles: ['ADMIN', 'INSTRUCTOR', 'USER'] })
	}, [])

	const addStudent = (studentId: string) => {
		addStudentToCourseAction({
			courseId: router.query.courseId as string,
			studentId: studentId as string,
			callback() {
				onClose()
				toast({
					title: 'User successfull created!',
					status: 'success',
					position: 'top',
				})
				fetchStudents({ roles: ['ADMIN', 'INSTRUCTOR', 'USER'] })
				courseStudentsAction({
					courseId: router.query.courseId as string,
				})
			},
			errorCallback() {
				toast({
					title: 'Error with add user to course!',
					status: 'error',
					position: 'top',
				})
			},
		})
	}

	const onCompleteUserForm = (userData: CreateUserType) => {
		if (!updatingUserData) {
			createUserAction({
				...userData,
				callback(studentId) {
					addStudent(studentId as string)
				},
				errorCallback(message: string) {
					toast({
						title: message ?? 'Error with create user! Please try again!',
						status: 'error',
						position: 'top',
					})
				},
			})
		}
	}

	const addExistUserToCourse = () => {
		addStudent(selectedUserId as string)
	}

	return (
		<Box>
			<Flex my={6} justifyContent={'end'}>
				<Button onClick={onOpen} colorScheme='facebook'>
					Add student
				</Button>
			</Flex>
			<TableContainer>
				{isLoading ? (
					<UsersSkeletonTable />
				) : (
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>Full name</Th>
								<Th>Registered at</Th>
								<Th>Courses</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{courseStudents.map(item => (
								<Tr key={item._id}>
									<Td>
										<Flex alignItems={'center'} gap={3}>
											<Image
												src={
													loadImage(item.avatar || '') ||
													'https://avatars.mds.yandex.net/i?id=ef29cea5f91bde925197720eef0ccb04_l-5132099-images-thumbs&n=13'
												}
												w='42px'
												h='42px'
												rounded={'full'}
												objectFit={'cover'}
											/>
											<Box>
												<Text fontSize={'16px'}>{item.fullName}</Text>
												<Text fontSize={'14px'} color={'gray.500'}>
													{item.phone}
												</Text>
											</Box>
										</Flex>
									</Td>
									<Td>
										{moment(item.createdAt).format('YYYY-MM-DD HH:MM:SS')}
									</Td>
									<Td>
										<Button
											colorScheme='facebook'
											variant={'link'}
											isDisabled={item.courses?.length === 0}
										>
											Courses ({item.courses?.length})
										</Button>
									</Td>
									<Td>
										<Flex gap={4}>
											<Menu>
												<MenuButton
													as={Button}
													variant={'link'}
													rightIcon={<BsList />}
												>
													Actions
												</MenuButton>
												<MenuList>
													<MenuItem
														icon={
															<BiSolidEdit fontSize={'18px'} color='gray.300' />
														}
													>
														Update
													</MenuItem>
													<MenuItem
														icon={<BsSend fontSize={'18px'} color='gray.300' />}
													>
														Send sms
													</MenuItem>
													<MenuItem
														icon={
															<BsTrash fontSize={'18px'} color='gray.300' />
														}
														color={'red'}
													>
														Delete
													</MenuItem>
												</MenuList>
											</Menu>
										</Flex>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				)}
			</TableContainer>

			<Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'sm'}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create new user</DrawerHeader>

					<DrawerBody>
						<Tabs>
							<TabList>
								<Tab>New user</Tab>
								<Tab>Exist user</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<CreateUserForm
										onComplete={onCompleteUserForm}
										updatingUserData={updatingUserData}
									/>
								</TabPanel>
								<TabPanel>
									<Box>
										<Box my={3}>
											<FormLabel mb={3}>
												Student{' '}
												<Box as={'span'} color={'red.300'}>
													*
												</Box>
											</FormLabel>

											<Select
												onChange={e => setSelectedUserId(e.target.value)}
												value={selectedUserId || ''}
											>
												{students
													.filter(
														x =>
															!x.courses?.find(
																c => c._id === router.query.courseId
															)
													)
													.map(item => (
														<option value={item._id}>{item.fullName}</option>
													))}
											</Select>
										</Box>
										<Button
											isDisabled={!selectedUserId}
											isLoading={isLoading}
											type='submit'
											colorScheme='facebook'
											h={14}
											mt={2}
											w={'full'}
											onClick={addExistUserToCourse}
										>
											Save
										</Button>
									</Box>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}

export default CourseStudentsPageComponent
