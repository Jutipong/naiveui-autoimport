import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
    presets: [
        presetUno({ dark: 'class' }),
        presetAttributify(),
        presetUno(),
        presetIcons(),
    ],
    shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-center': 'flex justify-center items-center',
        'flex-col-center': 'flex-center flex-col',
        'flex-x-center': 'flex justify-center',
        'flex-y-center': 'flex items-center',
    },
    transformers: [
        transformerVariantGroup(),
    ],
})
