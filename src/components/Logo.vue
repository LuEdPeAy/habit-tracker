<script setup lang="ts">
defineProps<{
    nameProject: string,
    creator: string
}>()
</script>

<template>
    <div class="header-bar">
        <div class="aling-icon-text">
            <i class="bi bi-card-checklist icono-ht"></i>
            <span>{{ nameProject }} <span class="creator">by {{ creator }}</span></span>
        </div>
        <button type="button" class="bg-black rounded-lg text-white aling-icon-text pr-2em">
            <i class="bi bi-plus icono-ht"></i><span>Nuevo hábito</span>
        </button>
    </div>
</template>

<style scoped>
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
</style>
