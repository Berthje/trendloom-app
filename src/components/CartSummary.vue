<script setup>
import { defineProps } from 'vue';
import { AiOutlineShopping } from "vue3-icons/ai";

const props = defineProps({
    cartItemCount: Number,
    cartTotal: Number,
});
</script>

<template>
    <div class="flex items-center lg:border-l-[1px] lg:border-gray-400 lg:border-solid lg:pl-4 lg:ml-4">
        <div class="relative inline-flex mr-2">
            <AiOutlineShopping size="28" />
            <span
                class="bg-black text-white text-[0.70rem] w-4 h-4 leading-6 rounded-full inline-flex items-center justify-center font-bold absolute left-[20px]">
                {{ cartItemCount }}
            </span>
        </div>
        <p class="hidden lg:block ml-2 text-[0.875rem] font-bold">CART €{{ cartTotal }}</p>
    </div>
</template>