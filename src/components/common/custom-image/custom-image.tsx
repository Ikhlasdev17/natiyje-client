import { Image as ChakraImage, ImageProps } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

interface CustomImageProps extends ImageProps {
	preview?: string
	image?: string
	alt?: string
	imageStyleClass?: string
	divStyleClass?: string
	bgColor?: string
}

/**
 * Image component
 * @description This component is responsible for rendering the Image
 * @param {ImageProps}
 * @returns {JSX.Element}
 */

const CustomImage: FC<CustomImageProps> = ({
	preview,
	image,
	alt,
	imageStyleClass,
	divStyleClass,
	bgColor = 'transparent',
	...props
}: CustomImageProps): JSX.Element => {
	const [currentImage, setCurrentImage] = useState(preview)
	const [loading, setLoading] = useState(true)

	const fetchImage = (src: string) => {
		const loadingImage = new Image()
		loadingImage.src = src
		loadingImage.onload = () => {
			setCurrentImage(loadingImage.src)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		fetchImage(image!)
	}, [image])

	return (
		<ChakraImage
			style={{
				filter: `${loading ? 'blur(15px)' : ''}`,
				transition: '.5s filter linear',
				width: '100%',
				background: bgColor,
			}}
			src={String(currentImage)}
			alt={alt}
			className={imageStyleClass}
			{...props}
		/>
	)
}

export default CustomImage
