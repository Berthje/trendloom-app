import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MenPage from "../views/Men/MenPage.vue";
import WomenPage from "../views/Women/WomenPage.vue";
import LoginPage from "../views/Authentication/LoginPage.vue";
import KidsPage from "../views/Kids/KidsPage.vue";
import ShopPage from "../views/ShopPage.vue";
import RegisterPage from "../views/Authentication/RegisterPage.vue";
import ProductDetailPage from "../views/Product/ProductDetailPage.vue";
import BrandDetailPage from "../views/Brand/BrandDetailPage.vue";
import BrandsOverviewPage from "../views/Brand/BrandsOverviewPage.vue";
import AccountOrdersPage from "../views/Account/AccountOrdersPage.vue";
import AccountReturnsPage from "../views/Account/AccountReturnsPage.vue";
import AccountFavorites from "../views/Account/AccountFavoritesPage.vue";
import AccountProfilePage from "../views/Account/AccountProfilePage.vue";
import AccountPage from "../views/Account/AccountPage.vue";
import AdminDashboardPage from "../views/AdminDashboard/AdminDashboardPage.vue";
import AdminProductsPage from "../views/AdminDashboard/Product/AdminProductsPage.vue";
import AdminCategoriesPage from "../views/AdminDashboard/Category/AdminCategoriesPage.vue";
import AdminBrandsPage from "../views/AdminDashboard/Brand/AdminBrandsPage.vue";
import AdminCouponsPage from "../views/AdminDashboard/Coupon/AdminCouponsPage.vue";
import AdminOrdersPage from "../views/AdminDashboard/Order/AdminOrdersPage.vue";
import AdminCustomersPage from "../views/AdminDashboard/Customer/AdminCustomersPage.vue";
import AdminProductAddPage from "../views/AdminDashboard/Product/AdminProductAddPage.vue";
import AdminCategoryAddPage from "../views/AdminDashboard/Category/AdminCategoryAddPage.vue";
import AdminBrandAddPage from "../views/AdminDashboard/Brand/AdminBrandAddPage.vue";
import AdminCategoryEditPage from "../views/AdminDashboard/Category/AdminCategoryEditPage.vue";
import AdminBrandEditPage from "../views/AdminDashboard/Brand/AdminBrandEditPage.vue";

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
                    path: "categories/:id/edit",
                    name: "adminEditCategory",
                    component: AdminCategoryEditPage,
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
                    path: "brands/:id/edit",
                    name: "adminEditBrand",
                    component: AdminBrandEditPage,
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
