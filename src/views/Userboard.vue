<template>
    <div class="wrap">
    <div class="coupon-bar text-center bg-primary text-white">
      輸入優惠碼:coupon50 享全館商品50%折扣
    </div>
    <NavbarFront></NavbarFront>
    <ToastMessages></ToastMessages>
    <div class="container-fluid my-4 position-relative">
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

/* 優惠碼公告區塊樣式設定 */
.coupon-bar {
  padding-top: 125px;
}

/* 購物車圖示 */
.bi-cart-fill {
    font-size: 25px;
    color: MidnightBlue;
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