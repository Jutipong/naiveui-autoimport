import type { MenuOption } from 'naive-ui'
import { renderIcon } from '@/utils'
// import { $t, renderIcon } from '@/utils'
// import { RouterLink } from 'vue-router'

// // render the returned routing table as a sidebar
// function transformAuthRoutesToMenus(userRoutes: AppRoute.Route[]) {
//     // const { hasPermission } = usePermission()
//     return userRoutes
//         // Filter out side menus without permission
//         // .filter(i => hasPermission(i.meta.roles))
//         //  Sort the menu according to the order size
//         .sort((a, b) => {
//             if (a.meta && a.meta.order && b.meta && b.meta.order)
//                 return a.meta.order - b.meta.order
//             else if (a.meta && a.meta.order)
//                 return -1
//             else if (b.meta && b.meta.order)
//                 return 1
//             else return 0
//         })
//         // Convert to side menu data structure
//         .map((item) => {
//             const target: MenuOption = {
//                 id: item.id,
//                 pid: item.pid,
//                 label:
//                     (!item.meta.menuType || item.meta.menuType === 'page')
//                         ? () =>
//                                 h(
//                                     RouterLink,
//                                     {
//                                         to: {
//                                             path: item.path,
//                                         },
//                                     },
//                                     { default: () => $t(`route.${String(item.name)}`, item.meta.title) },
//                                 )
//                         : () => $t(`route.${String(item.name)}`, item.meta.title),
//                 key: item.path,
//                 icon: item.meta.icon ? renderIcon(item.meta.icon) : undefined,
//             }
//             return target
//         })
// }

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
