<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
    <CommonWrapper @click="appStore.toggleCollapse()">
        <icon-park-outline-menu-unfold v-if="appStore.collapsed" />
        <icon-park-outline-menu-fold v-else />
    </CommonWrapper>
</template>

<style scoped></style>
