import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import * as bootstrap from 'bootstrap';
import jQuery from 'jquery';
import App from './App.vue';
import router from './router';
import { currency } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);
// 全域屬性
app.config.globalProperties.$filters = {
    currency
  };

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

window.bootstrap = bootstrap;

window.$ = window.jQuery = jQuery;

app.use(VueAxios,axios);

app.use(router);

app.component('Loading',Loading);

app.mount('#app');