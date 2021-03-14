import { createApp } from 'vue';
import i18n from '@/i18n';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import ElementPlus from 'element-plus/';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).use(i18n)
  .use(ElementPlus)
  .mount('#app');
