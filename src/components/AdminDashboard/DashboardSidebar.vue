<template>
    <aside class="w-72 h-screen flex flex-col justify-between bg-gray-100 text-black p-6">
        <div>
            <img src="../../assets/logo-black-dashboard.svg" class="mb-8 px-2" alt="Trendloom logo" v-once>
            <div class="flex flex-col space-y-1">
                <div>
                    <RouterLink to="/admin/products" @click="toggleContent('products')"
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                        active-class="bg-gray-300 rounded-md">
                        Products
                        <div>
                            <svg v-if="!contentOpen.products" class="h-4 w-4 inline-block align-middle ml-1"
                                viewBox="0 0 24 24">
                                <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"></path>
                            </svg>
                            <svg v-else class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                                <path d="M12 8.5l6 6-1.41 1.41L12 11.33l-4.59 4.58L6 14.5l6-6z"></path>
                            </svg>
                        </div>
                    </RouterLink>
                    <div v-if="contentOpen.products" class="">
                        <RouterLink to="" class="block py-2 px-4 pl-6 hover:font-bold">Add product</RouterLink>
                    </div>
                </div>
                <div>
                    <RouterLink to="/admin/categories" @click="toggleContent('categories')"
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                        active-class="bg-gray-300 rounded-md">
                        Categories
                        <div>
                            <svg v-if="!contentOpen.categories" class="h-4 w-4 inline-block align-middle ml-1"
                                viewBox="0 0 24 24">
                                <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"></path>
                            </svg>
                            <svg v-else class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                                <path d="M12 8.5l6 6-1.41 1.41L12 11.33l-4.59 4.58L6 14.5l6-6z"></path>
                            </svg>
                        </div>
                    </RouterLink>
                    <div v-if="contentOpen.categories" class="">
                        <RouterLink to="" class="block py-2 px-4 pl-6 hover:font-bold">Add category</RouterLink>
                    </div>
                </div>
                <div>
                    <RouterLink to="/admin/brands" @click="toggleContent('brands')"
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                        active-class="bg-gray-300 rounded-md">
                        Brands
                        <div>
                            <svg v-if="!contentOpen.brands" class="h-4 w-4 inline-block align-middle ml-1"
                                viewBox="0 0 24 24">
                                <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"></path>
                            </svg>
                            <svg v-else class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                                <path d="M12 8.5l6 6-1.41 1.41L12 11.33l-4.59 4.58L6 14.5l6-6z"></path>
                            </svg>
                        </div>
                    </RouterLink>
                    <div v-if="contentOpen.brands" class="">
                        <RouterLink to="" class="block py-2 px-4 pl-6 hover:font-bold">Add brand</RouterLink>
                    </div>
                </div>
                <div>
                    <RouterLink to="/admin/coupons" @click="toggleContent('coupons')"
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                        active-class="bg-gray-300 rounded-md">
                        Coupons
                        <div>
                            <svg v-if="!contentOpen.coupons" class="h-4 w-4 inline-block align-middle ml-1"
                                viewBox="0 0 24 24">
                                <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"></path>
                            </svg>
                            <svg v-else class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                                <path d="M12 8.5l6 6-1.41 1.41L12 11.33l-4.59 4.58L6 14.5l6-6z"></path>
                            </svg>
                        </div>
                    </RouterLink>
                    <div v-if="contentOpen.coupons" class="">
                        <RouterLink to="" class="block py-2 px-4 pl-6 hover:font-bold">Add coupon</RouterLink>
                    </div>
                </div>
                <RouterLink to="/admin/orders"
                    class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                    active-class="bg-gray-300 rounded-md">Orders</RouterLink>
                <RouterLink to="/admin/customers"
                    class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-300"
                    active-class="bg-gray-300 rounded-md">Customers</RouterLink>
            </div>
        </div>
        <div>
            <RouterLink to="/"
                class="block justify-between w-full py-2 px-4 text-left focus:outline-none hover:bg-gray-300 hover:rounded-md">
                Homepage
            </RouterLink>
            <RouterLink to="/logout"
                class="block justify-between w-full py-2 px-4 text-left focus:outline-none hover:bg-gray-300 hover:rounded-md">
                Logout
            </RouterLink>
        </div>
    </aside>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'DashboardSidebar',
    components: {
        RouterLink,
    },
    data() {
        return {
            contentOpen: {
                products: false,
                categories: false,
                brands: false,
                coupons: false,
            },
        };
    },
    methods: {
        toggleContent(category) {
            const isOpen = this.contentOpen[category];

            for (let key in this.contentOpen) {
                this.contentOpen[key] = false;
            }

            if (!isOpen) {
                this.contentOpen[category] = true;
            }
        },
    },
};
</script>