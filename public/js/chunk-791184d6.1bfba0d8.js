(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-791184d6"],{"18aa":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"d-flex"},[i("h1",{staticClass:"text-h4"},[t._v("الفحوصات")]),i("v-spacer")],1),i("v-divider",{staticClass:"my-4"}),i("v-card",[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-spacer"),i("v-btn",{staticClass:"mb-1 ms-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.formDialog=!0}}},[i("v-icon",{staticClass:"d-none d-sm-block me-2"},[t._v("mdi-plus")]),i("v-icon",{staticClass:"d-sm-none d-block"},[t._v("mdi-plus")]),i("span",{staticClass:"d-none d-sm-block"},[t._v(" إظافة فحص ")])],1),i("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[i("test-form",{ref:"testForm",attrs:{test:t.updateTest,"form-title":t.formTitle,"is-edit":t.isEditMode},on:{canceled:t.closeForm,submited:t.saveTest}})],1)],1)],1),i("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.tests,"sort-by":"id","sort-desc":"",search:t.search},scopedSlots:t._u([{key:"item.duration",fn:function(e){var i=e.value;return[t._v(" "+t._s(i+" ساعات")+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dark:"",small:"","min-width":"40",color:"success"},on:{click:function(e){return t.editTest(a)}}},n),[i("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[i("span",[t._v(" تعديل ")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({staticClass:"mx-3",attrs:{dark:"",small:"","min-width":"40",color:"error"},on:{click:function(e){return t.deleteTest(a)}}},n),[i("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[i("span",[t._v("حذف")])])]}}],null,!0)}),i("confirm-dailog",{ref:"confirm"})],1)},n=[],s=(i("96cf"),i("1da1")),r=i("5530"),o=i("6a9b"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-form",{ref:"testForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-divider"),i("v-card-text",[i("v-row",[i("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[i("v-text-field",{attrs:{rules:t.rules.name,dense:"",label:"اسم الفحص",outlined:"",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),i("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[i("v-text-field",{attrs:{rules:t.rules.price,dense:"",label:"السعر",outlined:"",required:""},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1),i("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[i("v-text-field",{attrs:{rules:t.rules.duration,dense:"",label:"المدة الزمنية",outlined:"",required:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("span",{staticClass:"mt-1 primary--text text-body-2 mark"},[t._v("ساعات")])]},proxy:!0}]),model:{value:t.formData.duration,callback:function(e){t.$set(t.formData,"duration",e)},expression:"formData.duration"}})],1),i("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[t.isEdit?i("v-text-field",{attrs:{dense:"",label:"ملاحظة",outlined:"",required:""},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}}):t._e()],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),i("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!t.validForm,text:""}},[t._v("حفظ")])],1)],1)],1)},l=[],u=(i("b0c0"),{name:"testForm",props:{formTitle:{type:String,default:"Make new test"},test:{type:Object,default:function(){return{name:"",price:"",duration:"",note:""}}},isEdit:{type:Boolean,default:!1}},data:function(){return{validForm:!1,showPass:!1}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم الفحص مطلوب"}],price:[function(t){return!!t||"السعر مطلوب"}],duration:[function(t){return!!t||"المدة الزمنية مطلوبة"}]}},formData:function(){return this.test}},methods:{submited:function(){this.$emit("submited",{name:this.formData.name,price:this.formData.price,duration:this.formData.duration,note:this.formData.note}),this.close()},close:function(){this.$refs.testForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.testForm.reset()}}}),d=u,f=i("2877"),h=i("6544"),m=i.n(h),v=i("8336"),p=i("b0af"),b=i("99d9"),g=i("62ad"),x=i("ce7e"),_=i("4bd4"),k=i("0fd9"),y=i("2fa4"),w=i("8654"),T=Object(f["a"])(d,c,l,!1,null,"4e86ed36",null),V=T.exports;m()(T,{VBtn:v["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:g["a"],VDivider:x["a"],VForm:_["a"],VRow:k["a"],VSpacer:y["a"],VTextField:w["a"]});var D=i("fb0c"),C=i("d14d"),O={name:"Tests",components:{Layout:o["a"],TestForm:V,ConfirmDailog:D["a"]},data:function(){return{search:"",isLoading:!1,formDialog:!1,isEditMode:!1,updateTest:{name:"",price:"",duration:"",note:""}}},computed:Object(r["a"])(Object(r["a"])({},C["q"]),{},{headers:function(){return[{text:"الرقم",value:"id"},{text:"اسم الفحص",value:"name"},{text:"السعر",value:"price"},{text:"المدة الزمنية",value:"duration"},{text:"إدارة",value:"actions",sortable:!1}]},formTitle:function(){return this.isEditMode?"تعديل فحص":"اظافة فحص"}}),created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getTestsAction();case 4:t.isLoading=!1,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:Object(r["a"])(Object(r["a"])({},C["p"]),{},{editTest:function(t){this.isEditMode=!0,Object.assign(this.updateTest,t),this.formDialog=!0},deleteTest:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$refs.confirm.open("حذف فحص","هل انت متأكد من حذف هذا الفحص؟");case 3:if(a=i.sent,!a){i.next=8;break}return i.next=7,e.deleteTestAction(t.id);case 7:e.$VAlert.success("تم حذف الفحص");case 8:i.next=13;break;case 10:i.prev=10,i.t0=i["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 13:case"end":return i.stop()}}),i,null,[[0,10]])})))()},saveTest:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(i.prev=0,!e.isEditMode){i.next=7;break}return a=e.updateTest.id,i.next=5,e.editTestAction({testData:t,testId:a});case 5:i.next=9;break;case 7:return i.next=9,e.saveTestAction(t);case 9:e.$VAlert.success("تم حفظ الفحص"),i.next=15;break;case 12:i.prev=12,i.t0=i["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 15:case"end":return i.stop()}}),i,null,[[0,12]])})))()},closeForm:function(){this.$refs.testForm.reset(),this.isEditMode=!1,this.formDialog=!1}})},$=O,A=i("8fea"),j=i("169a"),B=i("132d"),E=i("71d9"),F=i("3a2f"),L=Object(f["a"])($,a,n,!1,null,"1d975c4d",null);e["default"]=L.exports;m()(L,{VBtn:v["a"],VCard:p["a"],VDataTable:A["a"],VDialog:j["a"],VDivider:x["a"],VIcon:B["a"],VSpacer:y["a"],VTextField:w["a"],VToolbar:E["a"],VTooltip:F["a"]})},"3a2f":function(t,e,i){"use strict";i("a9e3");var a=i("ade3"),n=(i("9734"),i("4ad4")),s=i("a9ad"),r=i("16b7"),o=i("b848"),c=i("75eb"),l=i("f573"),u=i("f2e7"),d=i("80d2"),f=i("d9bd"),h=i("58df");e["a"]=Object(h["a"])(s["a"],r["a"],o["a"],c["a"],l["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||a?s=n+e.width/2-i.width/2:(this.left||this.right)&&(s=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=a+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=a+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["g"])(this.maxWidth),minWidth:Object(d["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d["t"])(this,"activator",!0)&&Object(f["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===d["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(a["a"])(t,this.contentClass,!0),Object(a["a"])(t,"menuable__content__active",this.isActive),Object(a["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),n=i("58df"),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},9734:function(t,e,i){},fb0c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"350"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close(e)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.close}},[t._v("اغلاق")]),i("v-btn",{attrs:{color:"error darken-1",text:""},on:{click:t.agree}},[t._v("حذف")])],1)],1)],1)},n=[],s=(i("d3b7"),{data:function(){return{dialog:!1,confirm:null,cancel:null,message:null,title:null}},methods:{open:function(t,e){var i=this;return this.dialog=!0,this.title=t,this.message=e,new Promise((function(t,e){i.confirm=t,i.cancel=e}))},agree:function(){this.confirm(!0),this.dialog=!1},close:function(){this.confirm(!1),this.dialog=!1}}}),r=s,o=i("2877"),c=i("6544"),l=i.n(c),u=i("8336"),d=i("b0af"),f=i("99d9"),h=i("169a"),m=i("2fa4"),v=Object(o["a"])(r,a,n,!1,null,"5325cfb4",null);e["a"]=v.exports;l()(v,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:h["a"],VSpacer:m["a"]})}}]);
//# sourceMappingURL=chunk-791184d6.1bfba0d8.js.map