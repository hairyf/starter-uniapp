import Uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
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
    plugins: [
      Manifest(),
      Uni(),
      Tailwindcss(),
      Layouts(),
      Pages({ dts: 'src/types/uni-pages.d.ts' }),
      Components({ dts: 'src/types/uni-components.d.ts' }),
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
