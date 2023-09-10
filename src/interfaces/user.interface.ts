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
}

export type RoleUser = 'CEO' | 'INSTRUCTOR' | 'ADMIN' | 'USER'
