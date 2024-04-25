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
                <ul class="flex space-x-1 mt-2">
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
                <h2>Belted Jackets</h2>
                <RouterLink to="/brands/$BrandName"></RouterLink>
                <h3>$155.50</h3>
                <div>
                    <div>
                        <div class="relative flex items-center max-w-[8rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                                class="hover:bg-gray-200 border border-gray-300 p-1 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg class="w-2 h-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter
                                aria-describedby="helper-text-explanation"
                                class="border-x-0 border-y border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-10 py-2.5"
                                placeholder="999" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                            class="hover:bg-gray-200 border border-gray-300 p-1 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg class="w-2 h-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
