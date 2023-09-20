import { CategoryService } from '@/services/category.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAllCategories = createAsyncThunk(
	'category/fetch',
	async (_, thunkAPi) => {
		try {
			return CategoryService.getAll()
		} catch (error) {
			return thunkAPi.rejectWithValue(error)
		}
	}
)
