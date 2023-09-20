import { ReactNode } from 'react'

export interface SectionFieldPropsType {
	label: string
	placeholder?: string
	children?: ReactNode
	type?: string
	options: { label: string; value: string }[]
}
