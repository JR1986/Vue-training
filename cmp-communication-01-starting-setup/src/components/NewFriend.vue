<template>
  <form @submit.prevent="submitData">
    <label for="name">
      Name:
      <input type="text" name="name" v-model="enteredName" />
    </label>
    <label for="phone">
      Phone:
      <input type="text" name="phone" v-model="enteredPhone" />
    </label>
    <label for="email">
      Email:
      <input type="text" name="email" v-model="enteredEmail" />
    </label>
    <button>Submit friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>

<style>
form {
  margin: 24px;
}
input {
  display: block;
  width: 100%;
  height: 32px;
  margin-bottom: 16px;
}
</style>