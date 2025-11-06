<script setup lang="ts">
import SingleHabitCard from "./shared/components/single-habit-card.vue";

</script>
<template>
    <div class="flex">
        <h2>Hábitos de hoy</h2>
    </div>
    <div class="w-lg p-8 bg-gray ">
        <SingleHabitCard id="1" color="bg-emerald-500" title="Hacer ejercicio"
            description="Hacer ejercicio 30 min durante el día" frecuency="5 días" tag="Salud" />
        <SingleHabitCard id="2" color="bg-indigo-500" title="Lectura diaria"
            description="Leer 30 minutos durante el día" frecuency="6 días" tag="Cognitivo" />
    </div>
</template>
<style scoped></style>