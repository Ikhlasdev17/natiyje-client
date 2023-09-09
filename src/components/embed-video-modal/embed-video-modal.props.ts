import { ReactNode } from 'react'

export interface EmbedVideoModalPropsType {
	embedVideo: ReactNode
	onClose: () => void
	onOpen: () => void
	isOpen: boolean
}
