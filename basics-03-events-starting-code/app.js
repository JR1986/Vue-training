const app = Vue.createApp({
  data() {
    return {
      counter: 6,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('Submitted')
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    countUp(num) {
      this.counter = this.counter + num
    },
    countDown(num) {
      this.counter = this.counter - num
    },
    setName(event) {
      this.name = event.target.value
    }
  }
});

app.mount('#events');
