<script setup lang="ts">
import HabitCard from "./shared/components/habit-card.vue";

const fecha = new Date();

const anioActual = fecha.getFullYear();
const mesActualTexto = fecha.toLocaleString('es-MX', { month: 'long' });
const diaActual = fecha.getDate();
const diaActualTexto = fecha.toLocaleString('es-MX', { weekday: 'long' });

</script>
<template>
    <div>
        <h2>{{ diaActualTexto }}, {{ diaActual }} de {{ mesActualTexto }} de {{ anioActual }}</h2>
        <h5>0 de 5 hábitos completados</h5>
    </div>

    <div class="cards">
        <HabitCard title="Completado hoy" icon="bi bi-check-circle text-2xl text-indigo-700" />
        <HabitCard title="Racha máxima" icon="bi bi-fire text-2xl text-orange-700" />
        <HabitCard title="Esta semana" icon="bi bi-graph-up-arrow text-2xl text-emerald-700" />
    </div>
</template>
<style scoped>
.cards {
    display: flex;
    justify-content: space-around;
    gap: 10em;
    margin-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
}

.habit-card {
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    border: 1px solid #ecf0f1;
}
</style>