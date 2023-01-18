<template>
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-6">
    <div class="text-center text-primary mt-5">
        <h1>
            恭喜您完成訂購🎉
        </h1>

        <p class="mt-4">
            收到訂單後，我們將立即為您安排出貨。
        </p>
        <br>
        <p class="mt-2">
            貨到後，若商品有誤、有損壞瑕疵，<br>
            可於七天鑑賞期內，連同包裝完整寄回Connect 3C進行退貨事宜。<br><br>
            日後使用手機時，若出現故障，<br>
            也可前往Connect 3C門市進行維修，<br>
            別忘了我們也有維修服務哦~
        </p>

        <p class="mt-4">
            Connect 3C感謝您的購買，<br>
            也祝福您順心愉快!
        </p>
    </div>

    <div class="d-grid gap-2 col-6 mx-auto text-center mt-5">
			<button type="button" class="btn btn-primary" @click="goCart">
				<i class="bi bi-cart3"></i> 繼續購物
		    </button>
	    </div>

		<div class="d-grid gap-2 col-6 mx-auto text-center mt-4">
			<button type="button" class="btn btn-primary" @click="goBack">
				<i class="bi bi-arrow-clockwise"></i> 返回首頁
		    </button>
	    </div>
        </div>
        </div>
        </div>
</template>

<script>
export default {
    methods: {
        goCart() {
			// 轉址到商城
			this.$router.push('/user/cart');
		},

        goBack() {
			// 轉址到首頁
			this.$router.push('/');
		}
    }
};
</script>