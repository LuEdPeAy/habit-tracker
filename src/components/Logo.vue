<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue';
import Swal from 'sweetalert2'

const showModal = ref(false)
const titleHabit = ref('');
const descriptionHabit = ref('');
const frecuencyHabit = ref('');
const tagHabit = ref('');
const frecuencyCatalog = JSON.parse(localStorage.getItem('frecuencyCatalog') || '[]');
const tagCatalog = JSON.parse(localStorage.getItem('tagCatalog') || '[]');

defineProps<{
    nameProject: string,
    creator: string
}>()

function closeModal() {
    showModal.value = false;
}

function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') closeModal()
}

function handleSubmitNewHabit() {
    const inputValues = [
        titleHabit,
        descriptionHabit,
        frecuencyHabit,
        tagHabit
    ];

    if (makeFormValidation(inputValues)) {
        if (localStorage.getItem('habits')) {
            const habits = JSON.parse(localStorage.getItem('habits') || '[]');
            habits.push({
                title: titleHabit.value,
                description: descriptionHabit.value,
                frequency: frecuencyHabit.value,
                tag: tagHabit.value,
                completed: false
            });
            localStorage.setItem('habits', JSON.stringify(habits));
        } else {
            const habits = [{
                title: titleHabit.value,
                description: descriptionHabit.value,
                frequency: frecuencyHabit.value,
                tag: tagHabit.value,
                completed: false
            }];
            localStorage.setItem('habits', JSON.stringify(habits));

        }
        showModal.value = false;
        cleanInputs();
        Swal.fire({
            title: "Éxito!",
            text: "Se ha guardado correctamente el hábito.",
            icon: "success"
        });


    } else {
        console.log('envio false');
    }
}

function checkIsInputValid(input: Ref<string>): boolean {
    return input.value !== '';
}

function makeFormValidation(inputValues) {
    const validated = inputValues.every(input => checkIsInputValid(input));
    if (!validated) {
        Swal.fire({
            title: "Oops...",
            text: "Se necesitan completar todos los campos para continuar",
            icon: "error"
        });
        return false;
    }

    return true;
}

function cleanInputs() {
    titleHabit.value = '';
    descriptionHabit.value = '';
    frecuencyHabit.value = '';
    tagHabit.value = '';
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

console.log(frecuencyCatalog)

</script>

<template>
    <div class="header-bar">
        <div class="aling-icon-text">
            <i class="bi bi-card-checklist icono-ht"></i>
            <span>{{ nameProject }} <span class="creator">by {{ creator }}</span></span>
        </div>
        <button @click="showModal = true" type="button"
            class="bg-black rounded-lg text-white aling-icon-text pr-2em cursor-pointer">
            <i class="bi bi-plus icono-ht"></i><span>Nuevo hábito</span>
        </button>
    </div>
    <!-- Fondo oscuro -->
    <div v-if="showModal" @keydown.esc="closeModal" tabindex="0" class="fixed inset-0 backdrop-invert backdrop-opacity-40 flex items-center justify-center z-50
        transition-opacity duration-1000 ease-out opacity-1000">
        <!-- Contenedor del modal -->
        <div ref="modalRef"
            class="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-500 ease-out scale-100 translate-y-0">
            <h2 class="text-xl font-semibold mb-4">Crear nuevo hábito</h2>
            <div class="flex">
                <form @submit.prevent="handleSubmitNewHabit">
                    <label for="title" class="text-sm font-medium text-stone-700">Nombre del
                        hábito:</label>
                    <input v-model="titleHabit" type="text" id="title" name="title" placeholder="Ej. Hacer ejercicio"
                        class="bg-stone-100 border border-gray-300 focus:border-stone-400 focus:border-2 focus:outline-none focus:ring-0 rounded w-full mb-4 p-2  text-sm font-medium text-neutral-600">

                    <label for="description" class="text-sm font-medium text-stone-700">Descripción:</label>
                    <textarea v-model="descriptionHabit" id="description" name="description" rows="3"
                        placeholder="Describe tu hábito"
                        class="text-sm font-medium text-neutral-600 bg-stone-100 border border-gray-300 focus:border-stone-400 focus:border-2 focus:outline-none focus:ring-0 rounded w-full mb-4 p-2"></textarea>

                    <label for="frequency" class="text-sm font-medium text-stone-700">Frecuencia:</label>
                    <select v-model="frecuencyHabit" type="text" id="frequency" name="frequency"
                        class="bg-stone-100 border border-gray-300 focus:border-stone-400 focus:border-2 focus:outline-none focus:ring-0 rounded w-full mb-4 p-2 text-sm font-medium text-neutral-600">
                        <option v-for="frecuency in frecuencyCatalog" :key="frecuency.id" :value="frecuency.name">{{
                            frecuency.name }}
                        </option>
                    </select>
                    <label for="tag" class="text-sm font-medium text-stone-700">Categoría:</label>
                    <select v-model="tagHabit" id="tag" name="tag"
                        class="bg-stone-100 border border-gray-300 focus:border-stone-400 focus:border-2 focus:outline-none focus:ring-0 rounded w-full mb-4 p-2 text-sm font-medium text-neutral-600">
                        <option value="1">Salud</option>
                        <option value="2">Cognitivo</option>
                        <option value="3">Estudio</option>
                        <option value="4">Trabajo</option>
                        <option value="5">Afectivo</option>
                    </select>
                    <div class="flex justify-between">
                        <button type="submit"
                            class="cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400">Guardar
                            hábito</button>
                        <button @click="showModal = false"
                            class="cursor-pointer bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-600">Cancelar</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<style scoped>
input:focus,
textarea:focus {
    outline: none !important;
    box-shadow: none !important;
}

textarea {
    resize: none;
}

.pr-2em {
    padding-right: 2em;
}

.icono-ht {
    font-size: 2rem;
}

.aling-icon-text {
    display: flex;
    align-items: center;
    /* centra verticalmente */
    gap: 8px;
    /* espacio entre icono y texto */
}

.creator {
    font-style: italic;
    font-size: 0.75em;
}

.header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pointer {
    cursor: pointer;
}
</style>
