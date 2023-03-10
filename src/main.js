import { createApp } from 'vue';
import 'tw-elements';


import App from './App.vue';
import router from './router';
import store from './stores';

import "./assets/main.css";

const app = createApp(App);


app.use(router);
app.use(store);

app.mount('#app');
