<template>
<nav class="navbar navbar-expand-lg navbar-light store-nav">
  <div class="container-fluid px-5">
    <a class="navbar-brand" href="#">
      <img src="~@/assets/img/icon.jpg" class="navbar-icon">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/dashboard/products">產品列表</router-link>
        <router-link class="nav-link" to="/dashboard/orders">查看訂單</router-link>
        <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
        <a class="nav-link" href="#" @click.prevent="logout">登出後台</a>
    </div>
  </div>
</div>
</nav>
</template>

<script>
export default {
    methods: {
        logout() {
            // 執行登出功能
            // API路徑
            const api = `${process.env.VUE_APP_API}logout`;

            // 送出API
            this.$http.post(api,this.user)
            .then((res) => {
				// 假設登出成功時
				if(res.data.success) {
                    // 轉址回登入頁面
                    this.$router.push('/login');
				}
            });
        }
    }
};
</script>

<style>
/* 導覽列樣式設定 */
.store-nav {
    background: #ffffff;
    box-shadow: 0 3px 3px #c0c0c0;
    padding: 5px;
  }

/* icon寬度設定 */
.navbar-icon {
    max-width: 140px;
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