<script setup>
</script>

<template>
    <section class="text-center py-6">
        <h3 class="text-2xl font-medium uppercase custom-underline mb-4">Most popular categories</h3>
        <p class="text-sm text-gray-600">Explore our most popular categories filled with top-rated products chosen by our customers.</p>
        <div class="flex flex-wrap">
            <div class="w-1/2 lg:w-1/4 text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="w-1/2 lg:w-1/4 text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="w-1/2 lg:w-1/4 text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="w-1/2 lg:w-1/4 text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-underline {
    @apply after:block after:w-12 after:h-0.5 after:bg-black after:mx-auto;
}
</style>
