<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <a-button type="primary" @click="info">Primary Button</a-button>
  <a-date-picker v-model:value="value1" />
</template>

<script setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
const value1 = ref();
const info = () => {
  message.info('This is a normal message');
};
</script>
