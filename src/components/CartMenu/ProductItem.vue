<script>
import { AiOutlineClose } from 'vue3-icons';
import { RouterLink } from 'vue-router';

export default {
    components: {
        AiOutlineClose,
        RouterLink
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <li class="relative group w-full flex text-left p-4 hover:bg-gray-100 transition-all duration-300 rounded-sm">
        <AiOutlineClose size="16"
            class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 cursor-pointer text-gray-500 hover:text-black" />
        <RouterLink :to="`/shop/product/${product.id}`" class="mr-5 w-20" @click="$emit('close')">
            <img :src="product.imageUrl" :alt="product.title" />
        </RouterLink>
        <div>
            <h4 class="leading-none mb-1">
                <RouterLink :to="`/shop/product/${product.id}`" @click="$emit('close')">{{ product.title }}</RouterLink>
            </h4>
            <div class="text-[0.925rem]">
                <dl class="text-[#858585]">
                    <div class="flex space-x-1">
                        <dt>Color:</dt>
                        <dd>
                            <p>{{ product.color }}</p>
                        </dd>
                    </div>
                    <div class="flex space-x-1">
                        <dt>Size:</dt>
                        <dd>
                            <p>{{ product.size }}</p>
                        </dd>
                    </div>
                </dl>
                <span class="block mt-2 font-medium text-[0.95rem]">
                    {{ product.quantity }} ×
                    <span>
                        <bdi>€</bdi>
                        <span>{{ product.price.toFixed(2) }}</span>
                    </span>
                </span>
            </div>
        </div>
    </li>
</template>