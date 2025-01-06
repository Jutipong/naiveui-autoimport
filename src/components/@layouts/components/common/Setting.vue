<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <CommonCommonWrapper @click="appStore.showSetting = !appStore.showSetting">
                <icon-park-outline-setting-two />
            </CommonCommonWrapper>
        </template>
        <span>setting</span>
    </n-tooltip>
</template>
