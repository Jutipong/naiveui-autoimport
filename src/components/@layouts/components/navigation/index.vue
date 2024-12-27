<script lang="ts" setup>
import { useAppStore } from '@/store/app'

import Logo from './logo.vue'
import Menu from './menu.vue'

const appStore = useAppStore()
</script>

<template>
    <n-layout-sider
        v-if="!appStore.contentFullScreen"
        bordered
        :collapsed="appStore.collapsed"
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        content-style="display: flex;flex-direction: column;min-height:100%;"
    >
        <Logo v-if="appStore.showLogo" />

        <n-scrollbar class="flex-1">
            <Menu />
        </n-scrollbar>
    </n-layout-sider>
</template>
