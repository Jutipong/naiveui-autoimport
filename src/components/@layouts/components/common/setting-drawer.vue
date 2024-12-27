<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const transitionSelectorOptions = ref(
    [
        {
            label: 'Null',
            value: '',
        },
        {
            label: 'FadeSlide',
            value: 'fade-slide',
        },
        {
            label: 'FadeBottom',
            value: 'fade-bottom',
        },
        {
            label: 'FadeScale',
            value: 'fade-scale',
        },
        {
            label: 'ZoomFade',
            value: 'zoom-fade',
        },
        {
            label: 'ZoomOut',
            value: 'zoom-out',
        },
        {
            label: 'Soft',
            value: 'fade',
        },
    ],
)

const palette = [
    '#ffb8b8',
    '#d03050',
    '#F0A020',
    '#fff200',
    '#ffda79',
    '#18A058',
    '#006266',
    '#22a6b3',
    '#18dcff',
    '#2080F0',
    '#c56cf0',
    '#be2edd',
    '#706fd3',
    '#4834d4',
    '#130f40',
    '#4b4b4b',
]

function resetSetting() {
    window.$dialog.warning({
        title: 'Reset settings',
        content: 'Confirm to reset all settings?',
        positiveText: 'confirm',
        negativeText: 'cancel',
        onPositiveClick: () => {
            appStore.resetAlltheme()
            window.$message.success('Reset successful')
        },
    })
}
</script>

<template>
    <n-drawer v-model:show="appStore.showSetting" :width="360">
        <n-drawer-content title="SystemSetting" closable>
            <n-space vertical>
                <n-divider>ThemeSetting</n-divider>
                <n-space justify="space-between">
                    ColorWeak
                    <n-switch :value="appStore.colorWeak" @update:value="appStore.toggleColorWeak" />
                </n-space>
                <n-space justify="space-between">
                    BlackAndWhite
                    <n-switch :value="appStore.grayMode" @update:value="appStore.toggleGrayMode" />
                </n-space>
                <n-space align="center" justify="space-between">
                    ThemeColor
                    <n-color-picker
                        v-model:value="appStore.primaryColor" class="w-10em" :swatches="palette"
                        @update:value="appStore.setPrimaryColor"
                    />
                </n-space>
                <n-space align="center" justify="space-between">
                    PageTransition
                    <n-select
                        v-model:value="appStore.transitionAnimation" class="w-10em"
                        :options="transitionSelectorOptions" @update:value="appStore.reloadPage"
                    />
                </n-space>

                <n-divider>InterfaceDisplay</n-divider>
                <n-space justify="space-between">
                    LogoDisplay
                    <n-switch v-model:value="appStore.showLogo" />
                </n-space>
                <n-space justify="space-between">
                    TopProgress
                    <n-switch v-model:value="appStore.showProgress" />
                </n-space>
                <n-space justify="space-between">
                    BottomCopyright
                    <n-switch v-model:value="appStore.showFooter" />
                </n-space>
                <n-space justify="space-between">
                    Breadcrumb
                    <n-switch v-model:value="appStore.showBreadcrumb" />
                </n-space>
            </n-space>

            <template #footer>
                <n-button type="error" @click="resetSetting">
                    reset
                </n-button>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>
