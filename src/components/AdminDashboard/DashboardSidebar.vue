<script>
import { RouterLink } from 'vue-router';
import { PiFactory, PiBuildings } from "vue3-icons/pi";
import { TbCategory2, TbFileInvoice, TbDiscount, TbLogout } from "vue3-icons/tb";
import { HiOutlineHome } from "vue3-icons/hi";
import { AiOutlineCustomerService } from "vue3-icons/ai";

export default {
    name: 'DashboardSidebar',
    components: {
        RouterLink,
        PiFactory,
        TbFileInvoice,
        PiBuildings,
        TbCategory2,
        TbDiscount,
        HiOutlineHome,
        AiOutlineCustomerService,
        TbLogout,
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

<template>
    <aside class="w-72 h-screen flex flex-col justify-between text-black p-6">
        <div>
            <img src="../../assets/logo-black-dashboard.svg" class="mb-8 px-2" alt="Trendloom logo" v-once>
            <div class="flex flex-col space-y-1">
                <div>
                    <RouterLink to="/admin/products" @click="toggleContent('products')"
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                        active-class="bg-gray-100 rounded-md">
                        <div class="flex items-center">
                            <PiFactory class="h-6 w-6 inline-block mr-3" />
                            Products
                        </div>
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
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                        active-class="bg-gray-100 rounded-md">
                        <div class="flex items-center">
                            <TbCategory2 class="h-6 w-6 inline-block mr-3" />
                            Categories
                        </div>
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
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                        active-class="bg-gray-100 rounded-md">
                        <div class="flex items-center">
                            <PiBuildings class="h-6 w-6 inline-block mr-3" />
                            Brands
                        </div>
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
                        class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                        active-class="bg-gray-100 rounded-md">
                        <div class="flex items-center">
                            <TbDiscount class="h-6 w-6 inline-block mr-3" />
                            Coupons
                        </div>
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
                    class="flex w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                    active-class="bg-gray-100 rounded-md">
                    <TbFileInvoice class="h-6 w-6 inline-block mr-3"/>
                    Orders
                </RouterLink>
                <RouterLink to="/admin/customers"
                    class="flex w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
                    active-class="bg-gray-100 rounded-md">
                    <AiOutlineCustomerService class="h-6 w-6 inline-block mr-3"/>
                    Customers
                </RouterLink>
            </div>
        </div>
        <div>
            <RouterLink to="/"
                class="flex w-full py-2 px-4 text-left focus:outline-none hover:bg-gray-100 hover:rounded-md">
                <HiOutlineHome class="h-6 w-6 inline-block mr-3"/>
                Homepage
            </RouterLink>
            <RouterLink to="/logout"
                class="flex w-full py-2 px-4 text-left focus:outline-none hover:bg-gray-100 hover:rounded-md">
                <TbLogout class="h-6 w-6 inline-block mr-3"/>
                Logout
            </RouterLink>
        </div>
    </aside>
</template>