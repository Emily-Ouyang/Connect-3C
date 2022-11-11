<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
      <Toast v-for="(msg,key) in messages" :key="key"
        :msg="msg"
      />
    </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
    components: { Toast },

    data() {
      return {
        messages: []
      }
    },

    inject: ['emitter'],

    mounted() {
        // 加入push-message事件在emitter上
        // message為外部傳來的資訊
        this.emitter.on('push-message', (message) => {

            // 每次有新訊息傳入時，將相關資訊提取出來
            const{style = 'success',title,content} = message;

            // 每次觸發push-message事件時，都會將訊息推送到訊息列表裡
            this.messages.push({style,title,content});
        });
    }
  };
</script>