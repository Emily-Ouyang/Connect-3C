<template>
    <footer class="p-5 footer-bg">
        <div class="container d-lg-flex justify-content-between align-items-center">
            <div class="col text-center">
                <img src="~@/assets/img/icon.jpg" class="mb-3 footer-icon">
            </div>

            <div class="col text-center text-primary">
                <p>
                    <span class="fw-bold">Connect 3C</span><br>
                    手機 | 配件 | 3C 專賣店<br><br>
                    <i class="bi bi-telephone mx-2"></i>(02) 8881 - 8886<br>
                    <i class="bi bi-house-door mx-2"></i>新北市福二路3號<br>
                    <i class="bi bi-alarm mx-2"></i>每日11:30-21:00
                </p>
            </div>

            <div class="col text-center fs-3">
                <a href="" class="mx-3">
                    <i class="bi bi-facebook text-primary"></i>
                </a>

                <a href="" class="mx-3">
                    <i class="bi bi-instagram text-primary"></i>
                </a>

                <a href="" class="mx-3">
                    <i class="bi bi-envelope text-primary"></i>
                </a>
            </div>
        </div>
    </footer>

    <div class="d-flex flex-column justify-content-center align-items-center p-2 copy-text bg-primary">
        <div class="text-center">
            Copyright &copy; 2022 Connect 3C 版權所有<br>
            All Rights Reserved.
        </div>
    </div>
</template>

<style>
/* footer背景顏色 */
.footer-bg {
    background: #ffffff;
    }

/* footer icon寬高設定 */
.footer-icon {
    max-width: 150px;
    height: auto;
    }

/* 版權區塊文字顏色 */
.copy-text {
    color: #ffffff;
    }
</style>