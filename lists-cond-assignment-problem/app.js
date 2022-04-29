const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputValue: '',
            showList: false,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputValue);
        },
        handleVisible() {
            this.showList = !this.showList;
        }
    }
})

app.mount('#assignment');