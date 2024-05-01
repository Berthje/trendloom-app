<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar/NavBar.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import Footer from './components/Footer/Footer.vue'
import LanguageService from './modules/LanguageModal/Services/LanguageService'

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
  },
  data() {
    return {
      service: new LanguageService()
    }
  },
  async created() {
    const data = await this.service.getTranslations();
    
    for (const language in data) {
      const languageTranslation = data[language];
      this.$i18n.setLocaleMessage(language, languageTranslation);
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
