<script>
import AuthenticationService from '@/modules/Authentication/Services/AuthenticationService';

export default {
    name: 'AccountPage',
    data() {
        return {
            service: new AuthenticationService(),
            isAdmin: false,
        }
    },
    async created() {
        this.checkIfAdmin();
    },
    methods: {
        async logout() {
            const response = await this.service.logout();

            if (response.status) {
                this.$router.push({ name: 'home' });
            }
        },
        async checkIfAdmin() {
            const response = await this.service.isAdmin();
            this.isAdmin = response;
        }
    }
}
</script>

<template>
    <main class="flex w-full max-w-screen-xl mx-auto px-4 space-x-8 md:space-x-12 md:mt-4 lg:space-x-20 lg:mt-6">
        <div class="flex flex-col space-y-2">
            <RouterLink to="/account/profile" class="block px-2 py-1" active-class="underline font-bold">
                {{ $t('profile') }}
            </RouterLink>
            <RouterLink to="/account/orders" class="block px-2 py-1" active-class="underline font-bold">{{ $t('orders')
                }}
            </RouterLink>
            <RouterLink to="/account/returns" class="block px-2 py-1" active-class="underline font-bold">{{
                $t('returns') }}
            </RouterLink>
            <RouterLink to="/account/favorites" class="block px-2 py-1" active-class="underline font-bold">{{
                $t('favorites') }}
            </RouterLink>
            <RouterLink v-if="isAdmin" to="/admin" class="block px-2 py-1" active-class="underline font-bold">Admin</RouterLink>
            <button class="block px-2 py-1 text-left" @click="logout">{{ $t('logout') }}</button>
        </div>
        <div class="flex-grow">
            <RouterView></RouterView>
        </div>
    </main>
</template>
