import { Container } from '@/components'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const NotFoundPageComponent = () => {
	const router = useRouter()
	return (
		<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<Heading
				pos={'absolute'}
				opacity={0.1}
				fontSize={'400px'}
				userSelect={'none'}
			>
				404
			</Heading>
			<Container>
				<Flex gap={4} flexDir={'column'} justifyContent={'center'} my={'100px'}>
					<Heading textAlign={'center'}>Bet tabilmadi</Heading>
					<Text textAlign='center'>
						Siz kiritken manzil tabilmadi, iltimas bas betke otin ham dawam etin
						:)
					</Text>
					<Flex justify={'center'}>
						<Button
							onClick={() => router.push('/')}
							px={'30px'}
							colorScheme='brand'
						>
							Bas bet
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default NotFoundPageComponent
