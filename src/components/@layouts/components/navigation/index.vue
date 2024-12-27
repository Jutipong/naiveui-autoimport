<script lang="ts" setup>
import type { MenuInst } from 'naive-ui'
import { useAppStore } from '@/store/app'
import { Menus } from '@/store/menus'
import Logo from './logo.vue'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
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
    <n-layout-sider
        bordered
        :collapsed="appStore.collapsed"
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        content-style="display: flex;flex-direction: column;min-height:100%;"
    >
        <Logo v-if="appStore.showLogo" />

        <n-scrollbar class="flex-1">
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
                    <Logo />
                </template>
            </n-menu>
        </n-scrollbar>
    </n-layout-sider>
</template>
