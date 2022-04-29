<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.25);
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
}
</style>