(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b7061c"],{a55b:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a={class:"login-wrap min-vh-100"},o={class:"container"},r={class:"col-md-6"},n=Object(s["createElementVNode"])("h1",{class:"h3 my-5 font-weight-normal text-center text-primary"},[Object(s["createElementVNode"])("i",{class:"bi bi-person-workspace"}),Object(s["createTextVNode"])(" 登入後台")],-1),l={class:"mb-4"},i=Object(s["createElementVNode"])("label",{for:"inputEmail",class:"sr-only"},"帳號",-1),d={class:"mb-4"},u=Object(s["createElementVNode"])("label",{for:"inputPassword",class:"sr-only"},"密碼",-1),b=Object(s["createStaticVNode"])('<div class="container"><div class="row"><div class="form-check col-6"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 記住我 </label></div><div class="text-end col-6"><p><a href="" class="forget">忘記密碼?</a></p></div></div></div><div class="d-grid gap-2 col-6 mx-auto text-center mt-5"><button class="btn btn-primary" type="submit"><i class="bi bi-person-check-fill"></i> 登入 </button></div>',2),p={class:"d-grid gap-2 col-6 mx-auto text-center mt-4"},m=Object(s["createElementVNode"])("i",{class:"bi bi-arrow-clockwise"},null,-1),h=Object(s["createTextVNode"])(" 返回首頁 "),f=[m,h];function v(e,t,c,m,h,v){return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",a,[Object(s["createElementVNode"])("div",o,[Object(s["createElementVNode"])("form",{class:"row justify-content-center",onSubmit:t[3]||(t[3]=Object(s["withModifiers"])((...e)=>v.signIn&&v.signIn(...e),["prevent"]))},[Object(s["createElementVNode"])("div",r,[n,Object(s["createElementVNode"])("div",l,[i,Object(s["withDirectives"])(Object(s["createElementVNode"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"請輸入電子郵件",required:"",autofocus:"","onUpdate:modelValue":t[0]||(t[0]=e=>h.user.username=e)},null,512),[[s["vModelText"],h.user.username]])]),Object(s["createElementVNode"])("div",d,[u,Object(s["withDirectives"])(Object(s["createElementVNode"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"密碼為8個字元，內含英文字母及數字",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>h.user.password=e)},null,512),[[s["vModelText"],h.user.password]])]),b,Object(s["createElementVNode"])("div",p,[Object(s["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=(...e)=>v.goBack&&v.goBack(...e))},f)])])],32)])])}c("14d9");var j={data(){return{user:{username:"",password:""}}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then(e=>{if(e.data.success){const t=e.data.token,c=e.data.expired;document.cookie=`hexToken=${t}; expires=${new Date(c)};`,this.$router.push("/dashboard/products")}})},goBack(){this.$router.push("/")}}},w=(c("b6ac"),c("6b0d")),O=c.n(w);const k=O()(j,[["render",v]]);t["default"]=k},b6ac:function(e,t,c){"use strict";c("ef98")},ef98:function(e,t,c){}}]);
//# sourceMappingURL=chunk-28b7061c.5264ce6b.js.map