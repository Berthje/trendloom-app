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
        <div class="flex-grow py-8 px-12">
            <RouterView></RouterView>
        </div>
    </main>
</template>
