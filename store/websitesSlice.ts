import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Website } from '../types'

const initialWebsites: Website[] = [
  // 阿里系
  {
    id: '1',
    name: 'Ant-Design',
    url: 'https://ant-design.antgroup.com/components/overview-cn',
    description: 'Ant Design - 一套企业级 UI 设计语言和 React 组件库',
    category: 'aliyun',
  },
  {
    id: '2',
    name: 'Ant-Mobile',
    url: 'https://ant-design-mobile.antgroup.com/zh/guide/quick-start',
    description: 'Ant Design Mobile - 移动端设计规范和组件库',
    category: 'aliyun',
  },
  {
    id: '3',
    name: 'Ant-ProComponents',
    url: 'https://pro-components.antdigital.dev/components',
    description: '基于 Ant Design 的高级组件库',
    category: 'aliyun',
  },
  {
    id: '4',
    name: 'Umi',
    url: 'https://umijs.org/docs/guides/getting-started',
    description: '可插拔的企业级 React 应用框架',
    category: 'aliyun',
  },
  {
    id: '5',
    name: 'Dumi',
    url: 'https://d.umijs.org/',
    description: '为组件开发场景而生的文档工具',
    category: 'aliyun',
  },
  {
    id: '6',
    name: '通义',
    url: 'https://tongyi.aliyun.com/',
    description: '阿里云智能对话模型',
    category: 'aliyun',
  },

  // React and Utils
  {
    id: '7',
    name: 'React',
    url: 'https://react.docschina.org/',
    description: 'React 官方中文文档',
    category: 'react-utils',
  },
  {
    id: '8',
    name: 'Lodash',
    url: 'https://www.lodashjs.com/',
    description: '一致性、模块化、高性能的 JavaScript 实用工具库',
    category: 'react-utils',
  },
  {
    id: '9',
    name: 'AHooks',
    url: 'https://ahooks.js.org/zh-CN/',
    description: '一套高质量可靠的 React Hooks 库',
    category: 'react-utils',
  },
  {
    id: '10',
    name: 'React-Use',
    url: 'https://github.com/zenghongtu/react-use-chinese/blob/master/README.md',
    description: 'React Hooks 工具库中文文档',
    category: 'react-utils',
  },
  {
    id: '11',
    name: 'JS框架语法特性对比',
    url: 'https://component-party.lainbo.com/',
    description: '主流前端框架特性对比',
    category: 'react-utils',
  },
  {
    id: '12',
    name: 'ES6 -书栈网',
    url: 'https://www.bookstack.cn/read/es6-3rd/README.md',
    description: 'ES6 标准入门教程',
    category: 'react-utils',
  },
  {
    id: '13',
    name: 'Github -代码检索工具',
    url: 'https://sourcegraph.com/search',
    description: '强大的代码搜索工具',
    category: 'react-utils',
  },

  // TypeScript
  {
    id: '14',
    name: 'TS中文网',
    url: 'https://ts.nodejs.cn/docs/handbook/utility-types.html',
    description: 'TypeScript 中文参考文档',
    category: 'typescript',
  },
  {
    id: '15',
    name: 'Type-Hero',
    url: 'https://typehero.dev/aot-2023',
    description: 'TypeScript 练习平台',
    category: 'typescript',
  },
  {
    id: '16',
    name: 'Type-Challenge',
    url: 'https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md',
    description: 'TypeScript 类型体操挑战',
    category: 'typescript',
  },

  // React 好文
  {
    id: '17',
    name: '类组件和函数组件有什么不同?',
    url: 'https://overreacted.io/how-are-function-components-different-from-classes/',
    description: 'Dan Abramov 解析组件差异',
    category: 'react-articles',
  },
  {
    id: '18',
    name: '为什么钩子?',
    url: 'https://geekdaxue.co/read/garronge@tyarry/rz5yor',
    description: 'React Hooks 设计理念',
    category: 'react-articles',
  },
  {
    id: '19',
    name: 'React-技术揭秘-卡颂',
    url: 'https://react.iamkasong.com/',
    description: 'React 源码解析',
    category: 'react-articles',
  },

  // 前端代码规范
  {
    id: '20',
    name: '状态管理规范',
    url: 'https://jdf2e.github.io/jdc_fe_guide/docs/react/state/',
    description: 'React 状态管理最佳实践',
    category: 'frontend-spec',
  },
  {
    id: '21',
    name: 'HTML标准',
    url: 'https://html.spec.whatwg.org/multipage/',
    description: 'HTML 官方规范文档',
    category: 'frontend-spec',
  },
  {
    id: '22',
    name: 'PromiseA+',
    url: 'https://promisesaplus.com/',
    description: 'Promise/A+ 规范',
    category: 'frontend-spec',
  },

  // AI 工具
  {
    id: '23',
    name: 'Poe',
    url: 'https://poe.com/',
    description: 'AI 对话平台',
    category: 'ai-tools',
  },
  {
    id: '24',
    name: '通义千问',
    url: 'https://tongyi.aliyun.com/qianwen/',
    description: '阿里云 AI 对话模型',
    category: 'ai-tools',
  },
  {
    id: '25',
    name: '文心一言',
    url: 'https://yiyan.baidu.com/',
    description: '百度 AI 对话模型',
    category: 'ai-tools',
  },

  // 文档导航
  {
    id: '26',
    name: '印记中文',
    url: 'https://www.docschina.org/',
    description: '前端开发文档中文集合',
    category: 'documentation',
  },

  // 开源趋势
  {
    id: '27',
    name: 'Github Trending',
    url: 'https://github.com/trending',
    description: 'GitHub 热门项目榜单',
    category: 'trending',
  },
  {
    id: '28',
    name: 'js生态调查报告',
    url: 'https://2022.stateofjs.com/en-US/',
    description: 'JavaScript 生态系统调查',
    category: 'trending',
  },

  // 调试工具
  {
    id: '29',
    name: 'vConsole',
    url: 'https://github.com/Tencent/vConsole',
    description: '移动端调试工具',
    category: 'debug-tools',
  },
]

const websitesSlice = createSlice({
  name: 'websites',
  initialState: {
    items: initialWebsites,
  },
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
  },
})

export const { addWebsite, removeWebsite, updateWebsite } = websitesSlice.actions
export default websitesSlice.reducer
