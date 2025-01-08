import { defineBackground } from 'wxt/sandbox'

export default defineBackground(() => {
  // 监听安装事件
  chrome.runtime.onInstalled.addListener(() => {
    // 初始化存储
    chrome.storage.sync.get(['websites', 'categories', 'settings'], (result) => {
      if (!result.websites) {
        chrome.storage.sync.set({
          websites: [],
        })
      }
      if (!result.categories) {
        chrome.storage.sync.set({
          categories: [],
        })
      }
      if (!result.settings) {
        chrome.storage.sync.set({
          settings: {
            sync_mode: 'local',
            theme: 'light',
            language: 'en',
            shortcuts: {
              open: 'Ctrl+Shift+E',
            },
          },
        })
      }
    })
  })
})
