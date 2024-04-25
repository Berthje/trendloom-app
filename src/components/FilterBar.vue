<script setup>
</script>

<template>
    <div>
        <form class="max-w-sm mx-auto">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                option</label>
            <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="default" selected>Default sorting</option>
                <option value="latest">Sort by latest</option>
                <option value="lth">Sort by price: low to high</option>
                <option value="htl">Sort by price: high to low</option>
            </select>
        </form>
    </div>
</template>
