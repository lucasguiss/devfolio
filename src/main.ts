import './plugins/bootstrap-vue';
import '@babel/polyfill';
import 'mutationobserver-shim';

import { createApp } from 'vue';
import i18n from '@/i18n';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(store).use(router).use(i18n)
  .mount('#app');
