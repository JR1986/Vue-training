<template>
  <button @click="handleClick" class="active ? 'active' : 'secondary'">
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
      this.$emit('set-active', this.active);
    },
  },
};
</script>

<style scoped>
.secondary {
  background-color: plum;
}

.active {
  background-color: purple;
  color: white;
}

button {
  border: none;
  padding: 12px 24px;
  margin: 16px;
  cursor: pointer;
}
</style>