<script setup lang="ts">
import SettingDrawer from './components/common/setting-drawer.vue'
import Navigation from './components/navigation/index.vue'
</script>

<template>
    <SettingDrawer />
    <component :is="Navigation" />
</template>
