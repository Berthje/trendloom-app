<script>
import DashboardSidebar from '@/components/AdminDashboard/DashboardSidebar.vue'
import DashboardHeader from '@/components/AdminDashboard/DashboardHeader.vue'

export default {
    name: 'AdminDashboardPage',
    components: {
        DashboardSidebar,
        DashboardHeader,
    },
}
</script>

<template>
    <main class="flex">
        <DashboardSidebar />
        <div class="flex-grow">
            <DashboardHeader class="py-4 px-12" />
            <RouterView class="py-4 px-12"></RouterView>
        </div>
    </main>
</template>
