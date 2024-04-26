<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    AnnouncementBar,
    NavBar,
    RouterView,
    Footer
  },
  computed: {
    showTopAndBottombars() {
      return this.$route.meta.showTopAndBottombars !== false;
    }
  }
}
</script>

<template>
  <AnnouncementBar v-if="showTopAndBottombars" />
  <NavBar v-if="showTopAndBottombars" />
  <RouterView />
  <Footer v-if="showTopAndBottombars" />
</template>
