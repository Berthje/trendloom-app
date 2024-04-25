<script setup>
</script>

<template>
    <div>
        <form class="w-full flex justify-between">
            <select id="sorting" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="default" selected>Default sorting</option>
                <option value="latest">Sort by latest</option>
                <option value="lth">Sort by price: low to high</option>
                <option value="htl">Sort by price: high to low</option>
            </select>
            <select id="productCount" class="bg-gray-50 border border-gray-300 text-gray-400 text-sm focus:ring-gray-800 focus:border-gray-800 p-2.5 cursor-pointer">
                <option value="12" selected>12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="all">All</option>
            </select>
        </form>
    </div>
</template>
