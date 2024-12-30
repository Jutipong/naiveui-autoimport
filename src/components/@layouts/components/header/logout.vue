<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
    <!-- <n-tooltip placement="bottom" trigger="hover"> -->
    <!-- <CommonWrapper> -->
    <!-- <div class="i-icon-park-outline-logout" color="red" /> -->
    <!-- <icon-park-outline-logout color="red" /> -->
    <!-- </CommonWrapper> -->
    <!-- <span>Logout</span> -->
    <!-- </n-tooltip> -->

    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <CommonWrapper>
                <Icon icon="icon-park-outline:logout" color="red" />
                <div class="i-icon-park-outline:logout" color="red" />
                <icon-park-outline:logout color="red" />
            </CommonWrapper>
        </template>
        <span>Logout</span>
    </n-tooltip>
</template>
