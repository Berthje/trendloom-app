<script>
import InputField from '../InputField.vue';

export default {
  name: 'ProfileForm',
  components: {
    InputField
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    save() {
      this.$emit('save', { type: this.type, fields: this.fields });
    }
  }
}
</script>
<template>
  <div class="py-4">
    <form class="flex flex-wrap -mx-2" @submit.prevent="save">
      <div class="w-full md:w-1/2 px-2 mb-4" v-for="(field, index) in fields" :key="index">
        <InputField :id="field.id" :label="field.label" :placeholder="field.placeholder"
          :errorMessage="field.errorMessage" :status="field.status" :type="field.type" v-model="field.value" />
      </div>
      <div class="w-full px-2">
        <button type="submit"
          class="uppercase inline-block px-12 py-2 bg-black border hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border transition ease-in-out duration-300 text-white">{{
            $t('save') }}</button>
      </div>
    </form>
  </div>
</template>
