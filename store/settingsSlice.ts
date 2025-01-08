import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Settings } from '../types'

const initialState: Settings = {
  sync_mode: 'local',
  theme: 'light',
  language: 'en',
  shortcuts: {
    open: 'Ctrl+Shift+E',
  },
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<Partial<Settings>>) => {
      return { ...state, ...action.payload }
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    setLanguage: (state, action: PayloadAction<'en' | 'zh'>) => {
      state.language = action.payload
    },
    setSyncMode: (state, action: PayloadAction<'local' | 'cloud'>) => {
      state.sync_mode = action.payload
    },
    setShortcuts: (state, action: PayloadAction<{ open: string }>) => {
      state.shortcuts = action.payload
    },
  },
})

export const { updateSettings, setTheme, setLanguage, setSyncMode, setShortcuts } = settingsSlice.actions

export default settingsSlice.reducer
