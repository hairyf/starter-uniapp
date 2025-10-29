import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'
import postcssPlugins from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // https://github.com/sonofmagic/uni-app-vite-vue3-tailwind-vscode-template/issues/29
  const { default: AutoImport } = await import('unplugin-auto-import/vite')
  return {
    plugins: [
      uni(),
      uvwt(),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: 'src/types/auto-imports.d.ts',
        dirs: ['src/composables'],
        eslintrc: { enabled: true },
      }),
    ],
    css: {
      // https://vitejs.dev/config/shared-options.html#css-preprocessoroptions
      preprocessorOptions: { scss: { silenceDeprecations: ['legacy-js-api'] } },
      postcss: { plugins: postcssPlugins },
    },
  }
})
