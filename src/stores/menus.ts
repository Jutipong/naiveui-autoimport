import type { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils'

export function Menus() {
    const menuOption: MenuOption[] = [
        {
            label: 'Index',
            name: 'Index',
            title: 'Index',
            key: '/',
            icon: renderIcon('icon-park-outline:rotate-one'),
        },
        {
            label: 'Title Home',
            name: 'Home',
            title: 'Home',
            key: '/home',
            icon: renderIcon('icon-park-outline:home'),
        },
        {
            label: 'Demo',
            icon: renderIcon('carbon:demo'),
            key: '/demo',
            children: [
                {
                    title: 'product',
                    key: '/product',
                    icon: renderIcon('carbon:product'),
                },
            ],
        },
        {
            name: 'demo403',
            title: '403',
            requiresAuth: true,
            icon: renderIcon('carbon:error'),
            key: '/error/403',
        },
        {
            name: 'demo404',
            key: '/error/404',
            title: '404',
            requiresAuth: true,
            icon: renderIcon('icon-park-outline:error'),
        },
        {
            name: 'demo500',
            key: '/error/500',
            title: '500',
            requiresAuth: true,
            icon: renderIcon('carbon:data-error'),
        },
    ]

    // const result = arrayToTree(transformAuthRoutesToMenus(menus))
    return menuOption
}

export default {
    Menus,
}
