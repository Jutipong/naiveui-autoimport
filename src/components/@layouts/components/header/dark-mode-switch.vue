<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <CommonWrapper>
                <icon-park-outline-moon v-if="appStore.storeColorMode === 'dark'" @click="appStore.setColorMode('light')" />
                <icon-park-outline-sun-one v-if="appStore.storeColorMode === 'light'" @click="appStore.setColorMode('dark')" />
            </CommonWrapper>
        </template>
        <span>{{ appStore.storeColorMode === 'dark' ? 'Dark' : 'Light' }}</span>
    </n-tooltip>
</template>
