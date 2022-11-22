<template>
  <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

    <table class="table mt-4">
      <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
        <template v-for="(item,key) in orders" :key="key">
          <tr v-if="orders.length"
              :class="{'text-secondary': !item.is_paid}">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product,i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                       v-model="item.is_paid"
                       @change="updatePaid(item)">
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>

              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">
                  <i class="bi bi-search"></i>
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
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
  import DelModal from '@/components/DelModal.vue';
  import OrderModal from '@/components/orderModal.vue';
  import Pagination from '@/components/Pagination.vue';

  export default {
    data() {
      return {
        orders: {},
        isNew: false,
        pagination: {},
        isLoading: false,
        tempOrder: {},
        currentPage: 1
      }
    },

    components: {
      Pagination,
      DelModal,
      OrderModal
    },

    methods: {
      getOrders(currentPage = 1) {
        this.currentPage = currentPage;

        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;

        this.isLoading = true;

        this.$http.get(url, this.tempProduct).then((response) => {
          this.orders = response.data.orders;

          this.pagination = response.data.pagination;

          this.isLoading = false;
        });
      },

      openModal(isNew, item) {
        this.tempOrder = { ...item };

        this.isNew = false;

        const orderComponent = this.$refs.orderModal;

        orderComponent.showModal();
      },

      openDelOrderModal(item) {
        this.tempOrder = { ...item };

        const delComponent = this.$refs.delModal;

        delComponent.showModal();
      },

      updatePaid(item) {
        this.isLoading = true;

        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;

        const paid = {
          is_paid: item.is_paid,
        };

        this.$http.put(api, { data: paid }).then((response) => {
          this.isLoading = false;

          this.getOrders(this.currentPage);

          this.$httpMessageState(response,'更新付款狀態');
        });
      },

      delOrder() {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;

        this.isLoading = true;

        this.$http.delete(url).then((response) => {
          const delComponent = this.$refs.delModal;

          delComponent.hideModal();

          this.getOrders(this.currentPage);
        });
      }
    },

    created() {
      this.getOrders();
    }
  };
</script>