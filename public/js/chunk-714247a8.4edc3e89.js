(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-714247a8"],{"3a2f":function(t,e,a){"use strict";a("a9e3");var n=a("ade3"),i=(a("9734"),a("4ad4")),o=a("a9ad"),s=a("16b7"),r=a("b848"),c=a("75eb"),l=a("f573"),d=a("f2e7"),u=a("80d2"),m=a("d9bd"),f=a("58df");e["a"]=Object(f["a"])(o["a"],s["a"],r["a"],c["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=i+e.width/2-a.width/2:(this.left||this.right)&&(o=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["g"])(this.maxWidth),minWidth:Object(u["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["s"])(this,"activator",!0)&&Object(m["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},9734:function(t,e,a){},9887:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"text-h4"},[t._v("الشركات")]),a("v-spacer"),a("v-btn",{staticClass:"mb-1 ms-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.formDialog=!0}}},[a("v-icon",{staticClass:"d-none d-sm-block me-2"},[t._v("mdi-plus")]),a("v-icon",{staticClass:"d-sm-none d-block"},[t._v("mdi-plus")]),a("span",{staticClass:"d-none d-sm-block"},[t._v(" إظافة شركة ")])],1)],1),a("v-divider",{staticClass:"my-4"}),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[a("company-form",{ref:"companyForm",attrs:{company:t.updateCompany,"form-title":t.formTitle,"is-edit":t.isEditMode},on:{canceled:t.closeForm,submited:t.saveCompany}})],1)],1)],1),a("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.companies,"sort-by":"id","sort-desc":"",search:t.search},scopedSlots:t._u([{key:"item.discount",fn:function(e){var a=e.value;return[t._v(" "+t._s(a+"%")+" ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{dark:"",small:"","min-width":"40",color:"success"},on:{click:function(e){return t.editCompany(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v(" تعديل ")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-3",attrs:{dark:"",small:"","min-width":"40",color:"error"},on:{click:function(e){return t.deleteCompany(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("حذف")])])]}}],null,!0)}),a("confirm-dailog",{ref:"confirm"})],1)},i=[],o=(a("96cf"),a("1da1")),s=a("5530"),r=a("6a9b"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-form",{ref:"companyForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-divider"),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.name,dense:"",label:"اسم الشركة",outlined:"",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.email,dense:"",type:"email",label:"البريد الإلكتروني",outlined:"",required:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1)],1),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.phone,dense:"",label:"رقم التلفون",outlined:"",required:""},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{dense:"",label:"التخفيض",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("span",{staticClass:"mt-1 primary--text text-body-2 mark"},[t._v("%")])]},proxy:!0}]),model:{value:t.formData.discount,callback:function(e){t.$set(t.formData,"discount",e)},expression:"formData.discount"}})],1)],1),a("v-row",[t.isEdit?t._e():a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{type:t.showPass?"text":"password",rules:t.rules.password,dense:"",label:"كلمة المرور","append-icon":t.showPass?"mdi-eye":"mdi-eye-off",outlined:"",required:""},on:{"click:append":function(e){t.showPass=!t.showPass}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),a("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!t.validForm,text:""}},[t._v("حفظ")])],1)],1)],1)},l=[],d=(a("b0c0"),{name:"UserForm",props:{formTitle:{type:String,default:"Make new company"},company:{type:Object,default:function(){return{name:"",email:"",phone:"",discount:"",password:""}}},isEdit:{type:Boolean,default:!1}},data:function(){return{validForm:!1,showPass:!1}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم المستخدم مطلوب"}],email:[function(t){return!!t||"بريد إلكتروني مطلوب"},function(t){return/.+@.+\..+/.test(t)||"يرجى إدخال بريد إلكتروني صحيح"}],phone:[function(t){return!!t||"رقم التلفون مطلوب"}],discount:[function(t){return!!t||"يرجى تحديد التخفيض"}],password:[function(t){return!!t||"كلمة المرور مطلوبة"}]}},formData:function(){return this.company}},methods:{submited:function(){this.$emit("submited",{name:this.formData.name,email:this.formData.email,phone:this.formData.phone,discount:this.formData.discount,password:this.isEdit?void 0:this.formData.password,password_confirmation:this.isEdit?void 0:this.formData.password}),this.close()},close:function(){this.$refs.companyForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.companyForm.reset()}}}),u=d,m=a("2877"),f=a("6544"),p=a.n(f),h=a("8336"),v=a("b0af"),b=a("99d9"),g=a("62ad"),y=a("ce7e"),x=a("4bd4"),w=a("0fd9"),C=a("2fa4"),k=a("8654"),D=Object(m["a"])(u,c,l,!1,null,"99ffef12",null),_=D.exports;p()(D,{VBtn:h["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:g["a"],VDivider:y["a"],VForm:x["a"],VRow:w["a"],VSpacer:C["a"],VTextField:k["a"]});var A=a("fb0c"),V=a("d14d"),O={name:"Companys",components:{Layout:r["a"],CompanyForm:_,ConfirmDailog:A["a"]},data:function(){return{search:"",isLoading:!1,formDialog:!1,isEditMode:!1,updateCompany:{name:"",email:"",phone:"",fee:"",password:""}}},computed:Object(s["a"])(Object(s["a"])({},V["j"]),{},{headers:function(){return[{text:"الرقم",value:"id"},{text:"اسم الشركة",value:"name"},{text:"رقم التلفون",value:"phone"},{text:"البريد الإلكتروني",value:"email"},{text:"التخفيض",value:"discount"},{text:"إدارة",value:"actions",sortable:!1}]},formTitle:function(){return this.isEditMode?"تعديل شركة":"اظافة شركة"}}),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getCompaniesAction();case 4:t.isLoading=!1,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:Object(s["a"])(Object(s["a"])({},V["i"]),{},{editCompany:function(t){this.isEditMode=!0,Object.assign(this.updateCompany,t),this.formDialog=!0},deleteCompany:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.confirm.open("حذف شركة","هل انت متأكد من حذف هذا الشركة؟");case 3:if(n=a.sent,!n){a.next=8;break}return a.next=7,e.deleteCompanyAction(t.id);case 7:e.$VAlert.success("تم حذف الشركة");case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveCompany:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!e.isEditMode){a.next=7;break}return n=e.updateCompany.id,a.next=5,e.editCompanyAction({companyData:t,companyId:n});case 5:a.next=9;break;case 7:return a.next=9,e.saveCompanyAction(t);case 9:e.$VAlert.success("تم حفظ الشركة"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},closeForm:function(){this.$refs.companyForm.reset(),this.isEditMode=!1,this.formDialog=!1}})},T=O,$=a("8fea"),j=a("169a"),F=a("132d"),L=a("71d9"),E=a("3a2f"),S=Object(m["a"])(T,n,i,!1,null,"44ec4196",null);e["default"]=S.exports;p()(S,{VBtn:h["a"],VCard:v["a"],VDataTable:$["a"],VDialog:j["a"],VDivider:y["a"],VIcon:F["a"],VSpacer:C["a"],VTextField:k["a"],VToolbar:L["a"],VTooltip:E["a"]})}}]);
//# sourceMappingURL=chunk-714247a8.4edc3e89.js.map