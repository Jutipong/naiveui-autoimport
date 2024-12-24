<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import {
    BackTop,
    Breadcrumb,
    CollapaseButton,
    Logo,
    Menu,
    Setting,
    UserCenter,
} from './components'

// const routeStore = { cacheRoutes: 'map' }

const appStore = useAppStore()
</script>

<template>
    <n-layout class="wh-full" embedded has-sider>
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

        <n-layout
            class="h-full flex flex-col"
            content-style="display: flex;flex-direction: column;min-height:100%;"
            embedded
            :native-scrollbar="false"
        >
            <n-layout-header bordered position="absolute" class="z-999">
                <div v-if="!appStore.contentFullScreen" class="h-60px flex-y-center justify-between">
                    <div class="h-full flex-y-center">
                        <CollapaseButton />
                        <Breadcrumb />
                    </div>
                    <div class="h-full flex-y-center gap-1 p-x-xl">
                        <!-- <Search /> -->
                        <DarkModeSwitch />
                        <Setting />
                        <UserCenter />
                    </div>
                </div>
            </n-layout-header>
            <!-- 121 = 16 + 45 + 60 45是面包屑高度 60是标签栏高度 -->
            <!-- 56 = 16 + 40 40是页脚高度 -->
            <div
                class="flex flex-1 flex-col p-16px"
                :class="{
                    'p-t-121px': appStore.showTabs,
                    'p-b-56px': appStore.showFooter && !appStore.contentFullScreen,
                    'p-t-76px': !appStore.showTabs,
                    'p-t-61px': appStore.contentFullScreen,
                }"
            >
                <router-view v-slot="{ Component, route }" class="flex-1">
                    <transition
                        :name="appStore.transitionAnimation"
                        mode="out-in"
                    >
                        <!-- <keep-alive :include="routeStore.cacheRoutes"> -->
                        <component
                            :is="Component"
                            v-if="appStore.loadFlag"
                            :key="route.fullPath"
                        />
                        <!-- </keep-alive> -->
                    </transition>
                </router-view>
            </div>

            <Footer />
            <BackTop />
        </n-layout>
    </n-layout>
</template>
