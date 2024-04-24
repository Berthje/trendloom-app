<script setup>
import { AiOutlineShopping, AiOutlineClose } from "vue3-icons/ai";


const props = defineProps({
    show: Boolean,
});

const emits = defineEmits(['close']);

const close = () => {
    emits('close');
};
</script>

<template>
    <transition name="slide">
        <div v-show="show" class="fixed top-0 h-full w-full overflow-auto z-50">
            <nav class="fixed top-0 right-0 h-full w-80 bg-white overflow-auto p-8">
                <RouterLink to="/shopping-cart" class="block mb-6">
                    <AiOutlineShopping size="36"/>
                    <h2>Menu</h2>
                </RouterLink>
                <p>No products in the cart.</p>
                <RouterLink to="/shop" class="">Return to shop</RouterLink>
            </nav>
            <AiOutlineClose v-show="show" class="h-8 w-8 bg-white rounded-full p-2 cursor-pointer z-50 absolute right-[22rem] top-3" @click="close" />
        </div>
    </transition>
</template>

<style scoped>
.slide-enter-from {
    @apply translate-x-full;
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
    @apply translate-x-full;
}
</style>