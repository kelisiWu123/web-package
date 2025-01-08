import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Website } from '../types'

export interface WebsitesState {
  items: Website[]
  loading: boolean
  error: string | null
}

const initialState: WebsitesState = {
  items: [],
  loading: false,
  error: null,
}

const websitesSlice = createSlice({
  name: 'websites',
  initialState,
  reducers: {
    addWebsite: (state, action: PayloadAction<Website>) => {
      state.items.push(action.payload)
    },
    removeWebsite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((website) => website.id !== action.payload)
    },
    updateWebsite: (state, action: PayloadAction<Website>) => {
      const index = state.items.findIndex((website) => website.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    setWebsites: (state, action: PayloadAction<Website[]>) => {
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

export const { addWebsite, removeWebsite, updateWebsite, setWebsites, setLoading, setError } = websitesSlice.actions

export default websitesSlice.reducer
