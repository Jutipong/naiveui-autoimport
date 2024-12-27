<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import CollapseButtonComponent from '../header/collapse-button.vue'
import SettingComponent from './../common/setting-drawer.vue'
import BreadcrumbComponent from './../header/breadcrumb.vue'
import userCenterComponent from './user-center.vue'

const appStore = useAppStore()
</script>

<template>
    <n-layout-header bordered position="absolute" class="z-999">
        <div v-if="!appStore.contentFullScreen" class="h-60px flex-y-center justify-between">
            <div class="h-full flex-y-center">
                <CollapseButtonComponent />
                <BreadcrumbComponent />
            </div>
            <div class="h-full flex-y-center gap-1 p-x-xl">
                <!-- <Search /> -->
                <DarkModeSwitch />
                <SettingComponent />
                <userCenterComponent />
            </div>
        </div>
    </n-layout-header>
</template>
