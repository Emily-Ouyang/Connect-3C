<template>
<!-- Modal -->
<div class="modal fade" id="indexLoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="exampleModalLabel">
            <span><i class="bi bi-person-heart"></i> 登入會員</span>
        </h5>
        <button type="button" class="btn-close bg-white mx-1" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div class="container">
            <form class="row justify-content-center">
                <div class="col-md-6">
                    <div class="mb-4">
	      <label for="inputEmail" class="sr-only">帳號</label>
	      <input
	        type="email"
	        id="inputEmail"
	        class="form-control"
	        placeholder="請輸入電子郵件"
	        required
	        autofocus
	      />
	    </div>

        <div class="mb-4">
	      <label for="inputPassword" class="sr-only">密碼</label>
	      <input
	        type="password"
	        id="inputPassword"
	        class="form-control"
	        placeholder="密碼為8個字元"
	        required
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
				  <a href="">忘記密碼?</a>
			    </p>
		      </div>
			</div>
		</div>
    </div>
</form>
</div>
</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          <i class="bi bi-person-x-fill"></i> 放棄登入
        </button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
          <i class="bi bi-person-check-fill"></i> 好想登入
        </button>
      </div>
    </div>
  </div>
</div>
</template>