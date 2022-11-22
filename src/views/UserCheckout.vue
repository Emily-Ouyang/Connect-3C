<template>
    <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <h3 class="text-center mb-5">
        確認訂單資訊
        </h3>

        <table class="table align-middle">
          <thead>
          <th>品名</th>
          <th>數量</th>
          <th class="text-end">單價</th>
          </thead>
          <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">{{ order.total }}</td>
          </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>訂購人姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>訂購人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>訂購人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">總計${{ order.total }}元 未付款</span>
              <span v-else class="text-success">已完成付款</span>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="text-end">
          <button class="btn btn-primary" v-if="order.is_paid === false">立即付款</button>
          <button class="btn btn-primary" v-else @click.prevent="goSuccess">完成訂購</button>
        </div>
      </form>
    </div>
</template>

<style>
/* 讀取視覺效果樣式 */
@keyframes ldio-4g11ls18ra {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}

.ldio-4g11ls18ra div > div {
  position: absolute;
  width: 8.8px;
  height: 8.8px;
  border-radius: 50%;
  background: #292664;
  animation: ldio-4g11ls18ra 1s linear infinite;
}

.ldio-4g11ls18ra div:nth-child(1) > div {
  left: 87px;
  top: 51.00000000000001px;
  animation-delay: -0.875s;
}

.ldio-4g11ls18ra > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 91.4px 55.400000000000006px;
}

.ldio-4g11ls18ra div:nth-child(2) > div {
  left: 76px;
  top: 76px;
  animation-delay: -0.75s;
}

.ldio-4g11ls18ra > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 80.4px 80.4px;
}

.ldio-4g11ls18ra div:nth-child(3) > div {
  left: 51.00000000000001px;
  top: 87px;
  animation-delay: -0.625s;
}

.ldio-4g11ls18ra > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 55.400000000000006px 91.4px;
}

.ldio-4g11ls18ra div:nth-child(4) > div {
  left: 25.000000000000007px;
  top: 76px;
  animation-delay: -0.5s;
}

.ldio-4g11ls18ra > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 29.400000000000006px 80.4px;
}

.ldio-4g11ls18ra div:nth-child(5) > div {
  left: 14.000000000000007px;
  top: 51.00000000000001px;
  animation-delay: -0.375s;
}

.ldio-4g11ls18ra > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 18.400000000000006px 55.400000000000006px;
}

.ldio-4g11ls18ra div:nth-child(6) > div {
  left: 25.000000000000007px;
  top: 25.000000000000007px;
  animation-delay: -0.25s;
}

.ldio-4g11ls18ra > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 29.400000000000006px 29.400000000000006px;
}

.ldio-4g11ls18ra div:nth-child(7) > div {
  left: 51.00000000000001px;
  top: 14.000000000000007px;
  animation-delay: -0.125s;
}

.ldio-4g11ls18ra > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 55.400000000000006px 18.400000000000006px;
}

.ldio-4g11ls18ra div:nth-child(8) > div {
  left: 76px;
  top: 25.000000000000007px;
  animation-delay: 0s;
}

.ldio-4g11ls18ra > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 80.4px 29.400000000000006px;
}

.loadingio-spinner-spin-69aofg588hf {
  width: 110px;
  height: 110px;
  display: inline-block;
  overflow: hidden;
  background: rgba(NaN, NaN, NaN, 0);
}

.ldio-4g11ls18ra {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}

.ldio-4g11ls18ra div { box-sizing: content-box; }
</style>

<script>
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },

  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;

      this.$http.get(url).then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
          }
        });
    },

    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;

      this.$http.post(url).then((res) => {
          if (res.data.success) {
            this.getOrder();
          }
        });
    },

    goSuccess() {
			// 轉址到訂購完成頁面
			this.$router.push('/user/success');
		}
  },

  created() {
    this.orderId = this.$route.params.orderId;

    this.getOrder();
  }
};
</script>