import { Image } from '@chakra-ui/react'
const SectionOverlay = () => {
	return (
		<Image
			zIndex={-1}
			pos={'absolute'}
			src='/section-overlay.svg'
			h={'500px'}
			w={'full'}
			top={0}
			objectFit={'cover'}
		/>
	)
}

export default SectionOverlay
