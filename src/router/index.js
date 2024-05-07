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
import AccountOrdersPage from "../views/AccountOrdersPage.vue";
import AccountReturnsPage from "../views/AccountReturnsPage.vue";
import AccountFavorites from "../views/AccountFavoritesPage.vue";
import AccountProfilePage from "../views/AccountProfilePage.vue";
import AccountPage from "../views/AccountPage.vue";
import AdminDashboardPage from "../views/AdminDashboardPage.vue";
import AdminProductsPage from "../views/AdminProductsPage.vue";
import AdminCategoriesPage from "../views/AdminCategoriesPage.vue";
import AdminBrandsPage from "../views/AdminBrandsPage.vue";
import AdminCouponsPage from "../views/AdminCouponsPage.vue";
import AdminOrdersPage from "../views/AdminOrdersPage.vue";
import AdminCustomersPage from "../views/AdminCustomersPage.vue";
import AdminProductAddPage from "../views/AdminProductAddPage.vue";
import AdminCategoryAddPage from "../views/AdminCategoryAddPage.vue";
import AdminBrandAddPage from "../views/AdminBrandAddPage.vue";

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
            alias: "/mannen",
            name: "men",
            component: MenPage,
        },
        {
            path: "/women",
            alias: "/vrouwen",
            name: "women",
            component: WomenPage,
        },
        {
            path: "/kids",
            alias: "/kinderen",
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
                    component: AccountOrdersPage,
                    meta: { requiresAuth: true },
                },
                {
                    path: "returns",
                    name: "returns",
                    component: AccountReturnsPage,
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
                    component: AccountProfilePage,
                    meta: { requiresAuth: true },
                },
                {
                    path: "",
                    redirect: "/account/profile",
                    name: "account",
                },
            ],
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminDashboardPage,
            meta: { requiresAuth: true, requiresAdmin: true, showTopAndBottombars: false },
            children: [
                {
                    path: "products",
                    name: "adminProducts",
                    component: AdminProductsPage,
                },
                {
                    path: "products/add",
                    name: "adminAddProduct",
                    component: AdminProductAddPage,
                },
                {
                    path: "categories",
                    name: "adminCategories",
                    component: AdminCategoriesPage,
                },
                {
                    path: "categories/add",
                    name: "adminAddCategory",
                    component: AdminCategoryAddPage,
                },
                {
                    path: "coupons",
                    name: "adminCoupons",
                    component: AdminCouponsPage,
                },
                {
                    path: "brands",
                    name: "adminBrands",
                    component: AdminBrandsPage,
                },
                {
                    path: "brands/add",
                    name: "adminAddBrand",
                    component: AdminBrandAddPage,
                },
                {
                    path: "orders",
                    name: "adminOrders",
                    component: AdminOrdersPage,
                },
                {
                    path: "customers",
                    name: "adminCustomers",
                    component: AdminCustomersPage,
                },
                {
                    path: "",
                    redirect: "/admin/products",
                    name: "admin",
                },
            ],
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const requiresAdmin = to.matched.some(
        (record) => record.meta.requiresAdmin
    );
    const isLoggedIn = await authService.isLoggedIn();
    const { data: user } = isLoggedIn ? await authService.getProfile() : {};

    if (requiresAuth && !isLoggedIn) {
        next("/login");
    } else if (to.path === "/login" && isLoggedIn) {
        next("/account");
    } else if (requiresAdmin && !user?.is_admin) {
        console.log(user);
        next("/");
    } else {
        next();
    }
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
