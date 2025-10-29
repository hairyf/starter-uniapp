import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import uview from 'uview-pro'
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  pinia.use(createUnistorage())
  app.use(pinia)
  app.use(uview)
  return { app }
}
