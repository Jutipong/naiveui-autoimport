<script lang="ts" setup>
import Setting from '../common/Setting.vue'
import ToggleSidebar from '../header/toggle-sidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import DarkModeSwitch from './dark-mode-switch.vue'
import Logout from './logout.vue'
</script>

<template>
    <n-layout-header bordered position="absolute" class="z-999">
        <div class="h-60px flex-y-center justify-between">
            <div class="h-full flex-y-center">
                <ToggleSidebar />
                <Breadcrumb />
            </div>
            <div class="h-full flex-y-center gap-1 p-x-xl">
                <DarkModeSwitch />
                <Setting />
                <Logout />
            </div>
        </div>
    </n-layout-header>
</template>
