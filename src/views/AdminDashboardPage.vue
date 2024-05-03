<script>
import DashboardSidebar from '@/components/AdminDashboard/DashboardSidebar.vue'

export default {
    name: 'AdminDashboardPage',
    components: {
        DashboardSidebar,
    },
}
</script>

<template>
    <main class="flex">
        <DashboardSidebar />
        <div class="p-6 pl-12">
            <RouterView></RouterView>
        </div>
    </main>
</template>
