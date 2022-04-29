import { createApp } from 'vue';

import App from './App.vue';
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';

const app = createApp(App);

app.component('app-header', Header);
app.component('card', Card);
app.component('button-component', Button);

app.mount('#app');
