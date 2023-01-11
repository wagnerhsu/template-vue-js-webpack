<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <Tooltip placement="topLeft" title="Prompt Text">
    <Button type="primary">
      Primary Button using Button rather than a-button
    </Button>
  </Tooltip>
  <a-button type="primary" @click="info">Primary Button</a-button>
  <a-date-picker v-model:value="value1" />
  <div>
    <a-divider orientation="left">Normal</a-divider>
    <Row type="flex">
      <Col :span="6" :order="4">1 col-order-4</Col>
      <Col :span="6" :order="3">2 col-order-3</Col>
      <Col :span="6" :order="2">3 col-order-2</Col>
      <a-col :span="6" :order="1">4 col-order-1</a-col>
    </Row>
  </div>
  <a-divider orientation="center"></a-divider>
  <a-button type="primary" @click="confirmTest">ConfirmTest</a-button>
  <a-divider orientation="center"></a-divider>
  <StepBackwardOutlined />
</template>

<script setup>
import { ref } from 'vue';
import { Button, message, Tooltip, Col, Row, Modal } from 'ant-design-vue';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
const value1 = ref();
const info = () => {
  message.info('This is a normal message');
};
const confirmTest = () => {
  Modal.confirm({
    title: '重要提示：', //标题
    class: 'nextMonth', //类名
    icon: '', //可以更换页面展示图标
    centered: true, //页面居中位置
    content: '请确认您 XXXX ！',
    onOk: () => {
      //点击确认时的执行
      alert('Ok');
    },
  });
};
</script>
