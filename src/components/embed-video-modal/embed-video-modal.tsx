import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FC } from 'react'
import { EmbedVideoModalPropsType } from './embed-video-modal.props'

const EmbedVideoModal: FC<EmbedVideoModalPropsType> = ({
	isOpen,
	onClose,
	onOpen,
	embedVideo,
}) => {
	console.log(embedVideo)

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
					<iframe
						width='424'
						height='238'
						src={`https://www.youtube.com/embed/${
							typeof embedVideo === 'string'
								? embedVideo.split('https://youtu.be/')[0]
								: ''
						}`}
						title='Javascript toliq kurs |  14-sabaq. DOM. Elementlerdi select qiliw.'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
					{/* <Box
						w={'100%'}
						as='iframe'
						h={'400px'}
						src={`https://www.youtube.com/embed/${.split('')}`}
					></Box> */}
				</ModalContent>
			</Modal>
		</>
	)
}

export default EmbedVideoModal
