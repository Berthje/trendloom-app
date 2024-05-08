<script>
export default {
    name: 'ShopHeader',
    props: {
        title: String,
        description: String,
        links: Array
    }
}
</script>
<template>
    <section
        class="relative bg-category-men-header-image bg-cover bg-center w-full h-60 md:h-80 lg:h-96 text-white font-bold flex justify-center items-center text-center">
        <div class="rotate-180 overflow-hidden left-0 bottom-0 w-full absolute">
            <svg class="h-8 md:h-12 lg:h-14 w-full" fill="white" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
            </svg>
        </div>
        <div>
            <nav class="text-lg flex justify-center space-x-2">
                <RouterLink v-for="(link, index) in links" :key="index" :to="link.path"
                    class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400 capitalize">{{ $t(link.name.toLowerCase()) }}&nbsp;
                </RouterLink>
            </nav>
            <h3 class="font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase">{{ title }}</h3>
            <p v-if="description" class="max-w-screen-md px-8">{{ description }}</p>
        </div>
    </section>
</template>
