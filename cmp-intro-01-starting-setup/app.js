const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manual Lorenz',
                    phone: '0123 456 999',
                    email: 'manual@gmail.com',
                },
                {
                    id: 'manuelo',
                    name: 'Manuala Lorenzo',
                    phone: '0123 456 7689',
                    email: 'manfjualz@gmail.com',
                },
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manual Lorenz',
                phone: '0123 456 999',
                email: 'manual@gmail.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible

        }
    }
});

app.mount('#app');