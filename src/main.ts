import AppVue from './App.vue'
import { piniaConfig } from './utils/config/pinia'
import { routerConfig } from './utils/config/router'
import 'uno.css'
import '@/styles/index.css'

async function setupApp() {
    const app = createApp(AppVue)
    app.use(piniaConfig)
    app.use(routerConfig)
    app.mount('#app')
}

setupApp()
