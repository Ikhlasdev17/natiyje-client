import { CourseType } from '@/interfaces/course.interface'
import { LessonType } from '@/interfaces/section.interface'
import { LessonReviewType, UserType } from '@/interfaces/user.interface'

export interface UserInitialStateType {
	user: UserType | null
	isLoading: boolean
	error: string | null | unknown
	currentCourse: CourseType | null
	lesson: LessonType | null
	lessonReviews: LessonReviewType[]
}

export interface AuthTokens {
	refreshToken: string
	accessToken: string
}

export interface AuthUserResponse extends AuthTokens {
	user: UserType
}

export interface InterfaceEmailAndPassword {
	phone: string
	password: string
	fullName: string
}

export interface InterfacePhoneAndPassword {
	phone: string
	password: string
	callback?: () => void
	callbackError?: () => void
}
