const app = Vue.createApp({
    data() {
        return {
            name: 'Jelle',
            keydownValue: '',
            submittedValue: '',
        }
    },
    methods: {
        showAlert() {
            alert('Hello i am a stupid alert');
        },
        handleKeydown(event) {
            this.keydownValue = event.target.value;
        },
        handleSubmit(event) {
            this.submittedValue = event.target.value;
        }
    }
})

app.mount('#assignment');