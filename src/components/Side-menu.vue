<script setup lang="ts">
const itemList = document.getElementsByClassName('list-menu') as HTMLCollectionOf<HTMLElement>;

function toggleActive(event: Event) {
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].classList.remove('active-item');
    }
    const element = event.currentTarget as HTMLElement;
    element.classList.add('active-item');
}

</script>
<template>
    <div>
        <ul>
            <li class="line-icon list-menu active-item" @click="toggleActive"><i
                    class="bi bi-house-door icon-list"></i><span>Inicio</span>
            </li>
            <li class="line-icon list-menu" @click="toggleActive"><i
                    class="bi bi-list-ul icon-list"></i><span>Hábitos</span></li>
            <li class="line-icon list-menu" @click="toggleActive"><i
                    class="bi bi-graph-up-arrow icon-list"></i><span>Estadísticas</span></li>
            <li class="line-icon list-menu" @click="toggleActive"><i
                    class="bi bi-sliders icon-list"></i><span>Ajustes</span></li>
        </ul>
    </div>
</template>
<style scoped>
.icon-list {
    font-size: 1.5em;
    color: #34495e;
}

.line-icon {
    display: flex;
    align-items: center;
    /* centra verticalmente */
    gap: 0.5em;
    /* espacio entre icono y texto */
}

.list-menu {
    margin-bottom: 1em;
    cursor: pointer;
    border-radius: 5px;
    padding: 0.5em;
}

.active-item {
    font-weight: bold;
    color: white;
    background-color: #7f8c8d;
}

.active-item i {
    color: white;
}
</style>