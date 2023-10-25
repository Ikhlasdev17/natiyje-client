import { UserType } from '@/interfaces/user.interface'

export interface StudentsInitialStateType {
	students: UserType[]
	isLoading: boolean
	error: string | unknown | null
}
