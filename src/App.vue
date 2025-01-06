<script setup lang="ts">
// import { naiveI18nOptions } from '@/utils'
import { darkTheme } from 'naive-ui'
// import NaiveProvider from './components/common/NaiveProvider.vue'
import { useAppStore } from './stores/app'

const appStore = useAppStore()

// const naiveLocale = computed(() => {
//     return naiveI18nOptions[appStore.lang] ? naiveI18nOptions[appStore.lang] : naiveI18nOptions.enUS
// },
// )
</script>

<template>
    <!-- :locale="naiveLocale.locale" :date-locale="naiveLocale.dateLocale" :theme-overrides="appStore.theme" -->
    <n-config-provider
        class="wh-full" inline-theme-disabled :theme="appStore.colorMode === 'dark' ? darkTheme : null"
        :theme-overrides="appStore.theme"
    >
        <common-naive-provider>
            <router-view />
        </common-naive-provider>
    </n-config-provider>
</template>
