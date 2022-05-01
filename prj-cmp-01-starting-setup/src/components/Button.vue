<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['set-active'],
  data() {
    return {
      active: true,
    };
  },
  methods: {
    handleClick() {
      this.$emit('set-active');
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 12px 24px;
  margin: 16px;
  cursor: pointer;
}
</style>