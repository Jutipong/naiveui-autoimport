import type { App } from 'vue'
// import { installRouter } from '@/router'
// import { installPinia } from '@/store'
import AppVue from './App.vue'
// import AppLoading from './components/common/AppLoading.vue'
import { piniaConfig } from './utils/config/pinia'
import { routerConfig } from './utils/config/router'

async function setupApp() {
    // const appLoading = createApp(AppLoading)
    // appLoading.mount('#appLoading')

    const app = createApp(AppVue)

    // await installPinia(app)
    app.use(piniaConfig)

    app.use(routerConfig)
    // await installRouter(app)

    Object.values(
        import.meta.glob<{ install: (app: App) => void }>('./modules/*.ts', {
            eager: true,
        }),
    ).map(i => app.use(i))

    // appLoading.unmount()
    app.mount('#app')
}

setupApp()
