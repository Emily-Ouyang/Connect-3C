import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import router from './router'

const app = createApp(App);
window.bootstrap = bootstrap;
app.use(VueAxios, axios);
app.use(router);
app.component('Loading',Loading);
app.mount('#app');