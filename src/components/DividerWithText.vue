<script>
export default {
    name: 'DividerWithText',
    props: {
        text: String,
    }
}
</script>

<template>
    <h3 class="w-full text-center border-b-2 border-black border-solid leading-[0.12em] my-8">
        <span class="bg-white px-3">{{ $t(text) }}</span>
    </h3>
</template>
