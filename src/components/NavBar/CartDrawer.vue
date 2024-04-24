<script setup>

const props = defineProps({
    show: Boolean,
    links: Array,
});

const emits = defineEmits(['close']);

const close = () => {
    emits('close');
};
</script>

<template>
    <transition name="slide">
        <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50 lg:hidden">
            <nav class="fixed top-0 h-full w-80 bg-white overflow-auto p-8 font-bold uppercase">
                <RouterLink to="/" class="block mb-6">
                    <img src="../../assets/logo-black.svg" class="w-36 mx-auto" alt="Trendloom Logo">
                </RouterLink>
                <form action="#" class="relative mb-4">
                    <div
                        class="w-full overflow-hidden text-black flex items-center border border-solid border-gray-300">
                        <div class="w-full relative flex items-center">
                            <input type="text"
                                class="w-full h-auto min-h-10 pl-4 pr-6 leading-8 outline-none text-start"
                                placeholder="Search for products..." autocomplete="off">
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
                    <h2 class="text-center py-2 border-b-2 border-solid border-black">Menu</h2>
                    <ul class="flex flex-col space-y-4">
                        <li v-for="link in links" :key="link.path">
                            <RouterLink :to="link.path" active-class="active-route">{{ link.name }}</RouterLink>
                        </li>
                    </ul>
                    <ul class="uppercase flex flex-col space-y-4">
                        <li>
                            <RouterLink to="/login" class="flex items-center">
                                <GoPerson size="1.125rem" class="mr-2" />
                                Account
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/wishlist" class="flex items-center">
                                <FaRegHeart size="1.125rem" class="mr-2" />
                                Wishlist
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/language" class="flex items-center">
                                <IoLanguage size="1.125rem" class="mr-2" />
                                English
                            </RouterLink>
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