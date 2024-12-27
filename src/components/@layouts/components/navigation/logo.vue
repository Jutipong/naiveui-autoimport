<script setup lang="ts">
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()

const name = import.meta.env.VITE_APP_NAME
</script>

<template>
    <div
        class="h-60px flex-center cursor-pointer gap-2 p-x-2 text-xl"
        @click="router.push('/')"
    >
        <svg-icons-logo class="text-1.5em" />
        <span v-show="!appStore.collapsed" class="overflow-hidden text-ellipsis whitespace-nowrap">{{ name }}</span>
    </div>
</template>

<style scoped></style>
