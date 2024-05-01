<script setup>
</script>

<template>
    <section
        class="py-6 max-w-screen-sm mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 md:max-w-screen-md xl:gap-x-8 xl:max-w-screen-lg">
        <article class="relative text-center">
            <div class="aspect-[570/470] overflow-hidden group mb-4">
                <img class="group-hover:scale-95 object-cover transition-all duration-300"
                    src="../assets/category-women.avif" alt="women model" v-once/>
            </div>
            <h3 class="uppercase font-extrabold text-[1.375rem] mb-2">{{$t('the_jeans_you_need')}}</h3>
            <p class="text-gray-600 text-[0.975rem] mb-4">{{$t('true_skinny_description')}}</p>
            <RouterLink to="/women"
                class="border border-black border-solid px-6 py-2 inline-block text-[0.925rem] uppercase font-bold hover:bg-black hover:text-white">
                {{$t('explore_women')}}</RouterLink>
        </article>
        <article class="relative text-center">
            <div class="aspect-[570/470] overflow-hidden group mb-4">
                <img class="group-hover:scale-95 object-cover transition-all duration-300"
                    src="../assets/category-men.avif" alt="men model" v-once/>
            </div>
            <h3 class="uppercase font-extrabold text-[1.375rem] mb-2">{{$t('find_perfect_looks')}}</h3>
            <p class="text-gray-600 text-[0.975rem] mb-4">{{$t('classic_is_back')}}</p>
            <RouterLink to="/men"
                class="border border-black border-solid px-6 py-2 inline-block text-[0.925rem] uppercase font-bold hover:bg-black hover:text-white">
                {{$t('explore_men')}}</RouterLink>
        </article>
    </section>
</template>
