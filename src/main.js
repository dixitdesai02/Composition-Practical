import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'

import Navbar from "./components/Navbar.vue";
import validation from './includes/validation';
import router from './router/index';

const app = createApp(App);

const pinia = createPinia()
app.use(pinia)

app.use(router)
app.use(validation)

app.component("Navbar", Navbar)


app.mount("#app");
