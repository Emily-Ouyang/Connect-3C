<template>
    <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button type="button" class="btn-close bg-white mx-1" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          您確定要刪除 <strong class="text-danger">{{ item.title }}</strong> 嗎?(刪除後將無法回復)
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            <i class="bi bi-x-circle-fill"></i> 取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('del-item')">
            <i class="bi bi-trash"></i> 確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    item: {}
  },

  data() {
    return {
      modal: ''
    }
  },

  mixins: [modalMixin]
};
</script>