<script>
import PageHeader from '@/components/AdminDashboard/PageHeader.vue';
import InputField from '../../../components/InputField.vue';

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
            :showAmountField="false" :showCancelButton="true" :showAddButton="false" />
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
                            <select name="selectedBrand" id="selectedBrand" class="py-3 px-2 border border-solid border-black rounded-md">
                                <option value="nike">Nike</option>
                                <option value="nike">Adidas</option>
                                <option value="nike">Only</option>
                                <option value="nike">Jack & Jones</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="selectedBrand" class="text-sm font-bold mb-1">Description</label>
                        <textarea class="border border-solid border-black rounded-md p-2" name="product_description" id="product_description" rows="5" placeholder="Type product description here..."></textarea>
                    </div>
                </section>
                <section>
                    <h2 class="font-bold text-2xl">Media</h2>
                    <div class="border border-dashed border-gray-400 rounded-md text-center p-10">
                        <h3 class="mb-4">Drag and drop images here, or click to add images.</h3>
                        <button class="bg-black text-white px-2 py-1">Add images</button>
                    </div>
                </section>
                <section>
                    <div class="flex items-center space-x-4 mb-2">
                        <h2 class="font-bold text-2xl">Pricing</h2>
                    </div>
                    <div class="flex space-x-12 mb-4">
                        <div class="w-full">
                            <InputField id="product_price" label="Base Price" placeholder="€ Type base price here..."
                                errorMessage="Product name must be filled in." status="default" type="number" />
                        </div>
                        <div class="flex flex-col w-1/3">
                            <label for="selectedBrand" class="text-sm font-bold mb-1">Discount Coupon</label>
                            <select name="selectedBrand" id="selectedBrand" class="py-3 px-2 border border-solid border-black rounded-md">
                                <option value="" selected>No discount</option>
                                <option value="nike">HALLOWEEN20</option>
                                <option value="nike">MAYTHE4TH</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>
            <div class="w-[20rem] flex flex-col space-y-4">
                <div></div>
            </div>
        </section>
    </main>
</template>
