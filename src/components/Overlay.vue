<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean,
});

const emits = defineEmits(['close']);

const close = () => {
  emits('close');
};
</script>

<template>
  <transition name="fade">
    <div v-show="show" class="fixed inset-0 bg-black opacity-70 z-40" @click="close"></div>
  </transition>
</template>