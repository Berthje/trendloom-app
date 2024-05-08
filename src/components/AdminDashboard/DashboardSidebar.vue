<script>
import { RouterLink } from 'vue-router';
import { PiFactory, PiBuildings } from "vue3-icons/pi";
import { TbCategory2, TbFileInvoice, TbDiscount, TbLogout } from "vue3-icons/tb";
import { HiOutlineHome } from "vue3-icons/hi";
import { AiOutlineCustomerService } from "vue3-icons/ai";
import SidebarItem from './SidebarItem.vue';

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
        SidebarItem,
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
    <aside
        class="w-72 h-screen flex flex-col justify-between text-black p-6 border-r border-gray-300 border-solid overflow-hidden">
        <div>
            <img src="../../assets/logo-black-dashboard.svg" class="mb-8 px-2" alt="Trendloom logo" v-once>
            <div class="flex flex-col space-y-1">
                <SidebarItem name="Products" iconName="PiFactory" link="/admin/products" :isOpen="contentOpen.products"
                    :toggle="() => toggleContent('products')" />
                <SidebarItem name="Categories" iconName="TbCategory2" link="/admin/categories"
                    :isOpen="contentOpen.categories" :toggle="() => toggleContent('categories')" />
                <SidebarItem name="Brands" iconName="PiBuildings" link="/admin/brands" :isOpen="contentOpen.brands"
                    :toggle="() => toggleContent('brands')" />
                <SidebarItem name="Coupons" iconName="TbDiscount" link="/admin/coupons" :isOpen="contentOpen.coupons"
                    :toggle="() => toggleContent('coupons')" />
                <SidebarItem name="Orders" iconName="TbFileInvoice" link="/admin/orders" :expandable="false" />
                <SidebarItem name="Customers" iconName="AiOutlineCustomerService" link="/admin/customers"
                    :expandable="false" />
            </div>
        </div>
        <div>
            <SidebarItem name="Homepage" iconName="HiOutlineHome" link="/" :expandable="false" />
            <SidebarItem name="Logout" iconName="TbLogout" link="/logout" :expandable="false" />
        </div>
    </aside>
</template>