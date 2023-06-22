import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'

import Navbar from "./components/Navbar.vue";
import router from './router/index';
import validation from './plugins/validation';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

const app = createApp(App);

const pinia = createPinia()
app.use(pinia)

app.use(router)
app.use(validation)
app.use(i18n)
app.use(vuetify)

app.component("Navbar", Navbar)


app.mount("#app");
