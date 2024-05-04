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
        <div class="p-6 pl-12 flex-grow">
            <DashboardHeader />
            <RouterView></RouterView>
        </div>
    </main>
</template>
