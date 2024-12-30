<script lang="ts" setup>
import CollapseButton from '../header/collapse-button.vue'
import Setting from './../common/setting.vue'
import Breadcrumb from './breadcrumb.vue'
import DarkModeSwitch from './dark-mode-switch.vue'
import userCenter from './user-center.vue'
</script>

<template>
    <n-layout-header bordered position="absolute" class="z-999">
        <div class="h-60px flex-y-center justify-between">
            <div class="h-full flex-y-center">
                <CollapseButton />
                <Breadcrumb />
            </div>
            <div class="h-full flex-y-center gap-1 p-x-xl">
                <DarkModeSwitch />
                <Setting />
                <userCenter />
            </div>
        </div>
    </n-layout-header>
</template>
