<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary" @click="onConfirm">ConfirmTest</a-button>
  </div>
</template>
<script>
/*eslint-disable vue/multi-word-component-names*/
import { Modal } from 'ant-design-vue';
export default {
  name: 'About',
  methods: {
    onConfirm() {
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
      // this.$confirm({
      //   title: '重要提示：', //标题
      //   class: 'nextMonth', //类名
      //   icon: '', //可以更换页面展示图标
      //   centered: true, //页面居中位置
      //   content: '请确认您 XXXX ！',
      //   onOk: () => {
      //     //点击确认时的执行
      //     alert('Ok');
      //   },
      // });
    },
  },
};
</script>
