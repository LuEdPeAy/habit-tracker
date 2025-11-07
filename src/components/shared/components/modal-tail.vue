<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits<{
    (e: 'showModalEmit'): void
}>();

function emitirShowModal() {
    emit('showModalEmit');
}
</script>
<template>
    <div
        class="fixed inset-0 backdrop-invert backdrop-opacity-40 flex items-center justify-center z-50 transition-opacity duration-1000 ease-out opacity-1000">
        <!-- Contenedor del modal -->
        <div
            class="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-500 ease-out scale-100 translate-y-0">
            <h2 class="text-xl font-semibold mb-4">Título del Modal</h2>
            <p class="text-gray-700 mb-4">Este es el contenido del modal.</p>
            <button @click="emitirShowModal"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cerrar</button>
        </div>
    </div>
</template>
<style></style>