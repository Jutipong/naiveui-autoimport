<script setup lang="ts">
interface Props {
    message: string
}

const { message } = defineProps<Props>()
</script>

<template>
    <n-tooltip :show-arrow="false" trigger="hover">
        <template #trigger>
            <icon-park-outline-help class="cursor-help op-50" />
        </template>
        {{ message }}
    </n-tooltip>
</template>
