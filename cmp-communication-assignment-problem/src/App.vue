<template>
  <div>
    <active-user :first-name="enteredName" :age="enteredAge"></active-user>
    <user-data @add-person="addPerson"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addPerson(name, age) {
      this.enteredName = name;
      this.enteredAge = age;
    },
  },
};
</script>