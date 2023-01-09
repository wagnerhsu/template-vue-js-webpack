import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Button, DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(Button).use(DatePicker);
app.use(router).mount('#app');
