(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{473:function(t,e,r){"use strict";r.r(e);var o=r(25),n=r(7);r(31),r(35),r(43),r(28),r(42),r(16),r(61),r(36),r(62);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={layout:"social",data:function(){return{user:null,loading:!1,isDisable:!1}},head:{title:"Tài khoản"+r(3).a.siteName,htmlAttrs:{lang:"en"}},methods:{updatePorfile:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.isDisable){e.next=8;break}return t.loading=!0,r={avatar:t.user.avatar,name:t.user.name,new_password:t.user.new_password,old_password:t.user.old_password},e.next=6,t.$http.post("/v2/update-profile",r);case 6:t.loading=!1,t.$notify.success({title:"Success",message:"Cập nhật thành công"});case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.loading=!1,t.$notify.error({title:"Error",message:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},watch:{"$store.state.user":function(){this.user=c({},this.$store.state.user)}},mounted:function(){var t=localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")):null;t&&null!=t&&t.api_key?this.user=c({},this.$store.state.user):this.isDisable=!0}},m=r(11),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content-header row"},[r("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[r("div",{staticClass:"row breadcrumbs-top"},[r("div",{staticClass:"col-12"},[r("h2",{staticClass:"content-header-title float-left mb-0"},[t._v("Tài khoản")]),t._v(" "),r("div",{staticClass:"breadcrumb-wrapper"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("NuxtLink",{attrs:{to:"/home"}},[t._v("Trang chủ")])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("NuxtLink",{attrs:{to:"/profile"}},[t._v("Tài khoản")])],1)])])])])]),t._v(" "),r("div",{staticClass:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"})]),t._v(" "),r("div",{staticClass:"content-body"},[r("section",{attrs:{id:"basic-horizontal-layouts"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 col-md-6 col-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"form"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"first-name-column"}},[t._v("Tên tài khoản")]),t._v(" "),t.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name",name:"fname-column"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"first-name-column"}},[t._v("Ảnh đại diện (Nhập link ảnh)")]),t._v(" "),t.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.avatar,expression:"user.avatar"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập link ảnh không quá 190 ký tự",name:"fname-column"},domProps:{value:t.user.avatar},on:{input:function(e){e.target.composing||t.$set(t.user,"avatar",e.target.value)}}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"first-name-column"}},[t._v("Mật khẩu cũ")]),t._v(" "),t.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.old_password,expression:"user.old_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Để trống nếu không muốn đổi mật khẩu",name:"fname-column"},domProps:{value:t.user.old_password},on:{input:function(e){e.target.composing||t.$set(t.user,"old_password",e.target.value)}}}):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"first-name-column"}},[t._v("Mật khẩu mới")]),t._v(" "),t.user?r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.new_password,expression:"user.new_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Để trống nếu không muốn đổi mật khẩu",name:"fname-column"},domProps:{value:t.user.new_password},on:{input:function(e){e.target.composing||t.$set(t.user,"new_password",e.target.value)}}}):t._e()])]),t._v(" "),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-primary mr-1 waves-effect waves-float waves-light",on:{click:t.updatePorfile}},[t._v(t._s(t.loading?"Đang cập nhật...":"Cập nhật"))])])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-4 col-md-6 col-12"},[r("div",{staticClass:"card card-profile"},[r("img",{staticClass:"img-fluid card-img-top",staticStyle:{height:"148px!important"},attrs:{src:"/app-assets/images/illustration/email.svg",alt:"Profile Cover Photo"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"profile-image-wrapper"},[r("div",{staticClass:"profile-image"},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.user&&t.user.avatar?t.user.avatar:"https://i.imgur.com/SFFQPrk.png",alt:"Profile Picture"}})])])]),t._v(" "),r("h3",[t._v(t._s(t.user?t.user.username:""))]),t._v(" "),r("h6",{staticClass:"text-muted"},[t._v("Viet Nam")]),t._v(" "),r("div",{staticClass:"badge badge-light-primary profile-badge"},[t._v(t._s(t.user?t.user.level_name:""))]),t._v(" "),r("hr",{staticClass:"mb-2"}),t._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._m(1),t._v(" "),r("div",[r("h6",{staticClass:"text-muted font-weight-bolder"},[t._v("Số tiền")]),t._v(" "),r("h3",{staticClass:"mb-0"},[t._v(t._s(new Intl.NumberFormat("de-DE").format(t.user?t.user.coin:""))+" đ")])]),t._v(" "),t._m(2)])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h4",{staticClass:"card-title"},[t._v("Tài khoản")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h6",{staticClass:"text-muted font-weight-bolder"}),t._v(" "),r("h3",{staticClass:"mb-0"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h6",{staticClass:"text-muted font-weight-bolder"}),t._v(" "),r("h3",{staticClass:"mb-0"})])}],!1,null,null,null);e.default=component.exports}}]);