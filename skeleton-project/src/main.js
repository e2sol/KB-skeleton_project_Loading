import 'bootstrap/dist/css/bootstrap.css'; // 부트스트랩 import
import '@/assets/main.css'; // 폰트 어썸 import

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
