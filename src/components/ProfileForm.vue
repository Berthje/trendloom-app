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
    <div class="py-4">
      <form class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/2 px-2 mb-4" v-for="(field, index) in fields" :key="index">
          <InputField
            :id="field.id"
            :label="field.label"
            :placeholder="field.placeholder"
            :errorMessage="field.errorMessage"
            :status="field.status"
            :type="field.type"
            :modelValue="field.value"
          />
        </div>
        <div class="w-full px-2">
          <button
            class="uppercase inline-block px-12 py-2 bg-black hover:bg-white hover:text-black transition ease-in-out duration-300 text-white">Save</button>
        </div>
      </form>
    </div>
  </template>
