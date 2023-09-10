import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		sidebarIsOpen: false,
	},
	reducers: {
		toggleSidebar: state => {
			state.sidebarIsOpen = !state.sidebarIsOpen
		},
		openSidebar: state => {
			state.sidebarIsOpen = true
		},
		closeSidebar: state => {
			state.sidebarIsOpen = false
		},
	},
})

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions
