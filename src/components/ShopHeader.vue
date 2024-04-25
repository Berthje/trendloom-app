<script setup>
const props = defineProps({
  title: String
});
</script>

<template>
    <div>
        <nav class="text-lg flex justify-center space-x-2">
            <RouterLink to="home" class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400">Home
            </RouterLink>
            <RouterLink to="home" class="[&:not(:last-child)]:after:content-['>'] hover:text-gray-400">Home</RouterLink>
        </nav>
        <h3 class="font-extrabold text-7xl uppercase">{{ title }}</h3>
    </div>
</template>