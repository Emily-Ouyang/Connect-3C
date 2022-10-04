<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled: pages.current_page === 1}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prePage(pages)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" v-for="page in pages.total_pages" :key="page"
      :class="{'active': page === pages.current_page}">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>

      <li class="page-item" :class="{disabled: pages.current_page >= pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage(pages)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"(從Ajax取回來的資料)
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],

  methods: {
    prePage(pages) {
      if(pages.has_pre === true) {
        this.$emit('emit-pages',pages.current_page -1);
      }
    },

    updatePage(page) {
      this.$emit('emit-pages',page);
    },

    nextPage(pages) {
      if(pages.has_next === true) {
        this.$emit('emit-pages',pages.current_page +1);
      }
    }
  }
};
</script>