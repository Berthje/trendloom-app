<script>
export default {
    name: 'QuantitySelector',
    data() {
        return {
            quantity: 1
        }
    },
    watch: {
        quantity(newVal) {
            if (newVal < 1) {
                this.quantity = 1;
            }
        }
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        }
    }
}
</script>
<template>
    <div class="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
            class="hover:bg-gray-200 border border-gray-300 p-1 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none"
            @click="decrement">
            <svg class="w-2 h-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M1 1h16" />
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation"
            class="border-x-0 border-y border-gray-300 h-full text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-10 py-2.5"
            placeholder="2" v-model.number="quantity" required min="1" />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
            class="hover:bg-gray-200 border border-gray-300 p-1 h-full focus:ring-gray-100 focus:ring-2 focus:outline-none"
            @click="increment">
            <svg class="w-2 h-2 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M9 1v16M1 9h16" />
            </svg>
        </button>
    </div>
</template>
