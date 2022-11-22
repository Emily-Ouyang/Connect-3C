<template>
<IndexLoginModal></IndexLoginModal>

<nav class="navbar navbar-expand-lg navbar-light store-nav fixed-top">
  <div class="container-fluid px-5">
    <router-link class="navbar-brand" to="/">
      <img src="~@/assets/img/icon.jpg" class="navbar-icon">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/user/cart">商城</router-link>
        <router-link class="nav-link" to="/login">後台入口</router-link>
        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#indexLoginModal"><i class="bi bi-person-circle"></i></a>
      </div>
    </div>
</div>
</nav>
</template>

<style>
/* 導覽列樣式設定 */
.navbar {
  --bs-navbar-toggler-border-color: MidnightBlue;
}

.store-nav {
    background: #ffffff;
    box-shadow: 0 3px 3px MidnightBlue;
    padding: 5px;
  }

/* icon寬度設定 */
.navbar-icon {
    max-width: 140px;
  }

/* 漢堡選單按下去之後的邊框顏色 */
.navbar-toggler {
  color: MidnightBlue;
}

/* icon hover特效 */
.store-nav .navbar-icon:hover {
    opacity: 0.6;
    transform: scale(1.1);
  }

/* 導覽列超連結樣式設定 */
.navbar-nav .nav-link {
    color: MidnightBlue;
    padding: 20px 15px;
    /* 清除hover的浮動 */
    border-bottom: 4px solid transparent;
  }

/* 導覽列超連結hover特效 */
.navbar-nav .nav-link:hover {
    opacity: 0.9;
    color: SkyBlue;
    transition: all 0.4s;
    border-bottom: 4px solid SkyBlue;
  }
/* RWD響應式網頁設計 */
/* 992px以下導覽列選單居中 */
    @media(max-width:992px) {
        .navbar-nav {
            text-align: center;
        }
    }
</style>

<script>
import IndexLoginModal from '@/components/IndexLoginModal.vue';

export default {
  components: {
    IndexLoginModal
  }
};
</script>