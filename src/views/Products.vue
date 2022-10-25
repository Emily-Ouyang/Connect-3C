<template>
  <!-- 讀取視覺效果 -->
  <Loading :active="isLoading">
    <div class="loadingio-spinner-spin-69aofg588hf"><div class="ldio-4g11ls18ra">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>
  </Loading>

  <div class="text-end mt-3 mx-4">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
      新增產品
    </button>
  </div>

  <table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ $filters.currency(item.origin_price) }}
      </td>
      <td class="text-right">
        {{ $filters.currency(item.price) }}
      </td>

      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>

      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">
            <i class="bi bi-pencil-square"></i>
          </button>

          <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
<ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
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
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
    data() {
        return {
            // 產品資料
            products: [],
            // 分頁資訊
            pagination: {},
            tempProduct: {},
            isNew: false,
            // 讀取視覺效果預設為關閉
            isLoading: false
        }
    },

    // 元件區域註冊
    components: {
      Pagination,
      ProductModal,
      DelModal
    },

    inject: ['emitter'],

    methods: {
        getProducts(page = 1) {
            // API路徑
            // 透過分頁參數來切換頁面
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;

            // 觸發讀取視覺效果
            this.isLoading = true;

            // 送出API
            this.$http.get(api)
            .then((res) => {
				      // 假設取得產品資料成功時
				      if(res.data.success) {
                    // 將產品資料存進products陣列中
                    this.products = res.data.products;

                    // 將分頁資訊存進pagination物件中
                    this.pagination = res.data.pagination;

                    // 關閉讀取視覺效果
                    this.isLoading = false;
				}
            });
        },

        openModal(isNew,item) {
          // 新增產品時
          if(isNew) {
            this.tempProduct = {};
          } else {
            // 編輯產品時
            this.tempProduct = {...item};
          }

          // 儲存狀態
          this.isNew = isNew;
          const productComponent = this.$refs.productModal;

          productComponent.showModal();
        },

        updateProduct(item) {
          // 將外層以參數形式傳送過來的資料儲存
          this.tempProduct = item;

          // 發送到遠端
          // 新增產品
          // API路徑
          let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;   
          // API方法
          let httpMethod = 'post';

          // 判斷目前是否為編輯狀態(isNew為false)
          if(!this.isNew) {
            // 編輯產品
            // API路徑
            api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;

            // API方法
            httpMethod = 'put';
          }

          const productComponent = this.$refs.productModal;
          // 送出API
          this.$http[httpMethod](api,{data:this.tempProduct}).then((response) => {
          // 關閉彈出視窗
          productComponent.hideModal();

          // 依據成功與否，推送不同的訊息內容
          // 假設更新成功時
          if(response.data.success) {
          // 取得產品資訊列表
          this.getProducts();

          // 觸發emitter(跨元件溝通工具)
          // 觸發push-message事件，傳送相關資料過去
          this.emitter.emit('push-message', {
            // 相關資料
            style: 'success',
            title: '恭喜您!更新成功!'
          });
        } 
          // 假設更新失敗時
          else {
            this.emitter.emit('push-message', {
            style: 'danger',
            title: 'Oh No!更新失敗!',
            // 後端傳送過來失敗的訊息內容，透過join的方式把陣列內容一一取出，並且在中間補上逗號的形式
            // 將所有訊息補到content中
            content: response.data.message.join('、')
          });
        }
            });
        },

        // 開啟刪除彈出視窗
        openDelProductModal(item) {
        this.tempProduct = {...item};
        const delComponent = this.$refs.delModal;
        delComponent.showModal();
        },

        // 刪除產品
        delProduct() {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        this.$http.delete(url).then((response) => {
        const delComponent = this.$refs.delModal;

        // 關閉刪除彈出視窗
        delComponent.hideModal();

        // 重新取得產品資料列表
        this.getProducts();

        // 觸發emitter(跨元件溝通工具)
        // 觸發push-message事件，傳送相關資料過去
        this.emitter.emit('push-message', {
        // 相關資料
        style: 'success',
        title: '恭喜您!刪除成功!'
      });
          });
      }
    },

    created() {
        this.getProducts();
    }
};
</script>