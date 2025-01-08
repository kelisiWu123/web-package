import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchParams } from '../types'

const initialState: SearchParams = {
  keyword: '',
  category: undefined,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload
    },
    setCategory: (state, action: PayloadAction<string | undefined>) => {
      state.category = action.payload
    },
    clearSearch: (state) => {
      state.keyword = ''
      state.category = undefined
    },
  },
})

export const { setKeyword, setCategory, clearSearch } = searchSlice.actions

export default searchSlice.reducer
