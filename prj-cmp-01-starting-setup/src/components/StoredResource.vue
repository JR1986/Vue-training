<template>
  <card>
    <li>
      <p>{{ title }}</p>
      <p>{{ description }}</p>
      <p>{{ link }}</p>
    </li>
  </card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>
