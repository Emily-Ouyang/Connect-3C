(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b71434c4"],{"64aa":function(e,t,o){"use strict";o("73e0")},"73e0":function(e,t,o){},f329:function(e,t,o){"use strict";o.r(t);var l=o("7a23");const c=Object(l["createElementVNode"])("div",{class:"loadingio-spinner-spin-69aofg588hf"},[Object(l["createElementVNode"])("div",{class:"ldio-4g11ls18ra"},[Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")]),Object(l["createElementVNode"])("div",null,[Object(l["createElementVNode"])("div")])])],-1),n={class:"text-end mt-3 mx-4"},a={class:"table mt-4"},d=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr",null,[Object(l["createElementVNode"])("th",null,"名稱"),Object(l["createElementVNode"])("th",null,"折扣百分比"),Object(l["createElementVNode"])("th",null,"到期日"),Object(l["createElementVNode"])("th",null,"是否啟用"),Object(l["createElementVNode"])("th",null,"編輯")])],-1),i={key:0,class:"text-success"},s={key:1,class:"text-muted"},r={class:"btn-group"},p=["onClick"],u=Object(l["createElementVNode"])("i",{class:"bi bi-pencil-square"},null,-1),b=[u],m=["onClick"],O=Object(l["createElementVNode"])("i",{class:"bi bi-trash"},null,-1),h=[O];function j(e,t,o,u,O,j){const V=Object(l["resolveComponent"])("Loading"),N=Object(l["resolveComponent"])("couponModal"),E=Object(l["resolveComponent"])("DelModal");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Object(l["createVNode"])(V,{active:O.isLoading},{default:Object(l["withCtx"])(()=>[c]),_:1},8,["active"]),Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>j.openCouponModal(!0))}," 新增優惠券 ")]),Object(l["createElementVNode"])("table",a,[d,Object(l["createElementVNode"])("tbody",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(O.coupons,(t,o)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:o},[Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(t.title),1),Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(t.percent)+"%",1),Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(e.$filters.date(t.due_date)),1),Object(l["createElementVNode"])("td",null,[1===t.is_enabled?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",i,"啟用")):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",s,"未啟用"))]),Object(l["createElementVNode"])("td",null,[Object(l["createElementVNode"])("div",r,[Object(l["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>j.openCouponModal(!1,t)},b,8,p),Object(l["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>j.openDelCouponModal(t)},h,8,m)])])]))),128))])]),Object(l["createVNode"])(N,{coupon:O.tempCoupon,ref:"couponModal",onUpdateCoupon:j.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(l["createVNode"])(E,{item:O.tempCoupon,ref:"delModal",onDelItem:j.delCoupon},null,8,["item","onDelItem"])])}const V={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog",role:"document"},E={class:"modal-content border-0"},v=Object(l["createElementVNode"])("div",{class:"modal-header bg-primary text-white"},[Object(l["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),Object(l["createElementVNode"])("button",{type:"button",class:"btn-close bg-white mx-1","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},f={class:"mb-3"},M=Object(l["createElementVNode"])("label",{for:"title"},"標題",-1),g={class:"mb-3"},k=Object(l["createElementVNode"])("label",{for:"coupon_code"},"優惠碼",-1),x={class:"mb-3"},w=Object(l["createElementVNode"])("label",{for:"due_date"},"到期日",-1),y={class:"mb-3"},_=Object(l["createElementVNode"])("label",{for:"price"},"折扣百分比",-1),D={class:"mb-3"},$={class:"form-check"},B=Object(l["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),L={class:"modal-footer"},S=Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},[Object(l["createElementVNode"])("i",{class:"bi bi-x-circle-fill"}),Object(l["createTextVNode"])(" 取消更新 ")],-1),T=Object(l["createElementVNode"])("i",{class:"bi bi-check-circle-fill"},null,-1),U=Object(l["createTextVNode"])(" 我要更新 "),I=[T,U];function J(e,t,o,c,n,a){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",V,[Object(l["createElementVNode"])("div",N,[Object(l["createElementVNode"])("div",E,[v,Object(l["createElementVNode"])("div",C,[Object(l["createElementVNode"])("div",f,[M,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>n.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[l["vModelText"],n.tempCoupon.title]])]),Object(l["createElementVNode"])("div",g,[k,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>n.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[l["vModelText"],n.tempCoupon.code]])]),Object(l["createElementVNode"])("div",x,[w,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>n.due_date=e)},null,512),[[l["vModelText"],n.due_date]])]),Object(l["createElementVNode"])("div",y,[_,Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[3]||(t[3]=e=>n.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[l["vModelText"],n.tempCoupon.percent,void 0,{number:!0}]])]),Object(l["createElementVNode"])("div",D,[Object(l["createElementVNode"])("div",$,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>n.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[l["vModelCheckbox"],n.tempCoupon.is_enabled]]),B])])]),Object(l["createElementVNode"])("div",L,[S,Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",n.tempCoupon))},I)])])])],512)}var q=o("e0ae"),F={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[q["a"]]},P=o("6b0d"),z=o.n(P);const A=z()(F,[["render",J]]);var G=A,H=o("6ff1"),K={components:{CouponModal:G,DelModal:H["a"]},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t},this.$refs.couponModal.showModal()},openDelCouponModal(e){this.tempCoupon={...e};const t=this.$refs.delModal;t.showModal()},getCoupons(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/store-api/admin/coupons";this.$http.get(e,this.tempProduct).then(e=>{this.coupons=e.data.coupons,this.isLoading=!1})},updateCoupon(e){if(this.isNew){const t="https://vue3-course-api.hexschool.io/api/store-api/admin/coupon";this.$http.post(t,{data:e}).then(e=>{this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()})}else{const e="https://vue3-course-api.hexschool.io/api/store-api/admin/coupon/"+this.tempCoupon.id;this.$http.put(e,{data:this.tempCoupon}).then(e=>{this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()})}},delCoupon(){const e="https://vue3-course-api.hexschool.io/api/store-api/admin/coupon/"+this.tempCoupon.id;this.isLoading=!0,this.$http.delete(e).then(e=>{this.$httpMessageState(e,"刪除優惠券");const t=this.$refs.delModal;t.hideModal(),this.getCoupons()})}},created(){this.getCoupons()}};o("64aa");const Q=z()(K,[["render",j]]);t["default"]=Q}}]);
//# sourceMappingURL=chunk-b71434c4.db818e39.js.map