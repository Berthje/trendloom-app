<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
</script>

<template>
  <AnnouncementBar />
  <NavBar />
  <RouterView />
</template>

<style scoped>
</style>
