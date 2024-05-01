import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MenPage from "../views/MenPage.vue";
import WomenPage from "../views/WomenPage.vue";
import LoginPage from "../views/LoginPage.vue";
import KidsPage from "../views/KidsPage.vue";
import ShopPage from "../views/ShopPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import BrandDetailPage from "../views/BrandDetailPage.vue";
import BrandsOverviewPage from "../views/BrandsOverviewPage.vue";
import AccountOrders from "../views/AccountOrders.vue";
import AccountReturns from "../views/AccountReturns.vue";
import AccountFavorites from "../views/AccountFavorites.vue";
import AccountProfile from "../views/AccountProfile.vue";
import AccountPage from "../views/AccountPage.vue";
import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";

const authService = new AuthenticationService();

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LandingPage,
        },
        {
            path: "/men",
            name: "men",
            component: MenPage,
        },
        {
            path: "/women",
            name: "women",
            component: WomenPage,
        },
        {
            path: "/kids",
            name: "kids",
            component: KidsPage,
        },
        {
            path: "/shop",
            name: "shop",
            component: ShopPage,
        },
        {
            path: "/shop/product/:id",
            name: "product",
            component: ProductDetailPage,
        },
        {
            path: "/brands",
            name: "brands",
            component: BrandsOverviewPage,
        },
        {
            path: "/brands/:id",
            name: "brandDetail",
            component: BrandDetailPage,
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage,
            meta: { showTopAndBottombars: false },
        },
        {
            path: "/register",
            name: "register",
            component: RegisterPage,
            meta: { showTopAndBottombars: false },
        },
        {
            path: "/account",
            name: "account",
            component: AccountPage,
            meta: { requiresAuth: true },
            children: [
                {
                    path: "orders",
                    name: "orders",
                    component: AccountOrders,
                    meta: { requiresAuth: true },
                },
                {
                    path: "returns",
                    name: "returns",
                    component: AccountReturns,
                    meta: { requiresAuth: true },
                },
                {
                    path: "favorites",
                    name: "favorites",
                    component: AccountFavorites,
                    meta: { requiresAuth: true },
                },
                {
                    path: "profile",
                    name: "profile",
                    component: AccountProfile,
                    meta: { requiresAuth: true },
                },
                { path: "", redirect: "account/profile" },
            ],
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isLoggedIn = await authService.isLoggedIn();

    if (requiresAuth && !isLoggedIn) {
        next("/login");
    } else if (to.path === "/login" && isLoggedIn) {
        next("/account");
    } else {
        next();
    }
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
