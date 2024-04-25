<script setup>
import ShopHeader from '@/components/ShopHeader.vue';
</script>

<template>
    <main>
        <section
            class="relative bg-category-men-header-image bg-cover bg-center w-full h-60 md:h-80 lg:h-96 text-white font-bold flex justify-center items-center text-center">
            <div class="rotate-180 overflow-hidden left-0 bottom-0 w-full absolute">
                <svg class="h-14 w-full" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                    preserveAspectRatio="none">
                    <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                </svg>
            </div>
            <ShopHeader title="Shop for men"/>
        </section>
    </main>
</template>