/// <reference types="chrome"/>
import { Website, Category, Settings } from '../types'

// 存储键名常量
const STORAGE_KEYS = {
  WEBSITES: 'websites',
  CATEGORIES: 'categories',
  SETTINGS: 'settings',
} as const

// 获取网站列表
export const getWebsites = async (): Promise<Website[]> => {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.WEBSITES)
    return result[STORAGE_KEYS.WEBSITES] || []
  } catch (error) {
    console.error('Failed to get websites:', error)
    return []
  }
}

// 保存网站列表
export const saveWebsites = async (websites: Website[]): Promise<void> => {
  try {
    await chrome.storage.sync.set({ [STORAGE_KEYS.WEBSITES]: websites })
  } catch (error) {
    console.error('Failed to save websites:', error)
    throw error
  }
}

// 获取分类列表
export const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.CATEGORIES)
    return result[STORAGE_KEYS.CATEGORIES] || []
  } catch (error) {
    console.error('Failed to get categories:', error)
    return []
  }
}

// 保存分类列表
export const saveCategories = async (categories: Category[]): Promise<void> => {
  try {
    await chrome.storage.sync.set({ [STORAGE_KEYS.CATEGORIES]: categories })
  } catch (error) {
    console.error('Failed to save categories:', error)
    throw error
  }
}

// 获取设置
export const getSettings = async (): Promise<Settings> => {
  try {
    const result = await chrome.storage.sync.get(STORAGE_KEYS.SETTINGS)
    return (
      result[STORAGE_KEYS.SETTINGS] || {
        sync_mode: 'local',
        theme: 'light',
        language: 'en',
        shortcuts: {
          open: 'Ctrl+Shift+E',
        },
      }
    )
  } catch (error) {
    console.error('Failed to get settings:', error)
    throw error
  }
}

// 保存设置
export const saveSettings = async (settings: Settings): Promise<void> => {
  try {
    await chrome.storage.sync.set({ [STORAGE_KEYS.SETTINGS]: settings })
  } catch (error) {
    console.error('Failed to save settings:', error)
    throw error
  }
}

// 导出数据
export const exportData = async (): Promise<string> => {
  try {
    const [websites, categories, settings] = await Promise.all([getWebsites(), getCategories(), getSettings()])

    const data = {
      websites,
      categories,
      settings,
    }

    return JSON.stringify(data, null, 2)
  } catch (error) {
    console.error('Failed to export data:', error)
    throw error
  }
}

// 导入数据
export const importData = async (jsonString: string): Promise<void> => {
  try {
    const data = JSON.parse(jsonString)
    await Promise.all([saveWebsites(data.websites || []), saveCategories(data.categories || []), saveSettings(data.settings || {})])
  } catch (error) {
    console.error('Failed to import data:', error)
    throw error
  }
}
