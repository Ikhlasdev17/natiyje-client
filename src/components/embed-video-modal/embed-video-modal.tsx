import { Box, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FC } from 'react'
import { EmbedVideoModalPropsType } from './embed-video-modal.props'

const EmbedVideoModal: FC<EmbedVideoModalPropsType> = ({
	isOpen,
	onClose,
	onOpen,
	embedVideo,
}) => {
	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen} isCentered size={'4xl'}>
				<ModalOverlay />
				<ModalContent
					m={{
						base: 4,
						lg: 0,
					}}
					p={0}
				>
					<Box
						height={{
							base: '40vh',
							lg: '60vh',
						}}
						w={'100%'}
					>
						{' '}
						{embedVideo}
					</Box>
				</ModalContent>
			</Modal>
		</>
	)
}

export default EmbedVideoModal
