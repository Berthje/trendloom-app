<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import InputField from '../components/InputField.vue';
import AdminBrandsPageService from '@/modules/AdminBrandsPage/Services/AdminBrandsPageService';

export default {
    name: 'AdminBrandEditPage',
    components: {
        PageHeader,
        InputField
    },
    data() {
        return {
            service: new AdminBrandsPageService(),
            languages: ['en', 'nl'],
            brand: {}
        }
    },
    created() {
        this.fetchBrand();
    },
    methods: {
        async fetchBrand() {
            const id = this.$route.params.id;
            const data = await this.service.getBrand(id, this.languages);

            this.languages.forEach(lang => {
                this.brand[lang] = {
                    brand_name: data[lang].name,
                    brand_description: data[lang].description,
                };
            });

            this.brand.brand_logo_url = data['en'].logo_url;
        },
        async saveBrand(brand) {
            const response = await this.service.saveBrand(brand);
            if (response.status === 200) {
                this.$router.push({ name: 'adminBrands' });
            }
        }
    }
}
</script>

<template>
    <main>
        <PageHeader title="Add brand" titleSingular="brand" cancelRoute="/admin/categories" :showSearchField="false"
            :showAmountField="false" :showCancelButton="true" :showAddButton="false" />
        <form @submit.prevent="addBrand">
            <section class="mt-7 mb-8" v-for="lang in languages" :key="lang">
                <h2 class="font-bold text-2xl mb-2">General information ({{ lang.toUpperCase() }})</h2>
                <div class="flex space-x-8">
                    <InputField id="brand_name" label="Name" placeholder="Type brand name here..."
                        errorMessage="Brand name must be filled in." status="default" type="text" class="w-1/3"
                        v-model="brand[lang].brand_name" />
                    <InputField id="brand_logo_url" label="Logo URL" placeholder="Type logo URL description here..."
                        errorMessage="Brand logo url must be filled in." status="default" type="text" class="w-1/3"
                        v-model="brand.brand_logo_url" />
                    <InputField id="brand_description" label="Description" placeholder="Type brand description here..."
                        errorMessage="Brand description must be filled in." status="default" type="text" class="w-full"
                        v-model="brand[lang].brand_description" />
                </div>
            </section>
            <button type="submit"
                class="mt-6 flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white font-medium transition-colors duration-200 bg-orange-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-orange-500">Save
                changes</button>
        </form>
    </main>
</template>
