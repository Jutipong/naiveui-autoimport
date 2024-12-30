import { fileURLToPath, URL } from 'node:url'
import UnoCSS from '@unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname, '') as ImportMetaEnv
    return {
        base: env.VITE_BASE_URL,
        plugins: [
            vue(),
            vueJsx(),
            UnoCSS(),
            AutoImport({
                imports: [
                    'vue',
                    'vue-router',
                    'pinia',
                    '@vueuse/core',
                    'vue-i18n',
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar',
                            'useModal',
                        ],
                    },
                ],
                include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
                dirs: ['./src/utils/**', './src/stores', '!./src/utils/config/**'],
                dts: './src/auto-imports.d.ts',
            }),
            Components({
                dirs: ['src/components', '!./src/components/@layouts/**'],
                dts: 'src/components.d.ts',
                resolvers: [
                    IconsResolver({
                        prefix: false,
                        customCollections: [
                            'svg-icons',
                        ],
                    }),
                    NaiveUiResolver(),
                ],
            }),
            Layouts({
                layoutsDirs: 'src/components/@layouts',
                defaultLayout: 'default',
            }),
            VueRouter({
                routesFolder: 'src/pages',
                dts: 'src/typings/typed-router.d.ts',
            }),
            Icons({
                defaultStyle: 'display:inline-block',
                compiler: 'vue3',
                customCollections: {
                    'svg-icons': FileSystemIconLoader(
                        'src/assets/svg-icons',
                        svg => svg.replace(/^<svg /, '<svg fill="currentColor" width="1.2em" height="1.2em"'),
                    ),
                },
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
                '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
                '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
                '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
                '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
            },
            extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
        },
        optimizeDeps: {
            include: ['echarts', 'md-editor-v3', 'quill'],
        },
        css: { preprocessorOptions: { scss: { api: 'modern' } } },
    }
})
