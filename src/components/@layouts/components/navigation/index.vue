<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import BackTop from './../common/back-top.vue'
import Footer from './../footer/index.vue'
import HeaderComponent from './../header/index.vue'
import LogoComponent from './logo.vue'
import MenuComponent from './menu.vue'

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
            <LogoComponent v-if="appStore.showLogo" />

            <n-scrollbar class="flex-1">
                <MenuComponent />
            </n-scrollbar>
        </n-layout-sider>

        <n-layout
            class="h-full flex flex-col"
            content-style="display: flex;flex-direction: column;min-height:100%;"
            embedded
            :native-scrollbar="false"
        >
            <HeaderComponent />

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
