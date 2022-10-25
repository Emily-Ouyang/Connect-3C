<template>
    <div class="wrap">
    <NavbarFront></NavbarFront>
    <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
    </div>
    <Footer></Footer>
    </div>
</template>

<style>
/* 背景圖片樣式設定 */
.wrap {
    background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png');
    /* 固定背景圖(當頁面滾動時，視覺上會有交錯的效果) */
    background-attachment: fixed;
  }
</style>

<script>
import emitter from '@/methods/emitter';
import NavbarFront from '@/components/NavbarFront.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import Footer from '@/components/Footer.vue';

    export default {
      components: {
        NavbarFront,
        ToastMessages,
        Footer
      },

      provide() {
        return {
          emitter
        }
      }
    };
</script>