<script setup lang="ts">
const text = ref('Hello nova-admin')
</script>

<template>
    <n-space vertical>
        <n-card title="Home">
            {{ text }}
        </n-card>
    </n-space>
</template>

<style scoped></style>
