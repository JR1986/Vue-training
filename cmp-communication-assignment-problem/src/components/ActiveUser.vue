<template>
  <header>
    <h2>Name: {{ firstName }}</h2>
    <h3>Age: {{ age }}</h3>
  </header>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>