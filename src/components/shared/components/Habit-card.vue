<script setup lang="ts">
defineProps<{
    title: string,
    icon: string
}>()
</script>
<template>
    <div class="habit-card">
        <div class="flex justify-between">
            <h3 class="text-gray-500">{{ title }}</h3>
            <div class="flex items-center justify-center w-12 h-12 p-2 bg-gray-200 rounded-full">
                <i :class="icon"></i>
            </div>
        </div>
        <div class="mb-6 text-sm">
            Cuenta 3/8
        </div>
        <div class="w-full bg-gray-100 rounded-full h-3">
            <div
                class="bg-gray-500 h-3 rounded-full w-[27%] flex items-center justify-center text-white text-xs font-bold">
            </div>
        </div>

    </div>
</template>
<style scoped>
.habit-card {
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    border: 1px solid #ecf0f1;
}
</style>