import { LessonType } from '@/interfaces/section.interface'

export interface LessonAccordionItemProps {
	lesson: LessonType
	lessonIndex: number
	lessons: LessonType[]
	sectionId: string
}
