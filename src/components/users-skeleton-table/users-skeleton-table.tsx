import { Skeleton, SkeletonCircle, Table, Td, Tr } from '@chakra-ui/react'

const UsersSkeletonTable = () => {
	return (
		<Table>
			<Tr>
				<Td w={'50px'}>
					<SkeletonCircle w={'42px'} h={'42px'} />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
			</Tr>
			<Tr>
				<Td w={'50px'}>
					<SkeletonCircle w={'42px'} h={'42px'} />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
			</Tr>
			<Tr>
				<Td w={'50px'}>
					<SkeletonCircle w={'42px'} h={'42px'} />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
			</Tr>
			<Tr>
				<Td w={'50px'}>
					<SkeletonCircle w={'42px'} h={'42px'} />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
				<Td>
					<Skeleton height='20px' />
				</Td>
			</Tr>
		</Table>
	)
}

export default UsersSkeletonTable
