<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <AnnouncementBar v-if="$route.meta.showTopAndBottombars !== false" />
  <NavBar v-if="$route.meta.showTopAndBottombars !== false" />
  <RouterView />
  <Footer v-if="$route.meta.showTopAndBottombars !== false" />
</template>
