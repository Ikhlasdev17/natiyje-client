import { RoleUser } from '@/interfaces/user.interface'
import { StudentsService } from '@/services/students.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchStudents = createAsyncThunk(
	'students/fetch',
	async ({ roles }: { roles: RoleUser[] }, thunkAPI) => {
		try {
			const response = await StudentsService.getStudents(roles)

			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
