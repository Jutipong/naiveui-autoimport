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
    // const menus: AppRoute.RowRoute[] = [
    //     {
    //         name: 'home',
    //         path: '/',
    //         title: 'Title Home',
    //         requiresAuth: true,
    //         icon: 'icon-park-outline:home',
    //         componentPath: '/home/index.vue',
    //         id: 1,
    //         pid: null,
    //     },
    //     {
    //         name: 'error',
    //         path: '/error',
    //         title: '异常页',
    //         requiresAuth: true,
    //         icon: 'icon-park-outline:error-computer',
    //         menuType: 'dir',
    //         componentPath: null,
    //         id: 31,
    //         pid: null,
    //     },
    //     {
    //         name: 'demo403',
    //         path: '/error/403',
    //         title: '403',
    //         requiresAuth: true,
    //         icon: 'carbon:error',
    //         order: 3,
    //         componentPath: '/error/403/index.vue',
    //         id: 32,
    //         pid: 31,
    //     },
    //     {
    //         name: 'demo404',
    //         path: '/error/404',
    //         title: '404',
    //         requiresAuth: true,
    //         icon: 'icon-park-outline:error',
    //         order: 2,
    //         componentPath: '/error/404/index.vue',
    //         id: 33,
    //         pid: 31,
    //     },
    //     {
    //         name: 'demo500',
    //         path: '/error/500',
    //         title: '500',
    //         requiresAuth: true,
    //         icon: 'carbon:data-error',
    //         order: 1,
    //         componentPath: '/error/500/index.vue',
    //         id: 34,
    //         pid: 31,
    //     },
    // ]

    const menuOption: MenuOption[] = [
        {
            label: 'Index',
            name: 'Index',
            title: 'Title Index',
            key: '/',
            icon: renderIcon('icon-park-outline:rotate-one'),
        },
        {
            label: 'Title Home',
            name: 'Home',
            title: 'Title Home',
            key: '/home',
            icon: renderIcon('icon-park-outline:home'),
        },
    ]

    // const result = arrayToTree(transformAuthRoutesToMenus(menus))
    return menuOption
}

export default {
    Menus,
}
