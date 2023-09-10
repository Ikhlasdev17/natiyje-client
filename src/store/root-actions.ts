import { courseSliceActions } from './courses/course.slice'
import { settingsActions } from './settings/settings.slice'
import * as userActions from './user/user.action'

export const rootActions = {
	...userActions,
	...courseSliceActions,
	...settingsActions,
}
