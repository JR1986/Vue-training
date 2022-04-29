<template>
  <form @submit.prevent="submitData">
    <label>
      Title
      <input type="text" v-model="enteredTitle" />
    </label>
    <label>
      Description
      <input type="text" v-model="enteredDescription" />
    </label>
    <label>
      Link
      <input type="text" v-model="enteredLink" />
    </label>
    <button-component>Add data</button-component>
  </form>
</template>

<script>
export default {
  emits: ['add-data'],
  data() {
    return {
      enteredTitle: '',
      enteredDescription: '',
      enteredLink: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-data',
        this.enteredTitle,
        this.enteredDescription,
        this.enteredLink
      );
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 25px;
  margin-bottom: 16px;
}
</style>