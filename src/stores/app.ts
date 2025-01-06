import type { GlobalThemeOverrides } from 'naive-ui'
import { colord } from 'colord'
import themeConfig from './theme.json'

export type TransitionAnimation = '' | 'fade-slide' | 'fade-bottom' | 'fade-scale' | 'zoom-fade' | 'zoom-out'

const docEle = ref(document.documentElement)

const { system, store } = useColorMode({
    emitAuto: true,
})

export const useAppStore = defineStore('app-store', {
    state: () => {
        return {
            footerText: 'Copyright © 2024 chansee97',
            theme: themeConfig as GlobalThemeOverrides,
            primaryColor: themeConfig.common.primaryColor,
            collapsed: false,
            grayMode: false,
            colorWeak: false,
            showLogo: true,
            showFooter: true,
            showProgress: true,
            showBreadcrumb: true,
            showSetting: false,
            transitionAnimation: 'fade-slide' as TransitionAnimation,
            // for new
            loadings: 0,
            isProgressLoading: false,
        }
    },
    getters: {
        storeColorMode() {
            return store.value
        },
        colorMode() {
            return store.value === 'auto' ? system.value : store.value
        },
        // for new
        isLoading(): boolean {
            return this.loadings > 0
        },
    },
    actions: {
        resetAlltheme() {
            this.theme = themeConfig
            this.primaryColor = '#18a058'
            this.collapsed = false
            this.grayMode = false
            this.colorWeak = false
            this.showLogo = true
            this.showFooter = true
            this.showBreadcrumb = true
            this.transitionAnimation = 'fade-slide'

            this.setPrimaryColor(this.primaryColor)
        },
        setPrimaryColor(color: string) {
            const brightenColor = colord(color).lighten(0.05).toHex()
            const darkenColor = colord(color).darken(0.05).toHex()

            this.theme.common!.primaryColor = color
            this.theme.common!.primaryColorHover = brightenColor
            this.theme.common!.primaryColorPressed = darkenColor
            this.theme.common!.primaryColorSuppl = brightenColor
        },
        setColorMode(mode: 'light' | 'dark' | 'auto') {
            store.value = mode
        },
        toggleCollapse() {
            this.collapsed = !this.collapsed
        },
        toggleColorWeak() {
            docEle.value.classList.toggle('color-weak')
            this.colorWeak = docEle.value.classList.contains('color-weak')
        },
        toggleGrayMode() {
            docEle.value.classList.toggle('gray-mode')
            this.grayMode = docEle.value.classList.contains('gray-mode')
        },
        // for new
        setLoading() {
            this.loadings++
        },
        unLoading() {
            this.loadings--
        },
        resetLoading() {
            this.loadings = 0
        },
    },
    persist: {
        storage: localStorage,
    },
})
