import { SectionType } from './section.interface'

export interface CourseType {
	isActive?: boolean
	_id?: string
	title?: string
	description?: any
	price?: number | null
	author?: Author
	excerpt?: string
	learn?: string[]
	requirements?: string[]
	tags?: string[]
	level?: string
	category?: string
	image?: string
	createdAt?: Date
	updatedAt?: Date
	__v?: number
	sections?: SectionType[]
	embedVideo: ''
	slug?: string
	teacher: any
}

export interface Author {
	_id?: string
	fullName?: string
	avatar?: string
}
