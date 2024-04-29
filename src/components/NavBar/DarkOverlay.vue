<script>
export default {
  name: 'DarkOverlay',
  props: {
    show: Boolean
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<template>
  <transition name="fade">
    <div v-show="show" class="fixed inset-0 bg-black opacity-70 z-40" @click="close"></div>
  </transition>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
