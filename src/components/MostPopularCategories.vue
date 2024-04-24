<script setup>
</script>

<template>
    <section class="text-center py-6 lg:max-w-screen-xl mx-auto">
        <h3 class="text-2xl font-medium uppercase custom-underline mb-4">Most popular categories</h3>
        <p class="text-sm text-gray-600 mb-6">Explore our most popular categories filled with top-rated products chosen by our customers.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
            <div class="text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="text-center">
                <img src="../assets/category-women.avif" class="inline-block w-full aspect-square object-cover" alt="">
                <h4>Fashion</h4>
                <p>8 products</p>
            </div>
            <div class="text-center">
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
