import { loadImage } from '@/helpers/load-image'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import {
	Box,
	Button,
	Flex,
	Image,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import moment from 'moment'
import { useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'

const AdminStudentsPageComponent = () => {
	const { students } = useTypedSelector(state => state.student)
	const { fetchStudents } = useActions()
	console.log(students)

	useEffect(() => {
		fetchStudents()
	}, [])

	return (
		<Box>
			<Flex justifyContent={'end'} my={6}>
				<Button rightIcon={<BsPlus />}>Add student</Button>
			</Flex>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>Full name</Th>
							<Th>Registered at</Th>
							<Th>Courses</Th>
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
								<Td>{moment(item.createdAt).format('YYYY-MM-DD HH:MM:SS')}</Td>
								<Td>
									<Button
										colorScheme='facebook'
										isDisabled={item.courses?.length === 0}
									>
										Courses ({item.courses?.length})
									</Button>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default AdminStudentsPageComponent
