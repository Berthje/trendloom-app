import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingPage,
            meta: { showNavbar: true },
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage,
            meta: { showNavbar: false },
        },
        {
            path: "/register",
            name: "register",
            component: RegisterPage,
            meta: { showNavbar: false },
        },
    ],
});

export default router;
