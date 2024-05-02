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
  emits: ['productAddedToCart'],
  computed: {
    showTopAndBottombars() {
      return this.$route.meta.showTopAndBottombars !== false;
    }
  },
  methods: {
    handleProductAddedToCart() {
      this.$refs.navbar.productAddedToCart();
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
  <NavBar ref="navbar" v-if="showTopAndBottombars" />
  <RouterView @productAddedToCart="handleProductAddedToCart" />
  <Footer v-if="showTopAndBottombars" />
</template>
