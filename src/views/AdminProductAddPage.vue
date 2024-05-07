<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import InputField from '../components/InputField.vue';

export default {
    name: 'AdminProductAddPage',
    components: {
        PageHeader,
        InputField,
    },
}
</script>

<template>
    <main>
        <PageHeader title="Add product" titleSingular="product" cancelRoute="/admin/products" :showSearchField="false"
            :showAmountField="false" :showCancelButton="true" />
        <section class="flex justify-between space-x-24 mt-7">
            <div class="flex-grow flex flex-col space-y-6">
                <section>
                    <div class="flex items-center space-x-4 mb-2">
                        <h2 class="font-bold text-2xl">General information</h2>
                        <ul class="flex space-x-2">
                            <li class="font-bold underline">EN</li>
                            <li>NL</li>
                        </ul>
                    </div>
                    <div class="flex space-x-12 mb-4">
                        <div class="w-full">
                            <InputField id="product_name" label="Product Name" placeholder="Type product name here..."
                                errorMessage="Product name must be filled in." status="default" type="text" />
                        </div>
                        <div class="flex flex-col w-1/3">
                            <label for="selectedBrand" class="text-sm font-bold mb-1">Brand</label>
                            <select name="selectedBrand" id="selectedBrand" class="py-3 px-2 bg-gray-100">
                                <option value="nike">Nike</option>
                                <option value="nike">Adidas</option>
                                <option value="nike">Only</option>
                                <option value="nike">Nike</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="selectedBrand" class="text-sm font-bold mb-1">Description</label>
                        <textarea class="border border-solid border-black rounded-md p-2" name="product_description" id="product_description" rows="6" placeholder="Type product description here..."></textarea>
                    </div>
                </section>
                <section>
                    <h2 class="font-bold text-2xl">Media</h2>
                </section>
            </div>
            <div class="w-[20rem] bg-red-400 flex flex-col space-y-4">
                <div>yug</div>
            </div>
        </section>
    </main>
</template>
