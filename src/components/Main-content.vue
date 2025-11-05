<script setup lang="ts">
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
        <div class="habit-card">1</div>
        <div class="habit-card">2</div>
        <div class="habit-card">3</div>
    </div>
</template>
<style scoped>
.cards {
    display: flex;
    justify-content: space-around;
    gap: 10em;
    margin-top: 2em;
    padding-left: 2em;
    text-align: center;
}

.habit-card {
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    border: 1px solid #ecf0f1;
}
</style>