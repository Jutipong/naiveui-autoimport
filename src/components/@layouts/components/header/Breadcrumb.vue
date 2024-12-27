<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useAppStore } from '@/store/app'
import { Menus } from '@/store/menus'

const route = useRoute()
const menu = Menus()
const routes = ref<MenuOption[]>([])
routes.value = menu.filter(i => i.key === route.path)

watch(() => route.path, () => {
    routes.value = menu.filter(i => i.key === route.path)
})

const appStore = useAppStore()
// function getLabel(label: string) {
//     return label.replace(/-/g, ' ')
// }
</script>

<template>
    <TransitionGroup v-if="appStore.showBreadcrumb" name="list" tag="ul" style="display: flex; gap:1em;">
        <n-el
            v-for="(item) in routes"
            :key="item.name as string"
            tag="li" style=" color: var(--text-color-2); transition: 0.3s var(--cubic-bezier-ease-in-out);"
            class="split flex-center cursor-pointer gap-2"
        >
            <!-- <nova-icon :icon="typeof item.icon === 'string' ? item.icon : undefined" /> -->
            <span class="whitespace-nowrap">{{ `${String(item.name)}` }}</span>
        </n-el>
    </TransitionGroup>
</template>

<style lang="scss">
.split:not(:first-child)::before {
   //content: '/';
   padding-right:0.6em;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>
