<template>
    <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

    <div class="my-5 row justify-content-center">
      <!-- 購物車列表 -->
      <div class="col-lg-6 col-md-12 col-sm-12 mb-5 px-4">
        <h3 class="text-center mb-5">
        確認訂購明細
        </h3>

            <div class="sticky-top">
              <table class="table align-middle">
                <thead>
                  <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
                  </tr>
                </thead>
            <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                          :disabled="status.loadingItem === item.id"
                          @click="removeCartItem(item.id)">
                          <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input type="number" class="form-control"
                           min="1"
                           :disabled="item.id === status.loadingItem"
                           @change="updateCart(item)"
                           v-model.number="item.qty">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          </div>
          </div>

      <Form class="col-lg-6 col-md-12 col-sm-12 px-5" v-slot="{ errors }"  @submit="createOrder">
        <h3 class="text-center mb-5">
        填寫訂購人資訊
        </h3>

        <div class="mb-3">
          <label for="email" class="form-label">Email *</label>
          <Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">訂購人姓名 *</label>
          <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">訂購人電話 *</label>
          <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">訂購人地址 *</label>
          <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="button" class="btn btn-primary">送出訂單</button>
        </div>
      </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: {},
            coupon_code: '',
            status: {
            // 對應品項 id
                loadingItem: ''
            },
            form: {
              user: {
                name: '',
                email: '',
                tel: '',
                address: ''
            },
        message: ''
      }
        }
    },

    methods: {
    removeCartItem(id) {
      this.status.loadingItem = id;

      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;

      this.isLoading = true;

      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response,'移除購物車品項');

        this.status.loadingItem = '';

        this.getCart();

        this.isLoading = false;
      });
    },

    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;

      this.isLoading = true;

      this.status.loadingItem = item.id;

      const cart = {
        product_id: item.product_id,
        qty: item.qty
      };

      this.$http.put(url,{ data: cart }).then(() => {
        this.status.loadingItem = '';

        this.getCart();

        this.isLoading = false;
      })
      },

    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;

      this.isLoading = true;

      this.$http.get(url).then((response) => {
        this.cart = response.data.data;

        this.isLoading = false;
      });
    },

    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;

      const coupon = {
        code: this.coupon_code,
      };

      this.isLoading = true;

      this.$http.post(url,{ data: coupon }).then((response) => {
        this.$httpMessageState(response,'套用優惠碼');

        this.getCart();

        this.isLoading = false;
      });
    },

    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;

      const order = this.form;

      this.$http.post(url,{ data: order }).then((res) => {
          let orderId = res.data.orderId;

          this.$router.push(`/user/checkout/${orderId}`);
        });
    }
    },

    created() {
      this.getCart();
    }
};
</script>

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