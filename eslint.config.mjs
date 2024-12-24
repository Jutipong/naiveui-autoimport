import antfu from '@antfu/eslint-config'

export default antfu(
    {
        stylistic: {
            indent: 4,
            overrides: {
                'eslint-comments/no-unlimited-disable': 'off',
            },
        },
        typescript: true,
        vue: true,
        rules: {
            'vue/valid-v-slot': ['error', {
                allowModifiers: true,
            }],
            'vue/no-mutating-props': ['error', {
                shallowOnly: true,
            }],
            'vue/prop-name-casing': ['off'],
            // 'vue/no-unused-refs': ['off'], // fix for vue 3.5
            'ts/no-unsafe-function-type': ['off'],
            'vue/no-unused-refs': ['off'],
        },
        jsonc: false,
        yaml: false,
        unocss: true,
        ignores: [
            '**/fixtures',
            'vite-env.d.ts',
            '**/*.d.ts',
            '**/.d.ts',
        ],
    },
)
