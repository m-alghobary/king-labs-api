(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70d22a9f"],{"18aa":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"text-h4"},[t._v("الفحوصات")]),a("v-spacer")],1),a("v-divider",{staticClass:"my-4"}),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-btn",{staticClass:"mb-1 ms-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.formDialog=!0}}},[a("v-icon",{staticClass:"d-none d-sm-block me-2"},[t._v("mdi-plus")]),a("v-icon",{staticClass:"d-sm-none d-block"},[t._v("mdi-plus")]),a("span",{staticClass:"d-none d-sm-block"},[t._v(" إظافة فحص ")])],1),a("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[a("test-form",{ref:"testForm",attrs:{test:t.updateTest,"form-title":t.formTitle,"is-edit":t.isEditMode},on:{canceled:t.closeForm,submited:t.saveTest}})],1)],1)],1),a("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.tests,"sort-by":"id","sort-desc":"",search:t.search},scopedSlots:t._u([{key:"item.duration",fn:function(e){var a=e.value;return[t._v(" "+t._s(a+" ساعات")+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{dark:"",small:"","min-width":"40",color:"success"},on:{click:function(e){return t.editTest(i)}}},n),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v(" تعديل ")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"mx-3",attrs:{dark:"",small:"","min-width":"40",color:"error"},on:{click:function(e){return t.deleteTest(i)}}},n),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("حذف")])])]}}],null,!0)}),a("confirm-dailog",{ref:"confirm"})],1)},n=[],s=(a("96cf"),a("1da1")),o=a("5530"),r=a("6a9b"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-form",{ref:"testForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-divider"),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.name,dense:"",label:"اسم الفحص",outlined:"",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.price,dense:"",label:"السعر",outlined:"",required:""},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.duration,dense:"",label:"المدة الزمنية",outlined:"",required:""},scopedSlots:t._u([{key:"append",fn:function(){return[a("span",{staticClass:"mt-1 primary--text text-body-2 mark"},[t._v("ساعات")])]},proxy:!0}]),model:{value:t.formData.duration,callback:function(e){t.$set(t.formData,"duration",e)},expression:"formData.duration"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[t.isEdit?a("v-text-field",{attrs:{dense:"",label:"ملاحظة",outlined:"",required:""},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}}):t._e()],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),a("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!t.validForm,text:""}},[t._v("حفظ")])],1)],1)],1)},l=[],u=(a("b0c0"),{name:"testForm",props:{formTitle:{type:String,default:"Make new test"},test:{type:Object,default:function(){return{name:"",price:"",duration:"",note:""}}},isEdit:{type:Boolean,default:!1}},data:function(){return{validForm:!1,showPass:!1}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم الفحص مطلوب"}],price:[function(t){return!!t||"السعر مطلوب"}],duration:[function(t){return!!t||"المدة الزمنية مطلوبة"}]}},formData:function(){return this.test}},methods:{submited:function(){this.$emit("submited",{name:this.formData.name,price:this.formData.price,duration:this.formData.duration,note:this.formData.note}),this.close()},close:function(){this.$refs.testForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.testForm.reset()}}}),d=u,f=a("2877"),h=a("6544"),m=a.n(h),v=a("8336"),p=a("b0af"),b=a("99d9"),g=a("62ad"),x=a("ce7e"),k=a("4bd4"),y=a("0fd9"),D=a("2fa4"),T=a("8654"),w=Object(f["a"])(d,c,l,!1,null,"4e86ed36",null),_=w.exports;m()(w,{VBtn:v["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:g["a"],VDivider:x["a"],VForm:k["a"],VRow:y["a"],VSpacer:D["a"],VTextField:T["a"]});var C=a("fb0c"),A=a("d14d"),V={name:"Tests",components:{Layout:r["a"],TestForm:_,ConfirmDailog:C["a"]},data:function(){return{search:"",isLoading:!1,formDialog:!1,isEditMode:!1,updateTest:{name:"",price:"",duration:"",note:""}}},computed:Object(o["a"])(Object(o["a"])({},A["q"]),{},{headers:function(){return[{text:"الرقم",value:"id"},{text:"اسم الفحص",value:"name"},{text:"السعر",value:"price"},{text:"المدة الزمنية",value:"duration"},{text:"إدارة",value:"actions",sortable:!1}]},formTitle:function(){return this.isEditMode?"تعديل فحص":"اظافة فحص"}}),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getTestsAction();case 4:t.isLoading=!1,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:Object(o["a"])(Object(o["a"])({},A["p"]),{},{editTest:function(t){this.isEditMode=!0,Object.assign(this.updateTest,t),this.formDialog=!0},deleteTest:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.confirm.open("حذف فحص","هل انت متأكد من حذف هذا الفحص؟");case 3:if(i=a.sent,!i){a.next=8;break}return a.next=7,e.deleteTestAction(t.id);case 7:e.$VAlert.success("تم حذف الفحص");case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveTest:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!e.isEditMode){a.next=7;break}return i=e.updateTest.id,a.next=5,e.editTestAction({testData:t,testId:i});case 5:a.next=9;break;case 7:return a.next=9,e.saveTestAction(t);case 9:e.$VAlert.success("تم حفظ الفحص"),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},closeForm:function(){this.$refs.testForm.reset(),this.isEditMode=!1,this.formDialog=!1}})},O=V,F=a("8fea"),$=a("169a"),j=a("132d"),L=a("71d9"),S=a("3a2f"),E=Object(f["a"])(O,i,n,!1,null,"1d975c4d",null);e["default"]=E.exports;m()(E,{VBtn:v["a"],VCard:p["a"],VDataTable:F["a"],VDialog:$["a"],VDivider:x["a"],VIcon:j["a"],VSpacer:D["a"],VTextField:T["a"],VToolbar:L["a"],VTooltip:S["a"]})},"3a2f":function(t,e,a){"use strict";a("a9e3");var i=a("ade3"),n=(a("9734"),a("4ad4")),s=a("a9ad"),o=a("16b7"),r=a("b848"),c=a("75eb"),l=a("f573"),u=a("f2e7"),d=a("80d2"),f=a("d9bd"),h=a("58df");e["a"]=Object(h["a"])(s["a"],o["a"],r["a"],c["a"],l["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=n+e.width/2-a.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+e.height/2-a.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["g"])(this.maxWidth),minWidth:Object(d["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d["s"])(this,"activator",!0)&&Object(f["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===d["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},9734:function(t,e,a){}}]);
//# sourceMappingURL=chunk-70d22a9f.6f233970.js.map