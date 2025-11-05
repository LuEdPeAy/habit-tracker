<script setup lang="ts">
import Logo from './components/Logo.vue';
import sideMenu from './components/side-menu.vue';
import MainContent from './components/Main-content.vue';
</script>

<template>

  <div class="header">
    <Logo nameProject="Habits Tracker" creator="Luedpeay" />
  </div>
  <div class="main">
    <div class="sidebar">
      <sideMenu />
    </div>
    <div class="content">
      <MainContent />
    </div>
  </div>



</template>

<style scoped></style>
