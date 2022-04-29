<template>
  <form @submit.prevent="submitData">
    <input type="text" v-model="enteredName" />
    <input type="text" v-model="enteredAge" />
    <button>Update data</button>
  </form>
</template>

<script>
export default {
  emits: ["add-person"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-person", this.enteredName, this.enteredAge);
    },
  },
};
</script>