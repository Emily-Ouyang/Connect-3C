<template>
  <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

    <div class="container userPage">
      <div class="dropdown text-end mb-3">
      <a type="button position-relative p-2" data-bs-toggle="dropdown" data-bs-auto-close="outside">
        <i class="bi bi-cart-fill"></i>
      </a>
      <div class="dropdown-menu p-2 overflow-auto">
        <p class="text-center mt-2 mb-5">購物車清單</p>

          <!-- 購物車列表 -->
          <div class="col-md-12">
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
                          @click.prevent="removeCartItem(item.id)">
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
              <button class="btn btn-outline-secondary" type="button" @click.prevent="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <button class="btn btn-primary mb-2 w-100" type="button" :disabled="cart.total === 0" @click.prevent="goInfo">結帳去</button>
        </div>
      </div>
    </div>
  </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/user/cart" class="breadcrumb-item-a">商城</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>

      <div class="row justify-content-center">
        <article class="col-lg-7 col-md-12 col-sm-12 mt-3 mb-5">
          <img :src="product.imageUrl" class="img-fluid">
        </article>

        <div class="col-lg-5 col-md-12 col-sm-12 px-5">
          <h2 class="mb-4">{{ product.title }}</h2>
          <pre class="mb-5">{{ product.description }}</pre>
          <pre class="mb-4">{{ product.content }}</pre>
          <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
          <del class="h6" v-if="product.price">市價 {{ product.origin_price }} 元</del>
          <div class="h5" v-if="product.price">限時下殺 {{ product.price }} 元</div>
          <hr>
          <div class="input-group input-group-sm mb-3">
            <input type="number" class="form-control"
                   min="1"
                   v-model.number="qty">
                   <div class="input-group-text">/ {{ product.unit }}</div>
          </div>

          <!-- 當 loadingItem 屬性中儲存的 id 與 此商品 id 一致時，按鈕呈現禁用狀態 -->
          <button type="button" class="btn btn-primary btn-lg" @click.prevent="addToCart(product.id,qty)"
                  :disabled="this.status.loadingItem === product.id">
                  <div v-if="this.status.loadingItem === product.id" class="spinner-grow spinner-grow-sm text-white" role="status">
                  <span class="visually-hidden">Loading...</span>
                  </div>
                  <i class="bi bi-cart-plus"></i> 帶商品回家
          </button>
        </div>
      </div>
    </div>
  </template>

<style>
/* 前台頁面內容樣式設定 */
.userPage {
  padding-top: 10px;
  }

/* 更改breadcrumb樣式 */
.breadcrumb-item-a {
  color: MidnightBlue;
  text-decoration: none;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: MidnightBlue;
}

.breadcrumb-item.active {
  color: MidnightBlue;
}

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
        product: {},
        id: '',
        status: {
          // 對應品項 id
          loadingItem: ''
        },
        cart: {},
        qty: 1,
        coupon_code: ''
      }
    },

    methods: {
      getProduct() {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;

        this.isLoading = true;

        this.$http.get(api).then((response) => {
          this.isLoading = false;

          if (response.data.success) {
            this.product = response.data.product;
          }
        });
      },

      addToCart(id,qty) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;

        // 按下帶商品回家的按鈕時，呈現讀取狀態
        this.status.loadingItem = id;

        const cart = {
          product_id: id,
          qty
        };

        this.$http.post(url,{ data: cart }).then((response) => {
          // 加入購物車動作完成後，取消讀取狀態
          this.status.loadingItem = '';

          this.getCart();
        });
      },

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

      this.$http.put(url,{ data: cart }).then((res) => {
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

    goInfo() {
			// 轉址到填寫個人資料頁面
			this.$router.push('/user/information');
		}
    },

    created() {
      this.id = this.$route.params.productId;

      this.getProduct();

      this.getCart();
    }
  };
</script>