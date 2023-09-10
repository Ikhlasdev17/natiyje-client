export interface CourseType {
	isActive?: boolean
	_id?: string
	title?: string
	description?: string
	price?: number
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
	sections?: string[]
}

export interface Author {
	_id?: string
	fullName?: string
}
