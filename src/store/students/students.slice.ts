import { UserType } from '@/interfaces/user.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchStudents } from './students.actions'
import { StudentsInitialStateType } from './students.interface'

export const initialState: StudentsInitialStateType = {
	students: [],
	isLoading: false,
	error: null,
}

export const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchStudents.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchStudents.fulfilled,
				(state, action: PayloadAction<UserType[]>) => {
					state.isLoading = false
					state.students = action.payload
				}
			)
			.addCase(fetchStudents.rejected, state => {
				state.isLoading = false
			})
	},
})

export const studentsReducer = studentsSlice.reducer
