import { categoryReducer } from './categories/categories.slice'
import { courseReducer } from './courses/course.slice'
import { fileReducer } from './file/file.slice'
import { settingsReducer } from './settings/settings.slice'
import { studentsReducer } from './students/students.slice'
import { userReducer } from './user/user.slice'

export const rootReducer = {
	user: userReducer,
	course: courseReducer,
	settings: settingsReducer,
	category: categoryReducer,
	file: fileReducer,
	student: studentsReducer,
}
