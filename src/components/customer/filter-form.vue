<script lang="ts" setup>
const state = reactive({
    master: {
        status: [
            { id: true, text: 'Active' },
            { id: false, text: 'InActive' },
        ],
    },
    search: {
        // autoCompleteServer: '0d464588-56a6-4831-b085-f26cb65ee7fd',
        // autoCompleteMultipleServer: ['0d464588-56a6-4831-b085-f26cb65ee7fd', 'd85f5eb3-4b9c-4483-9b77-29010b0a93a3', 'dc79347f-90b2-4ffb-9140-69e54648e180'],
    } as Product,
})
</script>

<template>
    <div>
        <n-card>
            <n-form ref="formRef" :model="state" label-placement="left" inline :show-feedback="false">
                <n-flex>
                    <n-form-item label="Band" path="condition_1">
                        <n-input v-model:value="state.search.brand" placeholder="请输入" />
                    </n-form-item>
                    <n-form-item label="Title" path="condition_2">
                        <n-input v-model:value="state.search.title" placeholder="请输入" />
                    </n-form-item>
                    <n-form-item label="Status" path="condition_3">
                        <n-input v-model:value="state.search.status" placeholder="请输入" />
                    </n-form-item>
                    <n-flex class="ml-auto">
                        <NButton type="primary">
                            <template #icon>
                                <icon-park-outline-search />
                            </template>
                            Search
                        </NButton>
                        <NButton strong secondary>
                            <template #icon>
                                <icon-park-outline-redo />
                            </template>
                            Clear
                        </NButton>
                    </n-flex>
                </n-flex>
            </n-form>
        </n-card>
    </div>
</template>
