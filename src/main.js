import { createApp } from 'vue';

import axios from 'axios';

import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import * as bootstrap from 'bootstrap';

import jQuery from 'jquery';

import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate';

import { required, email, min } from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { currency } from './methods/filters';

import { date } from './methods/filters';

import $httpMessageState from './methods/pushMessageState';

import App from './App.vue';

import router from './router';

const app = createApp(App);

// 全域屬性
app.config.globalProperties.$filters = {
    currency,
    date
  };

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

window.bootstrap = bootstrap;

window.$ = window.jQuery = jQuery;

defineRule('required',required);

defineRule('email',email);

defineRule('min',min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});

setLocale('zh_TW');

app.use(VueAxios,axios);

app.use(router);

app.component('Field',Field);

app.component('Form',Form);

app.component('ErrorMessage',ErrorMessage);

app.component('Loading',Loading);

app.mount('#app');