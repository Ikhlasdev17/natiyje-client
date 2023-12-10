import * as categoryActions from './categories/categories.actions'
import * as courseActions from './courses/course.actions'
import { courseSliceActions } from './courses/course.slice'
import { fileActions } from './file/file.slice'
import { settingsActions } from './settings/settings.slice'
import * as userActions from './user/user.action'
import { userSliceActions } from './user/user.slice'
import * as studentActions from './users/users.actions'
export const rootActions = {
	...userActions,
	...courseSliceActions,
	...settingsActions,
	...categoryActions,
	...courseActions,
	...fileActions,
	...userSliceActions,
	...studentActions,
}
