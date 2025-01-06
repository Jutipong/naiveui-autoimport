<script setup lang="ts">
const router = useRouter()
</script>

<template>
    <div class="h-full flex-col-center">
        <img src="@/assets/svg/error-403.svg" alt="" class="w-1/3">

        <n-button type="primary" @click="router.push('/')">
            <span>Back to the homepage</span>
        </n-button>
    </div>
</template>
