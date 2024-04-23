<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
</script>

<template>
  <AnnouncementBar v-if="$route.meta.showTopBars !== false" />
  <NavBar v-if="$route.meta.showTopBars !== false" />
  <RouterView />
</template>
