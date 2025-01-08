import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types'

export interface CategoriesState {
  items: Category[]
}

const initialState: CategoriesState = {
  items: [
    {
      id: 'aliyun',
      name: '阿里系',
      description: '阿里巴巴技术生态相关资源',
    },
    {
      id: 'react-utils',
      name: 'React and Utils',
      description: 'React 相关工具和资源',
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'TypeScript 相关资源',
    },
    {
      id: 'react-articles',
      name: 'React 好文',
      description: 'React 技术文章和教程',
    },
    {
      id: 'frontend-spec',
      name: '前端代码规范',
      description: '前端开发规范和标准',
    },
    {
      id: 'ai-tools',
      name: 'AI 工具',
      description: 'AI 相关工具和平台',
    },
    {
      id: 'documentation',
      name: '知名文档导航',
      description: '常用开发文档导航',
    },
    {
      id: 'trending',
      name: '开源项目趋势',
      description: '开源项目和技术趋势',
    },
    {
      id: 'debug-tools',
      name: '调试工具',
      description: '前端调试相关工具',
    },
  ],
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
    reorderCategories: (state, action: PayloadAction<Category[]>) => {
      state.items = action.payload
    },
  },
})

export const { addCategory, removeCategory, updateCategory, reorderCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
