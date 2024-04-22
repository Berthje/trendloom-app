<script setup>
import { ref, watchEffect } from 'vue';
import { AiOutlineSearch, AiOutlineClose } from "vue3-icons/ai";

const props = defineProps({
    show: Boolean,
});

const emits = defineEmits(['update:modelValue', 'close']);

let searchQuery = ref('');

const close = () => {
    emits('close');
};

watchEffect(() => {
    emits('update:modelValue', searchQuery.value);
});
</script>

<template>
    <transition name="slide-down">
        <div v-show="show" class="hidden fixed top-0 bg-white w-full py-6 overflow-auto z-50 text-center lg:block">
            <h3 class="mb-4 font-bold text-2xl capitalize">What Are You Looking For?</h3>
            <form action="#" class="inline-block w-[40rem] relative mb-4">
                <div class="w-full overflow-hidden text-black flex items-center border border-solid border-gray-300">
                    <div class="w-full relative flex items-center">
                        <input v-model="searchQuery" type="text"
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
            <div class="flex justify-center items-center space-x-4">
                <h4 class="text-lg uppercase text-gray-500 text-[0.875rem]">Popular Searches: </h4>
                <ul class="flex justify-center space-x-2 text-[0.925rem]">
                    <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all"
                        @click="searchQuery = 'Jeans'">Jeans</li>
                    <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all"
                        @click="searchQuery = 'T-shirts'">T-shirts</li>
                    <li class="bg-gray-200 px-2 cursor-pointer hover:bg-black hover:text-white transition-all"
                        @click="searchQuery = 'Shoes'">Shoes</li>
                </ul>
            </div>
            <AiOutlineClose v-show="show" class="h-6 w-6 cursor-pointer z-50 absolute right-3 top-3" @click="close" />
        </div>
    </transition>
</template>

<style scoped>
.slide-down-enter-from {
    @apply -translate-y-full;
}

.slide-down-enter-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-down-enter-to {
    @apply translate-y-0;
}

.slide-down-leave-from {
    @apply translate-y-0;
}

.slide-down-leave-active {
    @apply transition-transform duration-300 ease-in-out;
}

.slide-down-leave-to {
    @apply -translate-y-full;
}
</style>