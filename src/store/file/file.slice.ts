import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FileFolderType } from './file.interface'

export const initialState: { folders: FileFolderType[] } = {
	folders: [],
}

export const fileSlice = createSlice({
	name: 'file',
	initialState,
	reducers: {
		getFolders: (state, action: PayloadAction<FileFolderType[]>) => {
			state.folders = action.payload
		},
	},
})

export const fileActions = fileSlice.actions
export const fileReducer = fileSlice.reducer
