<script setup lang="ts">
import { useAppStore } from '@/store/app'
import BackTop from './components/common/back-top.vue'
import SettingDrawer from './components/common/setting-drawer.vue'
import Footer from './components/footer/index.vue'

import HeaderComponent from './components/header/index.vue'
import Navigation from './components/navigation/index.vue'

const appStore = useAppStore()
</script>

<template>
    <SettingDrawer />
    <n-layout class="wh-full" embedded has-sider>
        <!-- Navigation -->
        <Navigation />

        <n-layout class="h-full flex flex-col" content-style="display: flex;flex-direction: column;min-height:100%;" embedded :native-scrollbar="false">
            <!-- HeaderComponent -->
            <HeaderComponent />

            <div class="flex flex-1 flex-col p-16px p-t-76px" :class="{ 'p-b-56px': appStore.showFooter }">
                <router-view v-slot="{ Component, route }" class="flex-1">
                    <transition :name="appStore.transitionAnimation" mode="out-in">
                        <component :is="Component" :key="route.fullPath" />
                    </transition>
                </router-view>
            </div>

            <!-- Footer -->
            <Footer />

            <!-- BackTop -->
            <BackTop />
        </n-layout>
    </n-layout>
</template>
