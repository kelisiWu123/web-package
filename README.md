# React 网站导航 Chrome 扩展

一个为 React 开发者设计的网站导航 Chrome 扩展，帮助开发者更高效地管理和访问开发资源。

## 功能特点

- 🚀 快速访问常用的 React 开发资源
- 📁 自定义网站分类和收藏管理
- 🔍 强大的搜索功能
- 💾 支持导入/导出收藏数据
- 🌙 支持深色/浅色主题
- 🔄 跨设备数据同步
- ⌨️ 快捷键支持

## 技术栈

- React 18
- TypeScript
- Material UI
- Chrome Extension Manifest V3
- WXT (Web Extension Tools)

## 开发指南

### 环境要求

- Node.js >= 16
- npm 或 yarn

### 安装依赖

```bash
yarn install
```

### 开发模式

```bash
yarn dev
```

### 构建扩展

```bash
yarn build
```

### 打包扩展

```bash
yarn zip
```

## 项目结构

```
├── assets/           # 静态资源
├── components/       # React 组件
├── entrypoints/     # 扩展入口点
│   ├── background/  # Service Worker
│   ├── popup/       # 弹出窗口
│   └── content/     # 内容脚本
├── public/          # 公共资源
└── types/           # TypeScript 类型定义
```

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

MIT License
