import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types'

export interface CategoriesState {
  items: Category[]
  loading: boolean
  error: string | null
}

const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.items.push(action.payload)
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((category) => category.id !== action.payload)
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.items.findIndex((category) => category.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.items = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { addCategory, removeCategory, updateCategory, setCategories, setLoading, setError } = categoriesSlice.actions

export default categoriesSlice.reducer
