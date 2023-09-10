import { courseReducer } from './courses/course.slice'
import { settingsReducer } from './settings/settings.slice'
import { userReducer } from './user/user.slice'

export const rootReducer = {
	user: userReducer,
	course: courseReducer,
	settings: settingsReducer,
}
