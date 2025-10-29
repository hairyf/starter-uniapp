import { fileURLToPath, URL } from 'node:url'
import Uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { uViewProResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import Layouts from '@uni-helper/vite-plugin-uni-layouts'
import Manifest from '@uni-helper/vite-plugin-uni-manifest'
import Pages from '@uni-helper/vite-plugin-uni-pages'
import { defineConfig } from 'vite'
import { UnifiedViteWeappTailwindcssPlugin as Tailwindcss } from 'weapp-tailwindcss/vite'
import postcssPlugins from './postcss.config'
// https://vitejs.dev/config/
export default defineConfig(async () => {
  // https://github.com/sonofmagic/uni-app-vite-vue3-tailwind-vscode-template/issues/29
  const { default: AutoImport } = await import('unplugin-auto-import/vite')
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      Components({
        dts: 'src/types/uni-components.d.ts',
        resolvers: [uViewProResolver()],
      }),
      Pages({ dts: 'src/types/uni-pages.d.ts' }),
      AutoImport({
        imports: ['vue', '@vueuse/core', 'uni-app'],
        dts: 'src/types/auto-imports.d.ts',
        dirs: ['src/composables', 'src/store'],
        eslintrc: { enabled: true },
      }),
      Manifest(),
      Layouts(),
      Uni(),
      Tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: '@import "@/uview.scss";',
        },
      },
      postcss: { plugins: postcssPlugins },
    },
  }
})
