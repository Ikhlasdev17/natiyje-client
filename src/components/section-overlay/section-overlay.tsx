import { loadImage } from '@/helpers/load-image'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props extends ImageProps {
	coverImage?: string | null
}

const SectionOverlay = ({ coverImage, ...props }: Props) => {
	return (
		<Image
			zIndex={-1}
			pos={'absolute'}
			src={loadImage(coverImage || null) || '/section-overlay.svg'}
			h={'280px'}
			w={'full'}
			objectFit={'cover'}
			{...props}
		/>
	)
}

export default SectionOverlay
