<script>
import InputField from './InputField.vue';

export default {
    name: 'ProfileForm',
    components: {
        InputField
    },
    props: {
        fields: {
            type: Array,
            required: true
        }
    }
}
</script>
<template>
    <div>
        <form class="border-b border-solid border-black pb-6 mb-4 flex flex-col space-y-3">
            <InputField v-for="(field, index) in fields" :key="index" :id="field.id" :label="field.label"
                :placeholder="field.placeholder" :errorMessage="field.errorMessage" :status="field.status"
                :type="field.type" />
            <button
                class="uppercase inline-block px-12 py-2 bg-black hover:bg-white hover:text-black transition ease-in-out duration-300 text-white">Save</button>
        </form>
    </div>
</template>
