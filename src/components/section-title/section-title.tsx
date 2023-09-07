import { Box, Flex, Heading } from '@chakra-ui/react'
import { SectionTitlePropsType } from './section-title.props'

const SectionTitle = ({ children, extraEl }: SectionTitlePropsType) => {
	return (
		<Flex
			w={'full'}
			align={'center'}
			justifyContent={'space-between'}
			my={'40px'}
			flexWrap={'wrap'}
			gap={'30px'}
		>
			<Heading color={'textColor'} fontWeight={'500'}>
				{children}
			</Heading>
			<Box>{extraEl}</Box>
		</Flex>
	)
}

export default SectionTitle
