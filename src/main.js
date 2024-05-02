import "./assets/reset.css";
import "./assets/main.css";

import { createApp } from "vue";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
    locale: localStorage.getItem("preferredLanguage") || "en",
    fallbackLocale: "nl",
    silentTranslationWarn: true,
});

const app = createApp(App);

app.use(i18n)
app.use(ToastPlugin);
app.use(router);

app.mount("#app");