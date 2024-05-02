<script>
import { AiOutlineClose } from 'vue3-icons/ai';
import { RouterLink } from 'vue-router';

export default {
    name: 'ProductItem',
    components: {
        AiOutlineClose,
        RouterLink
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    emits: ['close', 'remove'],
}
</script>

<template>
    <li class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
        <AiOutlineClose size="16" @click="$emit('remove', product)"
            class="absolute top-2 right-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
        <RouterLink :to="`/shop/product/${product.id}`" class="mr-5 w-20" @click="$emit('close')">
            <img :src="product.media[0].image_url" :alt="product.name" />
        </RouterLink>
        <div>
            <h4 class="leading-none mb-1">
                <RouterLink :to="`/shop/product/${product.id}`" @click="$emit('close')">{{ product.name }}</RouterLink>
            </h4>
            <div class="text-[0.925rem]">
                <dl class="text-[#858585]">
                    <div class="flex space-x-1">
                        <dt>{{$t('size')}}:</dt>
                        <dd>
                            <p>{{ product.selectedSize }}</p>
                        </dd>
                    </div>
                </dl>
                <span class="block mt-2 font-medium text-[0.95rem]">
                    {{ product.quantity }} ×
                    <span>
                        <bdi>€</bdi>
                        <span>{{ Number(product.price).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
                    </span>
                </span>
            </div>
        </div>
    </li>
</template>
