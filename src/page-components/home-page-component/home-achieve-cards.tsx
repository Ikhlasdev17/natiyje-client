import { Container } from '@/components'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

const HomeAchieveCards = () => {
	return (
		<Container>
			<Box my={'50px'}>
				<Heading
					fontSize={'40px'}
					textAlign={'center'}
					fontWeight={'500'}
					my={'40px'}
				>
					Nátiyje menen maqsetlerin'izge tezirek erisin'!
				</Heading>

				<Flex
					gap={'30px'}
					flexWrap={{
						base: 'wrap',
						md: 'wrap',
						lg: 'nowrap',
					}}
					justifyContent={'center'}
				>
					<Box
						_hover={{ shadow: 'lg' }}
						transition={'.3s ease'}
						flexBasis={'300px'}
						flexGrow={1}
						p={'20px'}
					>
						<Image width={84} height={74} src={'./achieve1.svg'} alt='' />
						<Heading
							fontSize={'24px'}
							fontWeight={'400'}
							color={'gray.600'}
							my={'30px'}
						>
							Learn the latest skills
						</Heading>
						<Text fontSize={'16px'} color={'gray.600'}>
							Start streaming on-demand video lectures today from top
							instructors in subjects…
						</Text>
					</Box>
					<Box
						_hover={{ shadow: 'lg' }}
						transition={'.3s ease'}
						flexBasis={'300px'}
						flexGrow={1}
						p={'20px'}
					>
						<Image width={84} height={74} src={'./achieve2.svg'} alt='' />
						<Heading
							fontSize={'24px'}
							fontWeight={'400'}
							color={'gray.600'}
							my={'30px'}
						>
							Learn the latest skills
						</Heading>
						<Text fontSize={'16px'} color={'gray.600'}>
							Start streaming on-demand video lectures today from top
							instructors in subjects…
						</Text>
					</Box>
					<Box
						_hover={{ shadow: 'lg' }}
						transition={'.3s ease'}
						flexBasis={'300px'}
						flexGrow={1}
						p={'20px'}
					>
						<Image width={84} height={74} src={'./achieve3.svg'} alt='' />
						<Heading
							fontSize={'24px'}
							fontWeight={'400'}
							color={'gray.600'}
							my={'30px'}
						>
							Learn the latest skills
						</Heading>
						<Text fontSize={'16px'} color={'gray.600'}>
							Start streaming on-demand video lectures today from top
							instructors in subjects…
						</Text>
					</Box>
				</Flex>
			</Box>
		</Container>
	)
}

export default HomeAchieveCards
