import { configureStore } from '@reduxjs/toolkit'
import type { WebsitesState } from './websitesSlice'
import type { CategoriesState } from './categoriesSlice'
import type { Settings } from '../types'
import type { SearchParams } from '../types'

import websitesReducer from './websitesSlice'
import categoriesReducer from './categoriesSlice'
import settingsReducer from './settingsSlice'
import searchReducer from './searchSlice'

export interface RootState {
  websites: WebsitesState
  categories: CategoriesState
  settings: Settings
  search: SearchParams
}

export const store = configureStore({
  reducer: {
    websites: websitesReducer,
    categories: categoriesReducer,
    settings: settingsReducer,
    search: searchReducer,
  },
})

export type AppDispatch = typeof store.dispatch
