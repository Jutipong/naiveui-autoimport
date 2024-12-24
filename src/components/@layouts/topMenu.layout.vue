<script lang="ts" setup>
// import { useAppStore, useRouteStore } from '@/store/app'
import { useAppStore } from '@/store/app'
import {
    BackTop,
    FullScreen,
    Logo,
    Menu,
    Notices,
    Search,
    Setting,
    TabBar,
    UserCenter,
} from './components'

// const routeStore = useRouteStore()
const appStore = useAppStore()
</script>

<template>
    <n-layout class="wh-full" embedded>
        <n-layout
            class="h-full flex flex-col" content-style="display: flex;flex-direction: column;min-height:100%;"
            embedded :native-scrollbar="false"
        >
            <n-layout-header bordered position="absolute" class="z-999">
                <div v-if="!appStore.contentFullScreen" class="h-60px flex-y-center shrink-0 justify-between">
                    <Logo v-if="appStore.showLogo" />
                    <Menu mode="horizontal" responsive />
                    <div class="h-full flex-y-center gap-1 p-x-xl">
                        <Search />
                        <Notices />
                        <FullScreen />
                        <DarkModeSwitch />
                        <LangsSwitch />
                        <Setting />
                        <UserCenter />
                    </div>
                </div>
                <TabBar v-if="appStore.showTabs" class="h-45px" />
            </n-layout-header>
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
                    <transition :name="appStore.transitionAnimation" mode="out-in">
                        <!-- <keep-alive :include="routeStore.cacheRoutes"> -->
                        <component :is="Component" v-if="appStore.loadFlag" :key="route.fullPath" />
                        <!-- </keep-alive> -->
                    </transition>
                </router-view>
            </div>
            <n-layout-footer
                v-if="appStore.showFooter && !appStore.contentFullScreen"
                bordered position="absolute" class="h-40px flex-center"
            >
                {{ appStore.footerText }}
            </n-layout-footer>
            <BackTop />
        </n-layout>
    </n-layout>
</template>
