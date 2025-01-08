// 网站数据接口
export interface Website {
  id: string
  name: string
  url: string
  description: string
  category: string
  timestamp?: number
}

// 分类数据接口
export interface Category {
  id: string
  name: string
  description: string
}

// 设置数据接口
export interface Settings {
  sync_mode: 'local' | 'cloud'
  theme: 'light' | 'dark'
  language: 'en' | 'zh'
  shortcuts: {
    open: string
  }
}

// 搜索参数接口
export interface SearchParams {
  keyword: string
  category?: string
}

// 状态接口
export interface RootState {
  websites: Website[]
  categories: Category[]
  settings: Settings
  search: SearchParams
  loading: boolean
  error: string | null
}
