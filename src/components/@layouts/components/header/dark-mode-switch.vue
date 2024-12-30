<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <icon-park-outline-moon v-if="appStore.storeColorMode === 'dark'" cursor-pointer @click="appStore.setColorMode('light')" />
            <icon-park-outline-sun-one v-if="appStore.storeColorMode === 'light'" cursor-pointer @click="appStore.setColorMode('dark')" />
        </template>
        <span>{{ appStore.storeColorMode === 'dark' ? 'Dark' : 'Light' }}</span>
    </n-tooltip>
</template>
