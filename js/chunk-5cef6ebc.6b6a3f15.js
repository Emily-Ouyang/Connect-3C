(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cef6ebc"],{"3a15":function(e,t,a){},a9a7:function(e,t,a){"use strict";a("3a15")},bd4c:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const l=Object(c["createElementVNode"])("div",{class:"loadingio-spinner-spin-69aofg588hf"},[Object(c["createElementVNode"])("div",{class:"ldio-4g11ls18ra"},[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div")])])],-1),o={class:"my-5 row justify-content-center"},s={class:"col-lg-6 col-md-12 col-sm-12 mb-5 px-4"},n=Object(c["createElementVNode"])("h3",{class:"text-center mb-5"}," 確認訂購明細 ",-1),d={class:"sticky-top"},r={class:"table align-middle"},i=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th"),Object(c["createElementVNode"])("th",null,"品名"),Object(c["createElementVNode"])("th",{style:{width:"110px"}},"數量"),Object(c["createElementVNode"])("th",null,"單價")])],-1),m=["disabled","onClick"],b=Object(c["createElementVNode"])("i",{class:"bi bi-trash3-fill"},null,-1),u=[b],p={key:0,class:"text-success"},O={class:"input-group input-group-sm"},j=["disabled","onChange","onUpdate:modelValue"],V={class:"input-group-text"},h={class:"text-end"},N={key:0,class:"text-success"},E=Object(c["createElementVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1),v={class:"text-end"},f={key:0},g=Object(c["createElementVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),C={class:"text-end text-success"},y={class:"input-group mb-3 input-group-sm"},x={class:"input-group-append"},k=Object(c["createElementVNode"])("h3",{class:"text-center mb-5"}," 填寫訂購人資訊 ",-1),w={class:"mb-3"},B=Object(c["createElementVNode"])("label",{for:"email",class:"form-label"},"Email *",-1),_={class:"mb-3"},L=Object(c["createElementVNode"])("label",{for:"name",class:"form-label"},"訂購人姓名 *",-1),$={class:"mb-3"},I=Object(c["createElementVNode"])("label",{for:"tel",class:"form-label"},"訂購人電話 *",-1),S={class:"mb-3"},q=Object(c["createElementVNode"])("label",{for:"address",class:"form-label"},"訂購人地址 *",-1),D={class:"mb-3"},U=Object(c["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1),M=Object(c["createElementVNode"])("div",{class:"text-end"},[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary"},"送出訂單")],-1);function T(e,t,a,b,T,z){const F=Object(c["resolveComponent"])("Loading"),J=Object(c["resolveComponent"])("Field"),A=Object(c["resolveComponent"])("ErrorMessage"),G=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(F,{active:e.isLoading},{default:Object(c["withCtx"])(()=>[l]),_:1},8,["active"]),Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",s,[n,Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("table",r,[i,Object(c["createElementVNode"])("tbody",null,[T.cart.carts?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(T.cart.carts,t=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t.id},[Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:T.status.loadingItem===t.id,onClick:e=>z.removeCartItem(t.id)},u,8,m)]),Object(c["createElementVNode"])("td",null,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.product.title)+" ",1),t.coupon?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p," 已套用優惠券 ")):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",O,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",class:"form-control",min:"1",disabled:t.id===T.status.loadingItem,onChange:e=>z.updateCart(t),"onUpdate:modelValue":e=>t.qty=e},null,40,j),[[c["vModelText"],t.qty,void 0,{number:!0}]]),Object(c["createElementVNode"])("div",V,"/ "+Object(c["toDisplayString"])(t.product.unit),1)])]),Object(c["createElementVNode"])("td",h,[T.cart.final_total!==T.cart.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",N,"折扣價：")):Object(c["createCommentVNode"])("",!0),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.$filters.currency(t.final_total)),1)])]))),128)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("tfoot",null,[Object(c["createElementVNode"])("tr",null,[E,Object(c["createElementVNode"])("td",v,Object(c["toDisplayString"])(e.$filters.currency(T.cart.total)),1)]),T.cart.final_total!==T.cart.total?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",f,[g,Object(c["createElementVNode"])("td",C,Object(c["toDisplayString"])(e.$filters.currency(T.cart.final_total)),1)])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",y,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>T.coupon_code=e),placeholder:"請輸入優惠碼"},null,512),[[c["vModelText"],T.coupon_code]]),Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[1]||(t[1]=(...e)=>z.addCouponCode&&z.addCouponCode(...e))}," 套用優惠碼 ")])])])]),Object(c["createVNode"])(G,{class:"col-lg-6 col-md-12 col-sm-12 px-5",onSubmit:z.createOrder},{default:Object(c["withCtx"])(({errors:e})=>[k,Object(c["createElementVNode"])("div",w,[B,Object(c["createVNode"])(J,{id:"email",name:"email",type:"email",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:T.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>T.form.user.email=e)},null,8,["class","modelValue"]),Object(c["createVNode"])(A,{name:"email",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",_,[L,Object(c["createVNode"])(J,{id:"name",name:"姓名",type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:T.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>T.form.user.name=e)},null,8,["class","modelValue"]),Object(c["createVNode"])(A,{name:"姓名",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",$,[I,Object(c["createVNode"])(J,{id:"tel",name:"電話",type:"tel",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:T.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>T.form.user.tel=e)},null,8,["class","modelValue"]),Object(c["createVNode"])(A,{name:"電話",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",S,[q,Object(c["createVNode"])(J,{id:"address",name:"地址",type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:T.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>T.form.user.address=e)},null,8,["class","modelValue"]),Object(c["createVNode"])(A,{name:"地址",class:"invalid-feedback"})]),Object(c["createElementVNode"])("div",D,[U,Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=e=>T.form.message=e)},null,512),[[c["vModelText"],T.form.message]])]),M]),_:1},8,["onSubmit"])])],64)}a("14d9");var z={data(){return{cart:{},coupon_code:"",status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{removeCartItem(e){this.status.loadingItem=e;const t="https://vue3-course-api.hexschool.io/api/store-api/cart/"+e;this.isLoading=!0,this.$http.delete(t).then(e=>{this.$httpMessageState(e,"移除購物車品項"),this.status.loadingItem="",this.getCart(),this.isLoading=!1})},updateCart(e){const t="https://vue3-course-api.hexschool.io/api/store-api/cart/"+e.id;this.isLoading=!0,this.status.loadingItem=e.id;const a={product_id:e.product_id,qty:e.qty};this.$http.put(t,{data:a}).then(()=>{this.status.loadingItem="",this.getCart(),this.isLoading=!1})},getCart(){const e="https://vue3-course-api.hexschool.io/api/store-api/cart";this.isLoading=!0,this.$http.get(e).then(e=>{this.cart=e.data.data,this.isLoading=!1})},addCouponCode(){const e="https://vue3-course-api.hexschool.io/api/store-api/coupon",t={code:this.coupon_code};this.isLoading=!0,this.$http.post(e,{data:t}).then(e=>{this.$httpMessageState(e,"套用優惠碼"),this.getCart(),this.isLoading=!1})},createOrder(){const e="https://vue3-course-api.hexschool.io/api/store-api/order",t=this.form;this.$http.post(e,{data:t}).then(e=>{let t=e.data.orderId;this.$router.push("/user/checkout/"+t)})}},created(){this.getCart()}},F=(a("a9a7"),a("6b0d")),J=a.n(F);const A=J()(z,[["render",T]]);t["default"]=A}}]);
//# sourceMappingURL=chunk-5cef6ebc.6b6a3f15.js.map