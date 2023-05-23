import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import i18nPlugin from './plugins/i18n.js';
import router from '@/router';
const app = createApp(App);
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!',
  },
});
// 挂载pinia
app.use(store);
app.use(router);
app.mount('#app');
