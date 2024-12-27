<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>

<template>
    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <CommonWrapper @click="appStore.showSetting = !appStore.showSetting">
                <icon-park-outline-setting-two />
            </CommonWrapper>
        </template>
        <span>setting</span>
    </n-tooltip>
</template>
