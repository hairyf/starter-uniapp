# Starter UniApp

基于 UniApp + Vue 3 + Vite 的现代化跨平台开发模板

[English](./readme.md) | **简体中文**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)

> **注意**: 此模板专为 UniApp 跨平台移动开发而设计。它提供了现代化的开发体验，支持 Vue 3、TypeScript 和 Vite，兼容多个平台包括微信小程序、H5、App 等。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core)、[Vite](https://github.com/vitejs/vite)、[pnpm](https://pnpm.io/)、[esbuild](https://github.com/evanw/esbuild) - 天生快速
- 📱 **跨平台** - 支持微信小程序、H5、App 等多个平台
- 🗂 [基于文件的路由](./src/pages) - 从文件结构自动生成路由
- 📦 [组件自动导入](./src/components) - 自动导入组件
- 🍍 [状态管理](https://pinia.vuejs.org/) - Pinia 持久化状态管理
- 📑 [布局系统](./src/layouts) - 灵活的布局管理
- 🎨 [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架，支持微信小程序
- 🎯 [uView Pro](https://uviewpro.cn/) - 专业的 UI 组件库
- 📥 [API 自动导入](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等
- 🔧 [API 自动生成](https://github.com/hairyf/genapi) - 从 OpenAPI/Swagger 生成 API 类型
- 🦾 **TypeScript** - 完整的 TypeScript 支持
- 📱 **多平台** - 支持微信、支付宝、百度、字节跳动、QQ 等
- ⚙️ **ESLint** - 使用 @antfu/eslint-config 进行代码检查
- 🎨 **SCSS 支持** - 预处理器，集成 uView Pro

## 预装工具

### UI 框架

- [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架，支持微信小程序
- [uView Pro](https://uviewpro.cn/) - 专为 UniApp 设计的专业 UI 组件库

### 状态管理

- [Pinia](https://pinia.vuejs.org/) - 直观、类型安全、轻量且灵活的 Vue 状态管理
- [pinia-plugin-unistorage](https://github.com/dishait/pinia-plugin-unistorage) - UniApp 持久化支持

### 插件

- `@dcloudio/vite-plugin-uni` - UniApp 的 Vite 插件
- `@uni-helper/vite-plugin-uni-pages` - 基于文件的路由
- `@uni-helper/vite-plugin-uni-layouts` - 布局系统
- `@uni-helper/vite-plugin-uni-components` - 组件自动导入
- `@uni-helper/vite-plugin-uni-manifest` - 清单管理
- `unplugin-auto-import` - 直接使用 Vue Composition API，无需导入
- `weapp-tailwindcss` - 微信小程序 TailwindCSS 支持
- `@genapi/core` - 从 OpenAPI/Swagger 规范生成 API 类型
- `@vueuse/core` - 实用的组合式 API 集合

### 开发工具

- **TypeScript** - 类型安全和更好的开发体验
- **ESLint** - 使用 @antfu/eslint-config 进行代码检查
- **pnpm** - 快速、节省磁盘空间的包管理器
- **vite** - 下一代前端工具

### 代码风格

- 使用 `<script setup lang="ts">` SFC 语法的 Composition API
- ESLint 配置 @antfu/eslint-config，单引号，无分号
- TypeScript 类型安全

## 立即开始

> Starter UniApp 需要 Node >=22

### GitHub 模板

在 GitHub 上从此模板创建仓库。

### 克隆到本地

如果您更喜欢手动操作以获得更清洁的 git 历史

```bash
npx degit your-username/starter-uniapp my-uniapp-app
cd my-uniapp-app
pnpm i # 如果您没有安装 pnpm，请运行: npm install -g pnpm
```

## 检查清单

使用此模板时，请按照检查清单正确更新您的信息

- [ ] 在 `LICENSE` 中更改作者名称
- [ ] 在 `App.vue` 中更改标题
- [ ] 在 `manifest.config.ts` 中更改应用名称
- [ ] 更新 `src/apis/index.ts` 中的 API 基础 URL
- [ ] 清理 README 并删除路由

然后，享受开发 :)

## 使用方法

### 开发

启动开发服务器：

```bash
pnpm dev
```

这将启动默认平台（微信小程序）的开发服务器。您可以指定不同的平台：

```bash
# 微信小程序
pnpm dev

# H5
pnpm dev h5

# App
pnpm dev app
```

### 构建

为生产环境构建应用：

```bash
pnpm build
```

为特定平台构建：

```bash
# 微信小程序
pnpm build

# H5
pnpm build h5

# App
pnpm build app
```

### 类型检查

运行 TypeScript 类型检查：

```bash
pnpm type-check
```

### 代码检查

运行 ESLint：

```bash
pnpm lint
```

### API 生成

从 OpenAPI/Swagger 规范生成 API 类型：

```bash
pnpm genapi
```

## 项目结构

```
src/
├── apis/                 # API 定义和类型
├── composables/          # Vue 组合式函数
├── config/              # 配置文件
├── layouts/             # 布局组件
├── pages/               # 页面（自动生成路由）
├── static/              # 静态资源
├── store/               # Pinia 状态管理
├── types/               # TypeScript 类型定义
├── App.vue              # 根组件
├── main.ts              # 入口文件
├── manifest.json        # UniApp 清单
├── pages.json           # 页面配置
└── uni.scss             # 全局样式
```

## 支持平台

- **微信小程序** - WeChat Mini Program
- **支付宝小程序** - Alipay Mini Program
- **百度小程序** - Baidu Mini Program
- **字节跳动小程序** - ByteDance Mini Program
- **QQ 小程序** - QQ Mini Program
- **H5** - Web 端
- **App** - 移动端应用
- **HarmonyOS** - 鸿蒙应用

## 为什么选择这个模板

此模板为 UniApp 项目提供现代化开发体验：

- **快速开发** - Vite + Vue 3 + TypeScript
- **类型安全** - 完整的 TypeScript 支持和自动生成类型
- **现代工具** - ESLint、自动导入等
- **跨平台** - 开箱即用的多平台支持
- **专业 UI** - uView Pro 组件库
- **实用优先 CSS** - 支持微信小程序的 TailwindCSS
- **API 生成** - 从 OpenAPI 规范自动生成 API 类型

## 许可证

[MIT](./LICENSE) 许可证 © 2024

## 致谢

- [Vitesse](https://github.com/antfu-collective/vitesse) - 模板结构灵感来源
- [UniApp](https://uniapp.dcloud.io/) - 跨平台开发框架
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端工具
