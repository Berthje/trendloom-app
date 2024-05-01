<script>
import { AiOutlineSearch, AiOutlineClose } from "vue3-icons/ai";
import { GoPerson } from "vue3-icons/go";
import { FaRegHeart } from "vue3-icons/fa";
import { IoLanguage } from "vue3-icons/io5";

export default {
    name: 'MobileMenu',
    components: {
        AiOutlineSearch,
        AiOutlineClose,
        GoPerson,
        FaRegHeart,
        IoLanguage
    },
    props: {
        show: Boolean,
        links: Array
    },
    emits: ['close', 'openLanguageModal'],
    methods: {
        close() {
            this.$emit('close');
        },
        openLanguageModal() {
            this.$emit('openLanguageModal');
            this.close();
        }
    }
}
</script>

<template>
    <transition name="slide">
        <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50 lg:hidden">
            <nav class="fixed top-0 h-full w-80 bg-white overflow-auto p-8 font-bold uppercase">
                <RouterLink to="/" class="block mb-6" @click="close">
                    <img src="../../assets/logo-black.svg" class="w-36 mx-auto" alt="Trendloom Logo" v-once>
                </RouterLink>
                <form action="#" class="relative mb-4">
                    <div
                        class="w-full overflow-hidden text-black flex items-center border border-solid border-gray-300">
                        <div class="w-full relative flex items-center">
                            <input type="text"
                                class="w-full h-auto min-h-10 pl-4 pr-6 leading-8 outline-none text-start"
                                :placeholder="$t('search_for_products')" autocomplete="off">
                        </div>
                        <div class="flex items-center">
                            <button class="inline-flex items-center justify-center whitespace-nowrap h-10 p-0 min-w-10"
                                type="submit" title="Search">
                                <AiOutlineSearch size="22" />
                            </button>
                        </div>
                    </div>
                </form>
                <div class="flex flex-col space-y-8">
                    <h2 class="text-center py-2 border-b-2 border-solid border-black">{{ $t('menu') }}</h2>
                    <ul class="flex flex-col space-y-4">
                        <li v-for="link in links" :key="link.path">
                            <RouterLink :to="link.path" active-class="active-route" @click="close">{{ link.name }}
                            </RouterLink>
                        </li>
                    </ul>
                    <ul class="uppercase flex flex-col space-y-4">
                        <li @click="close">
                            <RouterLink to="/login" class="flex items-center">
                                <GoPerson size="1.125rem" class="mr-2" />
                                {{ $t('account') }}
                            </RouterLink>
                        </li>
                        <li @click="close">
                            <RouterLink to="/wishlist" class="flex items-center">
                                <FaRegHeart size="1.125rem" class="mr-2" />
                                {{ $t('wishlist') }}
                            </RouterLink>
                        </li>
                        <li class="flex items-center cursor-pointer" @click="openLanguageModal">
                            <IoLanguage size="1.125rem" class="mr-2" />
                            {{ $t('language') }}
                        </li>
                    </ul>
                </div>
            </nav>
            <AiOutlineClose v-show="show"
                class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-3 top-3" @click="close" />
        </div>
    </transition>
</template>

<style scoped>
.slide-enter-from {
    @apply -translate-x-full;
}

.slide-enter-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-enter-to {
    @apply translate-x-0;
}

.slide-leave-from {
    @apply translate-x-0;
}

.slide-leave-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-leave-to {
    @apply -translate-x-full;
}
</style>
