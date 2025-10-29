# Starter UniApp

Opinionated UniApp + Vue 3 + Vite Starter Template

**English** | [简体中文](./README_CN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)

> **Note**: This template is designed for cross-platform mobile development with UniApp. It provides a modern development experience with Vue 3, TypeScript, and Vite, supporting multiple platforms including WeChat Mini Program, H5, App, and more.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness
- 📱 **Cross-platform** - Support WeChat Mini Program, H5, App, and more platforms
- 🗂 [File-based routing](./src/pages) - Auto-generated routes from file structure
- 📦 [Components auto importing](./src/components) - Import components automatically
- 🍍 [State Management](https://pinia.vuejs.org/) - Pinia with persistence support
- 📑 [Layout system](./src/layouts) - Flexible layout management
- 🎨 [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework with WeChat Mini Program support
- 🎯 [uView Pro](https://uviewpro.cn/) - Professional UI component library
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - Use Composition API and others directly
- 🔧 [Auto API generation](https://github.com/hairyf/genapi) - Generate API types from OpenAPI/Swagger
- 🦾 **TypeScript** - Full TypeScript support
- 📱 **Multi-platform** - Support WeChat, Alipay, Baidu, ByteDance, QQ, and more
- ⚙️ **ESLint** - Code linting with @antfu/eslint-config
- 🎨 **SCSS Support** - Preprocessor with uView Pro integration

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework with WeChat Mini Program support
- [uView Pro](https://uviewpro.cn/) - Professional UI component library for UniApp

### State Management

- [Pinia](https://pinia.vuejs.org/) - Intuitive, type-safe, light and flexible Store for Vue
- [pinia-plugin-unistorage](https://github.com/dishait/pinia-plugin-unistorage) - Persistence support for UniApp

### Plugins

- `@dcloudio/vite-plugin-uni` - Vite plugin for UniApp
- `@uni-helper/vite-plugin-uni-pages` - File-based routing
- `@uni-helper/vite-plugin-uni-layouts` - Layout system
- `@uni-helper/vite-plugin-uni-components` - Auto component importing
- `@uni-helper/vite-plugin-uni-manifest` - Manifest management
- `unplugin-auto-import` - Directly use Vue Composition API without importing
- `weapp-tailwindcss` - TailwindCSS for WeChat Mini Program
- `@genapi/core` - Generate API types from OpenAPI/Swagger specs
- `@vueuse/core` - Collection of useful composition APIs

### Development Tools

- **TypeScript** - Type safety and better development experience
- **ESLint** - Code linting with @antfu/eslint-config
- **pnpm** - Fast, disk space efficient package manager
- **vite** - Next generation frontend tooling

### Coding Style

- Use Composition API with `<script setup lang="ts">` SFC syntax
- ESLint with @antfu/eslint-config, single quotes, no semi
- TypeScript for type safety

## Try it now!

> Starter UniApp requires Node >=22

### GitHub Template

Create a repo from this template on GitHub.

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit your-username/starter-uniapp my-uniapp-app
cd my-uniapp-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the app name in `manifest.config.ts`
- [ ] Update the API base URL in `src/apis/index.ts`
- [ ] Clean up the README and remove routes

And, enjoy :)

## Usage

### Development

Start the development server:

```bash
pnpm dev
```

This will start the development server for the default platform (WeChat Mini Program). You can specify different platforms:

```bash
# WeChat Mini Program
pnpm dev

# H5
pnpm dev h5

# App
pnpm dev app
```

### Build

To build the app for production:

```bash
pnpm build
```

Build for specific platforms:

```bash
# WeChat Mini Program
pnpm build

# H5
pnpm build h5

# App
pnpm build app
```

### Type Check

Run TypeScript type checking:

```bash
pnpm type-check
```

### Lint

Run ESLint:

```bash
pnpm lint
```

### API Generation

Generate API types from OpenAPI/Swagger specs:

```bash
pnpm genapi
```

## Project Structure

```
src/
├── apis/                 # API definitions and types
├── composables/          # Vue composables
├── config/              # Configuration files
├── layouts/             # Layout components
├── pages/               # Pages (auto-generated routes)
├── static/              # Static assets
├── store/               # Pinia stores
├── types/               # TypeScript type definitions
├── App.vue              # Root component
├── main.ts              # Entry point
├── manifest.json        # UniApp manifest
├── pages.json           # Pages configuration
└── uni.scss             # Global styles
```

## Supported Platforms

- **WeChat Mini Program** - 微信小程序
- **Alipay Mini Program** - 支付宝小程序
- **Baidu Mini Program** - 百度小程序
- **ByteDance Mini Program** - 字节跳动小程序
- **QQ Mini Program** - QQ小程序
- **H5** - Web端
- **App** - 移动端应用
- **HarmonyOS** - 鸿蒙应用

## Why

This template provides a modern development experience for UniApp projects with:

- **Fast development** - Vite + Vue 3 + TypeScript
- **Type safety** - Full TypeScript support with auto-generated types
- **Modern tooling** - ESLint, auto-imports, and more
- **Cross-platform** - Support for multiple platforms out of the box
- **Professional UI** - uView Pro component library
- **Utility-first CSS** - TailwindCSS with WeChat Mini Program support
- **API generation** - Auto-generate API types from OpenAPI specs

## License

[MIT](./LICENSE) License © 2024

## Acknowledgments

- [Vitesse](https://github.com/antfu-collective/vitesse) - Inspiration for the template structure
- [UniApp](https://uniapp.dcloud.io/) - Cross-platform development framework
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
