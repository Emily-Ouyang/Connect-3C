<template>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
      <div class="toast-header">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>

      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </template>

  <script>
  import Toast from 'bootstrap/js/dist/toast';
  
  export default {
    name: 'Toast',
    props: ['msg'],

    mounted() {
      const toastEl = this.$refs.toast;

      // 當吐司元件觸發自己的生命週期時，吐司元件會開啟六秒鐘，六秒鐘結束後自動消失
      const toast = new Toast(toastEl,{
        delay: 6000
      });

      toast.show();
    }
  };
  </script>