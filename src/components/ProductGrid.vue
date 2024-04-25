<script setup>
</script>

<template>
    <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 pb-16">
        <div class="flex flex-col space-y-2">
            <div>
                <img src="../assets/category-women.avif" alt="product title">
            </div>
            <div>
                <ul class="flex space-x-1">
                    <li class="w-5 h-5 rounded-full relative border border-gray-300 border-solid">
                        <span
                            class="bg-red-300 top-[2px] bottom-[2px] left-[2px] right-[2px] absolute rounded-full"></span>
                    </li>
                    <li class="w-5 h-5 rounded-full relative border border-gray-300 border-solid">
                        <span
                            class="bg-gray-400 top-[2px] bottom-[2px] left-[2px] right-[2px] absolute rounded-full"></span>
                    </li>
                    <li class="w-5 h-5 rounded-full relative border border-gray-300 border-solid">
                        <span
                            class="bg-black top-[2px] bottom-[2px] left-[2px] right-[2px] absolute rounded-full"></span>
                    </li>
                </ul>
                <ul class="flex space-x-1 my-2">
                    <li
                        class="w-5 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                        XS
                    </li>
                    <li
                        class="w-5 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                        S
                    </li>
                    <li
                        class="w-5 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                        M
                    </li>
                    <li
                        class="w-5 h-5 relative border border-gray-300 border-solid flex items-center justify-center text-gray-500 text-xs">
                        L
                    </li>
                </ul>
                <h2 class="font-bold text-lg">Belted Jackets</h2>
                <div class="text-gray-500 mb-2">
                    <RouterLink to="/brands/$BrandName" class="hover:underline hover:text-gray-800 hover:font-medium">
                        <h3>G-Star</h3>
                    </RouterLink>
                    <h4>€79.99</h4>
                </div>
            </div>
        </div>
    </section>
</template>
