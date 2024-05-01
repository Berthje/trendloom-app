<script setup>
</script>

<template>
    <section class="bg-cover bg-center bg-hero-image flex flex-col justify-center text-white min-h-[28rem] lg:min-h-[38rem] p-6 lg:p-16 relative">
        <div class="font-bold">
            <h2 class="text-xl md:text-2xl mb-1">Explore Styles ready for Summer Day</h2>
            <h3 class="text-5xl md:text-7xl lg:text-8xl uppercase font-extrabold mb-4">Summer’s Wanted</h3>
            <RouterLink to="/shop" class="uppercase inline-block px-10 py-3 bg-black hover:bg-white hover:text-black transition ease-in-out duration-300">Shop now</RouterLink>
        </div>
        <div class="hidden lg:block rotate-180 overflow-hidden left-0 w-full absolute -bottom-[1px]">
            <svg class="h-14 w-full" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
        </div>
    </section>
</template>
