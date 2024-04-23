import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingPage,
            meta: { hideNavbar: false },
        },
        {
            path: "/account",
            name: "account",
            component: LoginPage,
            meta: { hideNavbar: true },
        },
    ],
});

export default router;
