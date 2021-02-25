(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265988d8"],{"4bd4":function(e,t,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var r=i("5530"),a=i("58df"),n=i("7e2b"),o=i("3206");t["a"]=Object(a["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,i=function(e){return e.$watch("hasError",(function(i){t.$set(t.errorBag,e._uid,i)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=i(e)))})):r.valid=i(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var i=this.watchers.find((function(e){return e._uid===t._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"6aee":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("layout",[i("div",{staticClass:"d-flex"},[i("h1",{staticClass:"text-h4"},[e._v("العمليات")]),i("v-spacer")],1),i("v-divider",{staticClass:"my-4"}),i("v-card",[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":e.closeForm},model:{value:e.invoiceDialog,callback:function(t){e.invoiceDialog=t},expression:"invoiceDialog"}},[i("edit-invoice-form",{key:e.invoiceKey,ref:"invoiceForm",attrs:{invoice:e.invoice},on:{canceled:e.closeForm,submited:e.saveResult}})],1)],1)],1),i("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:e.headers,loading:e.isLoading,items:e.invoices,"sort-by":"id","sort-desc":"",search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[i("v-menu",{attrs:{"offset-y":"","close-on-click":"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",a,!1),r),[i("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(t){return e.editInvoice(r)}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-pencil")])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(" ادخال النتيجة ")])],1)],1)],1),0!==r.remain?i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(t){return e.addRemain(r)}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(" المبلغ المتبقي ")])],1)],1)],1):e._e(),i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(t){return e.printResultClicked(r)}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-printer")])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(" طباعة النتيجة")])],1)],1)],1),i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(t){return e.generateCode(r)}}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-qrcode-plus")])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(" QR Code")])],1)],1)],1)],1)],1)]}},{key:"item.delivery_at",fn:function(t){var i=t.value;return[e._v(" "+e._s(new Date(i).toLocaleDateString())+" ")]}}],null,!0)}),i("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:e.remainDialog,callback:function(t){e.remainDialog=t},expression:"remainDialog"}},[i("v-card",[i("v-card-title",[e._v("مبلغ متبقي")]),i("v-divider"),i("div",{staticClass:"pa-5"},[i("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"مبلغ متبقي"},model:{value:e.remainAmount,callback:function(t){e.remainAmount=t},expression:"remainAmount"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.remainDialog=!1}}},[e._v(" اغلاق ")]),i("v-btn",{attrs:{color:"primary",text:""},on:{click:e.updateRemain}},[e._v(" تم الدفع ")])],1)],1)],1),i("confirm-dailog",{ref:"confirm"})],1)},a=[],n=(i("96cf"),i("1da1")),o=i("5530"),s=i("6a9b"),c=i("d14d"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-form",{ref:"invoiceForm",on:{submit:function(t){return t.preventDefault(),e.submited(t)}},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[i("v-card-title",[i("span",[e._v("نتيجة الفحص")]),i("v-spacer"),e.formData.delivered?[i("span",{staticClass:"me-4"},[e._v("تم التسليم")]),i("v-avatar",{attrs:{color:"success",size:"24"}},[i("v-icon",{attrs:{dark:"",small:""}},[e._v("mdi-check")])],1)]:e._e()],2),i("v-divider"),i("v-card-text",[e.isLoading?i("div",{staticClass:"text-center"},[i("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1):i("div",[i("v-row",[i("v-col",{staticClass:"pb-0",attrs:{sm:"6",cols:"12"}},[i("v-select",{attrs:{readonly:1===e.formData.delivered,items:e.results,rules:e.rules.result,label:"النتيجة",dense:"",outlined:""},model:{value:e.formData.result,callback:function(t){e.$set(e.formData,"result",t)},expression:"formData.result"}})],1),i("v-col",{staticClass:"pb-0",attrs:{sm:"6",cols:"12"}},[i("v-text-field",{attrs:{readonly:1===e.formData.delivered,label:"ملاحظة",dense:"",outlined:""},model:{value:e.formData.note,callback:function(t){e.$set(e.formData,"note",t)},expression:"formData.note"}})],1)],1)],1)]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("اغلاق")]),i("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!e.validForm,text:""}},[e._v("حفظ ")])],1)],1)],1)},u=[],d={name:"EditInvoiceForm",props:{invoice:{type:Object,default:function(){return{}}}},data:function(){return{validForm:!0,isEdit:!1,isLoading:!1,resultId:0,formData:{result:"",note:"",delivered:!1},results:[{text:"Positive",value:"Positive"},{text:"Negative",value:"Negative"}]}},computed:{rules:function(){return{result:[function(e){return!!e||"يرجى ادخال النتيجة"}]}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.invoice.id){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e.isLoading=!0,t.next=6,e.getResultAction(e.invoice.id);case 6:i=t.sent,e.formData.result=i.result,e.formData.note=i.note,e.formData.delivered=i.delivered,e.resultId=i.id,e.isEdit=!0,e.isLoading=!1,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](2),e.isLoading=!1,console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,15]])})))()},methods:Object(o["a"])(Object(o["a"])({},c["o"]),{},{submited:function(){this.$emit("submited",{data:Object(o["a"])({operation_id:this.invoice.id},this.formData),isEdit:this.isEdit,id:this.resultId}),this.close()},close:function(){this.$refs.invoiceForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.invoiceForm.reset()}})},v=d,m=i("2877"),f=i("6544"),h=i.n(f),p=i("8212"),g=i("8336"),b=i("b0af"),x=i("99d9"),k=i("62ad"),_=i("ce7e"),V=i("4bd4"),w=i("132d"),D=i("490a"),y=i("0fd9"),R=i("b974"),C=i("2fa4"),O=i("8654"),j=Object(m["a"])(v,l,u,!1,null,"a042fe88",null),$=j.exports;h()(j,{VAvatar:p["a"],VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:k["a"],VDivider:_["a"],VForm:V["a"],VIcon:w["a"],VProgressCircular:D["a"],VRow:y["a"],VSelect:R["a"],VSpacer:C["a"],VTextField:O["a"]});var A=i("fb0c"),I=i("fe63"),L={name:"Invoices",components:{Layout:s["a"],EditInvoiceForm:$,ConfirmDailog:A["a"]},data:function(){return{search:"",isLoading:!1,isEditMode:!1,invoiceDialog:!1,remainDialog:!1,invoiceKey:0,invoice:{amount:"",total_amount:"",remain:""},items:[],total:0,options:{},remainAmount:0,currentId:0}},computed:Object(o["a"])(Object(o["a"])({},c["l"]),{},{headers:function(){return[{text:"رقم العملية",value:"id"},{text:"اسم العميل",value:"name"},{text:"اسم الفحص",value:"test"},{text:"المبلغ المتبقي",value:"remain"},{text:"تاريخ التسليم",value:"delivery_at"},{text:"إدارة",value:"actions",sortable:!1}]}}),created:function(){this.loadData()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},c["k"]),c["o"]),{},{loadData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.getInvoicesAction();case 4:e.isLoading=!1,t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$VAlert.error("عذرا حدث خطأ!"),console.log(t.t0),e.isLoading=!1;case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()},editInvoice:function(e){this.invoiceKey++,Object.assign(this.invoice,e),this.invoiceDialog=!0},saveResult:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var r,a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=e.data,a=e.isEdit,n=e.id,i.prev=1,t.isLoading=!0,!a){i.next=8;break}return i.next=6,t.editResultAction({resultData:r,resultId:n});case 6:i.next=10;break;case 8:return i.next=10,t.saveResultAction(r);case 10:t.$VAlert.success("تم حفظ النتيجة"),t.isLoading=!1,i.next=18;break;case 14:i.prev=14,i.t0=i["catch"](1),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 18:case"end":return i.stop()}}),i,null,[[1,14]])})))()},isDelivered:function(e){return e.delivered?"green lighten-4":""},addRemain:function(e){this.remainAmount=e.remain,this.currentId=e.invoice_id,this.remainDialog=!0},updateRemain:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.editRemainAction(e.currentId);case 3:e.$VAlert.success("تم حفظ النتيجة"),e.remainDialog=!1,e.loadData(),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$VAlert.error("عذرا حدث خطأ!"),e.remainDialog=!1;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},generateCode:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,t.getResultAction(e.id);case 3:Object(I["a"])("/print/qrcode/".concat(e.id)),i.next=9;break;case 6:i.prev=6,i.t0=i["catch"](0),t.$VAlert.info("لم يتم ادخال النتيجة بعد!");case 9:case"end":return i.stop()}}),i,null,[[0,6]])})))()},printResultClicked:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(0===e.remain){i.next=6;break}return i.next=3,t.$refs.confirm.open("مبلغ متبقي","يرجى دفع باقي المبلغ قبل التمكن من طباعة النتيجة","طباعة");case 3:return r=i.sent,r&&t.printResult(e),i.abrupt("return");case 6:t.printResult(e);case 7:case"end":return i.stop()}}),i)})))()},printResult:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,t.getResultAction(e.id);case 3:Object(I["a"])("/print/result/".concat(e.id)),i.next=9;break;case 6:i.prev=6,i.t0=i["catch"](0),t.$VAlert.info("لم يتم ادخال النتيجة بعد!");case 9:case"end":return i.stop()}}),i,null,[[0,6]])})))()},closeForm:function(){this.$refs.invoiceForm.reset(),this.isEditMode=!1,this.invoiceDialog=!1}})},E=L,F=i("8fea"),B=i("169a"),T=i("8860"),S=i("da13"),z=i("5d23"),P=i("1baa"),K=i("34c3"),M=i("e449"),N=i("71d9"),q=Object(m["a"])(E,r,a,!1,null,"e9d93510",null);t["default"]=q.exports;h()(q,{VBtn:g["a"],VCard:b["a"],VCardActions:x["a"],VCardTitle:x["c"],VDataTable:F["a"],VDialog:B["a"],VDivider:_["a"],VIcon:w["a"],VList:T["a"],VListItem:S["a"],VListItemContent:z["a"],VListItemGroup:P["a"],VListItemIcon:K["a"],VListItemTitle:z["b"],VMenu:M["a"],VSpacer:C["a"],VTextField:O["a"],VToolbar:N["a"]})},fb0c:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{attrs:{"max-width":"350"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close(t)}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(e._s(e.title))]),i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}]},[e._v(e._s(e.message))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v("اغلاق")]),i("v-btn",{attrs:{color:"primary",text:""},on:{click:e.agree}},[e._v(e._s(e.okText))])],1)],1)],1)},a=[],n=(i("d3b7"),{data:function(){return{dialog:!1,confirm:null,cancel:null,message:null,title:null,okText:""}},methods:{open:function(e,t){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"حذف";return this.dialog=!0,this.title=e,this.message=t,this.okText=r,new Promise((function(e,t){i.confirm=e,i.cancel=t}))},agree:function(){this.confirm(!0),this.dialog=!1},close:function(){this.confirm(!1),this.dialog=!1}}}),o=n,s=i("2877"),c=i("6544"),l=i.n(c),u=i("8336"),d=i("b0af"),v=i("99d9"),m=i("169a"),f=i("2fa4"),h=Object(s["a"])(o,r,a,!1,null,"0295171c",null);t["a"]=h.exports;l()(h,{VBtn:u["a"],VCard:d["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:m["a"],VSpacer:f["a"]})}}]);
//# sourceMappingURL=chunk-265988d8.56566880.js.map