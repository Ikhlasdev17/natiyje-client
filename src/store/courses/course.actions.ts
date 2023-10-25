import { CourseType } from '@/interfaces/course.interface'
import { LessonType } from '@/interfaces/section.interface'
import { CourseService } from '@/services/course.service'
import { LessonService } from '@/services/lesson.service'
import { SectionService } from '@/services/section.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CourseCreateBodyProps } from './course.interface'

export const createCourse = createAsyncThunk<'', CourseCreateBodyProps>(
	'course/create',
	async (data, thunkAPI) => {
		try {
			const response = await CourseService.createCourse(data.data)
			if (response) {
				data.callback()
				return response
			}
		} catch (error) {
			data.errorCallback()
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const deleteCourse = createAsyncThunk(
	'course/delete',
	async ({ id, callback }: { id: string; callback: () => void }, thunkAPI) => {
		try {
			await CourseService.deleteCourse(id)
			callback()
			return 'success'
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const activateCourse = createAsyncThunk(
	'course/activate',
	async ({ id, callback }: { id: string; callback: () => void }, thunkAPI) => {
		try {
			callback()
			return CourseService.activateCourse(id)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const draftCourse = createAsyncThunk(
	'course/activate',
	async ({ id, callback }: { id: string; callback: () => void }, thunkAPI) => {
		try {
			callback()
			return CourseService.draftCourse(id)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const getSingleCourse = createAsyncThunk(
	'course/getSingle',
	async ({ id }: { id: string }, thunkAPI) => {
		try {
			return CourseService.getSingleCourse(id)
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const getCourseSections = createAsyncThunk(
	'course/sections',
	async ({ id }: { id: string }, thunkAPI) => {
		try {
			const sections = await SectionService.getCourseSections(id)
			return sections
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const createSection = createAsyncThunk(
	'section/create',
	async (
		{
			title,
			sectionId,
			callback,
		}: { title: string; sectionId: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = await SectionService.createSection(sectionId, title)
			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const updateSectionPosition = createAsyncThunk(
	'section/change-position',
	async (
		{
			sections,
			courseId,
			callback,
		}: { sections: string[]; courseId: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const response = await SectionService.updateSectionPosition(
				courseId,
				sections
			)
			callback()
			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const changeLessonPosition = createAsyncThunk(
	'lesson/change-position',
	async (
		{
			sectionId,
			lessons,
			callback,
		}: { sectionId: string; lessons: string[]; callback: () => void },
		thunkAPI
	) => {
		try {
			const section = await LessonService.changeLessonPosition(
				sectionId,
				lessons
			)
			callback()
			return section
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const deleteSection = createAsyncThunk(
	'section/delete',
	async (
		{
			sectionId,
			courseId,
			callback,
		}: { sectionId: string; courseId: string; callback: () => void },
		thunkAPI
	) => {
		try {
			const res = await SectionService.deleteSection(courseId, sectionId)
			callback()
			return res
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const createLesson = createAsyncThunk(
	'lesson/create',
	async (
		{
			sectionId,
			lesson,
			callback,
		}: { sectionId: string; lesson: LessonType; callback: () => void },
		thunkAPI
	) => {
		try {
			const section = await LessonService.createLesson(sectionId, lesson)
			callback()
			return section
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const updateCourse = createAsyncThunk(
	'course/update',
	async (
		{ course, callback }: { course: CourseType; callback: () => void },
		thunkAPI
	) => {
		try {
			const section = await CourseService.updateCourse(course)
			callback()
			return section
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const openLesson = createAsyncThunk<
	'Success',
	{ id: string; callback: () => void }
>('lesson/open', async ({ id, callback }, thunkAPI) => {
	try {
		const response = await LessonService.openLesson(id)
		if (response.status === 200) {
			callback()
		}
		return response.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

export const closeLesson = createAsyncThunk<
	'Success',
	{ id: string; callback: () => void }
>('lesson/close', async ({ id, callback }, thunkAPI) => {
	try {
		const response = await LessonService.closeLesson(id)
		if (response.status === 200) {
			callback()
		}
		return response.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})
