export interface SectionType {
	_id?: string
	title?: string
	lessons?: LessonType[]
	createdAt?: Date
	updatedAt?: Date
	__v?: number
}

export interface LessonType {
	_id?: string
	name?: string
	material?: string
	embedVideo?: string
	hour?: number
	minute?: number
	second?: number
	completed?: any[]
	createdAt?: Date
	updatedAt?: Date
	__v?: number
	isOpen?: boolean
}
