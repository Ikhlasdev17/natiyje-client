import { CreateUserForm } from '@/components'
import UsersSkeletonTable from '@/components/users-skeleton-table/users-skeleton-table'
import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CreateUserType, RoleUser } from '@/interfaces/user.interface'
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
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { Select } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { BiSolidEdit } from 'react-icons/bi'
import { BsList, BsPlus, BsSend, BsTrash } from 'react-icons/bs'

const AdminUsersPageComponent = () => {
	const { students, isLoading } = useTypedSelector(state => state.student)
	const { fetchStudents, createUserAction } = useActions()
	const [role, setRole] = useState<[RoleUser]>(['USER'])
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [updatingUserData, setUpdatingUserData] =
		useState<CreateUserType | null>(null)
	const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
	const toast = useToast()

	useEffect(() => {
		fetchStudents({ roles: role })
	}, [role])

	const onCompleteUserForm = (userData: CreateUserType) => {
		if (!updatingUserData) {
			createUserAction({
				...userData,
				callback() {
					onClose()
					toast({
						title: 'User successfull created!',
						status: 'success',
						position: 'top',
					})
					fetchStudents({ roles: role })
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

	return (
		<Box>
			<Flex justifyContent={'space-between'} alignItems={'center'} my={6}>
				<HStack>
					<Select
						style={{
							minWidth: '120px',
						}}
						value={role}
						mode='multiple'
						onChange={(e: any) => setRole(e)}
					>
						<option value={'USER'}>User</option>
						<option value={'INSTRUCTOR'}>Instructor</option>
						<option value={'ADMIN'}>Admin</option>
						<option value={'CEO'}>CEO</option>
					</Select>
				</HStack>

				<Button
					onClick={() => {
						onOpen()
						setUpdatingUserData(null)
					}}
					rightIcon={<BsPlus />}
				>
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
							{students.map(item => (
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
														onClick={() => {
															onOpen()
															setUpdatingUserData(item as CreateUserType)
														}}
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
						<CreateUserForm
							onComplete={onCompleteUserForm}
							updatingUserData={updatingUserData}
						/>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}

export default AdminUsersPageComponent
