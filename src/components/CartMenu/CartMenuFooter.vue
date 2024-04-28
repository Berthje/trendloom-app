<script>
export default {
    name: 'CartMenuFooter',
    props: {
        subtotal: {
            type: Number,
            required: true
        }
    }
}
</script>
<template>
    <div>
        <div class="uppercase flex justify-between items-center mb-5">
            <p class="text-[0.95rem]">Subtotal:</p>
            <p>€{{ subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
        </div>
        <RouterLink to="/checkout" class="block uppercase bg-black text-white text-center py-3 text-[0.95rem]">Checkout
        </RouterLink>
    </div>
</template>
