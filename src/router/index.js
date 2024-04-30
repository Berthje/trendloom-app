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
            component: AccountPage,
            children: [
                { path: "orders", component: AccountOrders },
                { path: "returns", component: AccountReturns },
                { path: "favorites", component: AccountFavorites },
                { path: "profile", component: AccountProfile },
            ],
        },
    ],
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
