import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//import Antd from 'ant-design-vue';
import {
  Button,
  DatePicker,
  Divider,
  Grid,
  Tooltip,
  Modal,
} from 'ant-design-vue';
import { Col, Row } from 'ant-design-vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(Button).use(DatePicker).use(Divider).use(Grid).use(Tooltip).use(Modal);
app.use(Col).use(Row);
//app.use(Antd);

app.config.globalProperties.$message = message;
app.config.globalProperties.$confirm = Modal.confirm;

import * as Icons from '@ant-design/icons-vue';

const icons = Icons;
for (const i in icons) {
  app.component(i, icons[i]);
}

app.use(router).mount('#app');
