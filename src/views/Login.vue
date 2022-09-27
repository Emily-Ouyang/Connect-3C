<template>
    <div class="container mt-5">
	<form class="row justify-content-center" @submit.prevent="signIn">
	  <div class="col-md-6">
	    <h1 class="h3 mb-5 font-weight-normal text-center login-text">登入後台</h1>
	    <div class="mb-4">
	      <label for="inputEmail" class="sr-only">帳號</label>
	      <input
	        type="email"
	        id="inputEmail"
	        class="form-control"
	        placeholder="請輸入電子郵件"
	        required
	        autofocus
            v-model="user.username"
	      />
	    </div>

	    <div class="mb-4">
	      <label for="inputPassword" class="sr-only">密碼</label>
	      <input
	        type="password"
	        id="inputPassword"
	        class="form-control"
	        placeholder="密碼為8個字元，內含英文字母及數字"
	        required
            v-model="user.password"
	      />
	    </div>

		<div class="container">
			<div class="row">
			  <div class="form-check col-6">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                記住我
                </label>
              </div>

			  <div class="text-end col-6">
			    <p>
				  <a href="" class="forget">忘記密碼?</a>
			    </p>
		      </div>
			</div>
		</div>

	    <div class="d-grid gap-2 col-6 mx-auto text-center mt-5">
	      <button class="btn btn-primary" type="submit">登入</button>
	    </div>
	  </div>
	</form>
</div>
</template>

<style>
	/* 標題文字顏色 */
	.login-text {
		color: MidnightBlue;
	}

	/* 清除超連結底線 */
	.forget {
		text-decoration: none;
	}

	/* 按鈕hover特效(透明度改為0.8) */
	.btn-primary:hover {
		opacity: 0.8;
	}
</style>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        };
    },

    methods: {
        signIn() {
            // API路徑
            const api = `${process.env.VUE_APP_API}admin/signin`;

            // 送出API
            this.$http.post(api,this.user)
            .then((res) => {								
				// 假設登入成功時
				if(res.data.success) {
					// 將token存入cookie中
					const token = res.data.token;
                    const expired = res.data.expired;
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;

					// 轉址到products頁面(產品頁面)
					this.$router.push('/dashboard/products');
				}
            });
        },
    },
};
</script>