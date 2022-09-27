<template>
    <Navbar></Navbar>
    <ToastMessages></ToastMessages>
    <div class="container-fluid">
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
    // 元件區域註冊
    components: {
        Navbar,
        ToastMessages
    },

    // 讓內層元件皆可使用外層功能
    provide() {
        return {
            emitter
        }
    },

    created() {
        // 先把token取出來
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

        // 將token加到headers裡
        this.$http.defaults.headers.common.Authorization = `${token}`;

        // 登入驗證
        // API路徑
        const api = `${process.env.VUE_APP_API}api/user/check`;

        // 送出API
        this.$http.post(api,this.user)
        .then((res) => {
            // 假設登入失敗時
            if(!res.data.success) {
                // 轉址回登入頁面
                this.$router.push('/login');
            }    
        });
    },
};
</script>