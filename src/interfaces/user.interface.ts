export interface UserType {
	phone?: string
	fullName?: string
	role?: RoleUser
	createdAt?: string
	password?: string
	courses?: any[]
	email?: string
	avatar?: string
	_id?: string
	coverImage?: string
	address?: string
	bio?: string
	birthday?: string
}

export interface LessonReviewType {
	_id?: string
	author?: Author
	lesson?: string
	text?: string
	rate?: number
	createdAt?: Date
	updatedAt?: Date
	__v?: number
}

export interface Author {
	_id?: string
	fullName?: string
	avatar?: string
}

export type RoleUser = 'CEO' | 'INSTRUCTOR' | 'ADMIN' | 'USER'
