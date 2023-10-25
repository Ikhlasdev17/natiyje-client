import { StudentsService } from '@/services/students.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchStudents = createAsyncThunk(
	'students/fetch',
	async (_, thunkAPI) => {
		try {
			const response = await StudentsService.getStudents()

			return response
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
