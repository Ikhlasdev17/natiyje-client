import { Button, Flex, Input, InputGroup, Stack, Text } from '@chakra-ui/react'

const PaymentCard = () => {
	return (
		<Stack p={4} bg={'white'} shadow={'sm'} rounded={'md'}>
			<Flex
				justify={'space-between'}
				alignItems={'center'}
				pb={2}
				mt={1}
				borderBottom={'1px'}
				borderBottomColor={'gray.100'}
			>
				<Text color={'gray.500'}>Kurs baxasi:</Text>
				<Text color={'gray.800'}>500 000 SUM</Text>
			</Flex>
			<Flex
				justify={'space-between'}
				alignItems={'center'}
				pb={2}
				mt={1}
				borderBottom={'1px'}
				borderBottomColor={'gray.100'}
			>
				<Text color={'gray.500'}>Shegirme:</Text>
				<Text color={'gray.800'}>150 000 SUM</Text>
			</Flex>
			<Flex
				justify={'space-between'}
				alignItems={'center'}
				pb={2}
				mt={1}
				borderBottom={'1px'}
				borderBottomColor={'gray.100'}
			>
				<Text color={'gray.500'}>Promokod:</Text>
				<Text color={'gray.800'}>50 000 SUM</Text>
			</Flex>
			<Flex justify={'space-between'} alignItems={'center'} pb={2} my={1}>
				<Text fontSize={'20px'} color={'brand.500'}>
					Ja'mi:
				</Text>
				<Text fontSize={'20px'} color={'brand.500'}>
					350 000 SUM
				</Text>
			</Flex>
			<InputGroup gap={2}>
				<Input placeholder='' />
				<Button colorScheme='brand' px={6}>
					Kupon
				</Button>
			</InputGroup>
		</Stack>
	)
}

export default PaymentCard
