<template>
    <div>
  <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

      <div class="text-end mt-3 mx-4">
        <button class="btn btn-primary" @click="openCouponModal(true)">
          新增優惠券
        </button>
      </div>

      <table class="table mt-4">
        <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(item,key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>

          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>

          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false,item)">
                <i class="bi bi-pencil-square"></i>
              </button>

              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon"></couponModal>
      <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
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
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
    components: { CouponModal,DelModal },

    props: {
      config: Object
    },

    data() {
      return {
        coupons: {},
        tempCoupon: {
          title: '',
          is_enabled: 0,
          percent: 100,
          code: ''
        },
        isLoading: false,
        isNew: false
      }
    },

    methods: {
      openCouponModal(isNew,item) {
        this.isNew = isNew;

        if (this.isNew) {
          this.tempCoupon = {
            due_date: new Date().getTime() / 1000
          };
        } else {
          this.tempCoupon = { ...item };
        }

        this.$refs.couponModal.showModal();
      },

      openDelCouponModal(item) {
        this.tempCoupon = { ...item };

        const delComponent = this.$refs.delModal;

        delComponent.showModal();
      },

      getCoupons() {
        this.isLoading = true;

        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;

        this.$http.get(url,this.tempProduct).then((response) => {
          this.coupons = response.data.coupons;

          this.isLoading = false;
        });
      },

      updateCoupon(tempCoupon) {
        if (this.isNew) {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;

          this.$http.post(url, { data: tempCoupon }).then((response) => {
            this.$httpMessageState(response,'新增優惠券');

            this.getCoupons();

            this.$refs.couponModal.hideModal();
          });
        } else {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;

          this.$http.put(url, { data: this.tempCoupon }).then((response) => {
            this.$httpMessageState(response,'新增優惠券');

            this.getCoupons();

            this.$refs.couponModal.hideModal();
          });
        }
      },

      delCoupon() {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;

        this.isLoading = true;

        this.$http.delete(url).then((response) => {
          this.$httpMessageState(response,'刪除優惠券');

          const delComponent = this.$refs.delModal;

          delComponent.hideModal();

          this.getCoupons();
        });
      }
    },

    created() {
      this.getCoupons();
    }
  };
</script>