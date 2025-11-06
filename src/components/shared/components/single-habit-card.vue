<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps<{
    id: number | string,
    color: string,
    title: string,
    description: string,
    frecuency: string,
    tag: string,
}>()

// Estado reactivo del checkbox
const isCompleted = ref(false)

// Referencia al título para aplicar clases
const habitTitleRef = ref<HTMLElement | null>(null)

//Watch para vigilar al elemento y reaccionar a los cambios
watch(isCompleted, (checked) => {
    habitTitleRef.value?.classList.toggle('habit-completed', checked)
});

</script>
<template>
    <div class="habit-card mt-8">
        <input v-model="isCompleted" type="checkbox" name="completeHabit" :id="'completeHabit' + id" class="mr-4">
        <span :class="[color, 'inline-block', 'w-3', 'h-3', 'rounded-full', 'mr-2']"></span>
        <p ref="habitTitleRef" class="inline-block mb-2" :id="'habit-title-' + id">{{ title }}</p>
        <p class="text-sm ml-8">{{ description }}</p>
        <div class="flex mt-4">
            <div>
                <i class="bi bi-fire text-orange-500 ml-8"></i> {{ frecuency }}
            </div>
            <div><i class="bi bi-tag ml-8 text-gray-400"></i> {{ tag }}</div>
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

.habit-completed {
    text-decoration: line-through;
}
</style>