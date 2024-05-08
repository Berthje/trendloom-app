<script>
import { RouterLink } from "vue-router";
import { PiFactory, PiBuildings } from "vue3-icons/pi";
import { TbCategory2, TbFileInvoice, TbDiscount, TbLogout } from "vue3-icons/tb";
import { HiOutlineHome } from "vue3-icons/hi";
import { AiOutlineCustomerService } from "vue3-icons/ai";

export default {
    name: 'SidebarItem',
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
    props: {
        name: String,
        iconName: String,
        link: String,
        isOpen: Boolean,
        toggle: Function,
        expandable: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        iconComponent() {
            return this.$options.components[this.iconName];
        },
    },
};
</script>

<template>
    <div>
        <RouterLink :to="link" @click="toggle"
            class="flex justify-between w-full py-3 px-4 text-left mt-2 focus:outline-none hover:bg-gray-100 hover:rounded-md"
            active-class="bg-gray-100 rounded-md">
            <div class="flex items-center">
                <component :is="iconComponent" class="h-6 w-6 inline-block mr-3" />
                {{ name }}
            </div>
            <div v-if="expandable">
                <svg v-if="!isOpen" class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                    <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"></path>
                </svg>
                <svg v-else class="h-4 w-4 inline-block align-middle ml-1" viewBox="0 0 24 24">
                    <path d="M12 8.5l6 6-1.41 1.41L12 11.33l-4.59 4.58L6 14.5l6-6z"></path>
                </svg>
            </div>
        </RouterLink>
        <div v-if="isOpen" class="">
            <RouterLink :to="link + '/add'" class="block py-2 px-4 pl-6 hover:font-bold">Add {{ name.toLowerCase() }}
            </RouterLink>
        </div>
    </div>
</template>