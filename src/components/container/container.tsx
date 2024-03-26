import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { ContainerPropsType } from './container.props'

const Container: FC<ContainerPropsType> = ({ children, ...props }) => {
	return (
		<Box
			w={{
				base: '90%',
				md: '90%',
				lg: '80%',
			}}
			maxW={'1440px'}
			mx={'auto'}
			{...props}
		>
			{children}
		</Box>
	)
}

export default Container
