(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fb82b3"],{"3a2f":function(t,e,a){"use strict";a("a9e3");var n=a("ade3"),i=(a("9734"),a("4ad4")),r=a("a9ad"),s=a("16b7"),o=a("b848"),c=a("75eb"),l=a("f573"),d=a("f2e7"),u=a("80d2"),h=a("d9bd"),m=a("58df");e["a"]=Object(m["a"])(r["a"],s["a"],o["a"],c["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=i+e.width/2-a.width/2:(this.left||this.right)&&(r=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["g"])(this.maxWidth),minWidth:Object(u["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["s"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"46a2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"text-h4"},[t._v("الفروع")]),a("v-spacer"),a("v-btn",{staticClass:"mb-1 ms-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.formDialog=!0}}},[a("v-icon",{staticClass:"d-none d-sm-block me-2"},[t._v("mdi-plus")]),a("v-icon",{staticClass:"d-sm-none d-block"},[t._v("mdi-plus")]),a("span",{staticClass:"d-none d-sm-block"},[t._v(" إظافة فرع ")])],1)],1),a("v-divider",{staticClass:"my-4"}),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){t.mainDialog=!0}}},[t._v("تحديد الفرع الرئيسي")]),a("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[a("branch-form",{ref:"branchForm",attrs:{branch:t.updateBranch,"form-title":t.formTitle,"is-edit":t.isEditMode},on:{canceled:t.closeForm,submited:t.saveBranch}})],1),a("v-dialog",{attrs:{"max-width":"400"},on:{"click:outside":function(e){t.mainDialog=!1}},model:{value:t.mainDialog,callback:function(e){t.mainDialog=e},expression:"mainDialog"}},[a("v-card",[a("v-card-title",[t._v("تحديد الفرع الرئيسي")]),a("v-divider"),a("v-card-text",[a("v-select",{staticClass:"mt-4",attrs:{dense:"",label:"الفرع",items:t.branchList,outlined:"",required:""},model:{value:t.mainBranch,callback:function(e){t.mainBranch=e},expression:"mainBranch"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.mainDialog=!1}}},[t._v(" اغلاق ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveMain}},[t._v(" حفظ ")])],1)],1)],1)],1)],1),a("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.branches,"sort-by":"id","sort-desc":"",search:t.search,"item-class":t.isMain},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{dark:"",small:"","min-width":"40",color:"success"},on:{click:function(e){return t.editBranch(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v(" تعديل ")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-3",attrs:{dark:"",small:"","min-width":"40",color:"error"},on:{click:function(e){return t.deleteBranch(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("حذف")])])]}}],null,!0)}),a("confirm-dailog",{ref:"confirm"})],1)},i=[],r=(a("d81d"),a("b0c0"),a("96cf"),a("1da1")),s=a("5530"),o=a("6a9b"),c=a("fb0c"),l=a("d14d"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-form",{ref:"branchForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-divider"),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.name,dense:"",label:"اسم الفرع",outlined:"",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.email,dense:"",label:"الموقع",outlined:"",required:""},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1)],1),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.phone,dense:"",label:"رقم التلفون",outlined:"",required:""},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),a("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!t.validForm,text:""}},[t._v("حفظ")])],1)],1)],1)},u=[],h={name:"branchForm",props:{formTitle:{type:String,default:"Make new branch"},branch:{type:Object,default:function(){return{name:"",address:"",phone:""}}},isEdit:{type:Boolean,default:!1}},data:function(){return{validForm:!1,showPass:!1}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم المستخدم مطلوب"}],address:[function(t){return!!t||"الموقع مطلوب"}],phone:[function(t){return!!t||"رقم التلفون مطلوب"}]}},formData:function(){return this.branch}},methods:{submited:function(){this.$emit("submited",{name:this.formData.name,address:this.formData.address,phone:this.formData.phone}),this.close()},close:function(){this.$refs.branchForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.branchForm.reset()}}},m=h,f=a("2877"),v=a("6544"),p=a.n(v),b=a("8336"),g=a("b0af"),x=a("99d9"),k=a("62ad"),D=a("ce7e"),w=a("4bd4"),y=a("0fd9"),C=a("2fa4"),_=a("8654"),V=Object(f["a"])(m,d,u,!1,null,"044778b8",null),A=V.exports;p()(V,{VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:k["a"],VDivider:D["a"],VForm:w["a"],VRow:y["a"],VSpacer:C["a"],VTextField:_["a"]});var B={name:"Users",components:{Layout:o["a"],BranchForm:A,ConfirmDailog:c["a"]},data:function(){return{search:"",isLoading:!1,formDialog:!1,mainDialog:!1,isEditMode:!1,mainBranch:"",updateBranch:{name:"",phone:"",address:""}}},computed:Object(s["a"])(Object(s["a"])({},l["h"]),{},{headers:function(){return[{text:"الرقم",value:"id"},{text:"اسم الفرع",value:"name"},{text:"رقم التلفون",value:"phone"},{text:"العنوان",value:"address"},{text:"إدارة",value:"actions",sortable:!1}]},formTitle:function(){return this.isEditMode?"تعديل فرع":"اظافة فرع"},branchList:function(){return this.branches.map((function(t){return{value:t.id,text:t.name}}))}}),created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getBranchesAction();case 4:t.isLoading=!1,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:Object(s["a"])(Object(s["a"])({},l["g"]),{},{editBranch:function(t){this.isEditMode=!0,Object.assign(this.updateBranch,t),this.formDialog=!0},deleteBranch:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.confirm.open("حذف مستخدم","هل انت متأكد من حذف هذا الفرع؟");case 3:if(n=a.sent,!n){a.next=8;break}return a.next=7,e.deleteBranchAction(t.id);case 7:e.$VAlert.success("تم حذف الفرع");case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveBranch:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!e.isEditMode){a.next=7;break}return n=e.updateBranch.id,a.next=5,e.editBranchAction({branchData:t,branchId:n});case 5:a.next=9;break;case 7:return a.next=9,e.saveBranchAction(t);case 9:e.$VAlert.success("تم حفظ الفرع"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},saveMain:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.editMainAction(t.mainBranch);case 4:t.isLoading=!1,t.$VAlert.success("تم حفظ الفرع"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 12:t.mainDialog=!1;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))()},isMain:function(t){return t.is_main?"green lighten-5":""},closeForm:function(){this.$refs.branchForm.reset(),this.isEditMode=!1,this.formDialog=!1}})},T=B,O=a("8fea"),$=a("169a"),j=a("132d"),F=a("b974"),L=a("71d9"),M=a("3a2f"),S=Object(f["a"])(T,n,i,!1,null,"cbc7339a",null);e["default"]=S.exports;p()(S,{VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VDataTable:O["a"],VDialog:$["a"],VDivider:D["a"],VIcon:j["a"],VSelect:F["a"],VSpacer:C["a"],VTextField:_["a"],VToolbar:L["a"],VTooltip:M["a"]})},9734:function(t,e,a){}}]);
//# sourceMappingURL=chunk-70fb82b3.783ac5d9.js.map