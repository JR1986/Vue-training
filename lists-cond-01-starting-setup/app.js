const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    handleInput(event) {
      this.enteredGoalValue = event.target.value;
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
