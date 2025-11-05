<script setup lang="ts">
defineProps<{
    nameProject: string,
    creator: string
}>()
</script>

<template>
    <div class="logo">
        <i class="bi bi-card-checklist icono-ht"></i>
        <span>{{ nameProject }} <span class="creator">by {{ creator }}</span></span>
    </div>
</template>

<style scoped>
.icono-ht {
    font-size: 2rem;
}

.logo {
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
</style>
