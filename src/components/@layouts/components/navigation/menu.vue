<script setup lang="ts">
import type { MenuInst } from 'naive-ui'
import { useAppStore } from '@/store/app'
import { Menus } from '@/store/menus'
import LogoComponent from './../navigation/logo.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const menus = Menus()

const menuInstRef = ref<MenuInst | null>(null)
watch(
    () => route.path,
    () => {
        // menuInstRef.value?.showOption(routeStore.activeMenu as string)
        // menuInstRef.value?.showOption(route.path)
    },
    { immediate: true },
)
function handleMenuClick(key: string) {
    menuInstRef.value?.showOption(key)
    router.push(key)
}
</script>

<template>
    <n-menu
        ref="menuInstRef"
        :collapsed="appStore.collapsed"
        :indent="20"
        :collapsed-width="64"
        :options="menus"
        :value="route.path"
        @update:value="handleMenuClick"
    >
        <template #header>
            <LogoComponent />
        </template>
    </n-menu>
</template>
