<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
    <n-layout-footer v-if="appStore.showFooter" bordered position="absolute" class="h-40px flex-center">
        {{ appStore.footerText }}
    </n-layout-footer>
</template>
