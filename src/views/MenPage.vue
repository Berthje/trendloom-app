<script setup>
</script>

<template>
    <main>
        <section
            class="relative bg-category-men-header-image bg-cover bg-center w-full h-56 text-white font-bold flex justify-center items-center text-center">
            <div class="rotate-180 overflow-hidden left-0 bottom-0 w-full absolute">
                <svg class="h-14 w-full" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
                    preserveAspectRatio="none">
                    <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
                </svg>
            </div>
            <div>
                <nav class="text-lg flex justify-center space-x-2">
                    <RouterLink to="home" class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400">Home </RouterLink>
                    <RouterLink to="home" class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400">Home</RouterLink>
                </nav>
                <h3 class="font-extrabold text-7xl uppercase">Shop</h3>
            </div>
        </section>
    </main>
</template>