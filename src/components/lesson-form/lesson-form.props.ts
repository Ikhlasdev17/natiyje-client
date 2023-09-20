import { LessonType } from '@/interfaces/section.interface'

export interface LessonFormPropsType {
	data?: LessonType
	onComplete: (lesson: LessonType) => void
}
