<script>
export default {
    name: 'DashboardHeader',
}
</script>

<template>
    <header class="flex items-center justify-between mb-6 border-b border-gray-300 border-solid">
        <div class="flex items-center space-x-4">
            <div class="text-gray-500">1/32</div>
            <div class="flex space-x-2">
                <button class="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button class="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <RouterLink class="font-medium hover:opacity-70" to="/account/profile">Layton Berth</RouterLink>
    </header>
</template>