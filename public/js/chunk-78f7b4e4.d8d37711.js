(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f7b4e4"],{"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),r=(i("4b85"),i("2b0e")),o=i("d9f7"),s=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+Object(s["D"])(n)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(v),justify:Object.keys(h),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var n=g[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(i),n.toLowerCase()}}var x=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:m}},p),render:function(t,e){var i=e.props,a=e.data,r=e.children,s="";for(var c in i)s+=String(i[c]);var l=x.get(s);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var n=i[t],a=y(e,t,n);a&&l.push(a)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),x.set(s,l)}(),t(i.tag,Object(o["a"])(a,{staticClass:"row",class:l}),r)}})},"169a":function(t,e,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),a=i("2909"),r=i("ade3"),o=(i("368e"),i("480e")),s=i("4ad4"),c=i("b848"),l=i("75eb"),u=i("e707"),d=i("e4d3"),v=i("21be"),f=i("f2e7"),h=i("a293"),m=i("58df"),p=i("d9bd"),b=i("80d2"),g=Object(m["a"])(s["a"],c["a"],l["a"],u["a"],d["a"],v["a"],f["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r["a"])(t,"v-dialog--active",this.isActive),Object(r["a"])(t,"v-dialog--persistent",this.persistent),Object(r["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(r["a"])(t,"v-dialog--scrollable",this.scrollable),Object(r["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["h"])("spacer","div","v-spacer")},"368e":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),a=i("58df"),r=i("7e2b"),o=i("3206");e["a"]=Object(a["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),r=(i("4b85"),i("2b0e")),o=i("d9f7"),s=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(s["D"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(s["D"])(e)]={type:[String,Number],default:null},t}),{})}(),v={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var h=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,a=e.data,r=e.children,s=(e.parent,"");for(var c in i)s+=String(i[c]);var l=h.get(s);return l||function(){var t,e;for(e in l=[],v)v[e].forEach((function(t){var n=i[t],a=f(e,t,n);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),h.set(s,l)}(),t(i.tag,Object(o["a"])(a,{class:l}),r)}})},"6aee":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout",[i("div",{staticClass:"d-flex"},[i("h1",{staticClass:"text-h4"},[t._v("العمليات")]),i("v-spacer")],1),i("v-divider",{staticClass:"my-4"}),i("v-card",[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.invoiceDialog,callback:function(e){t.invoiceDialog=e},expression:"invoiceDialog"}},[i("edit-invoice-form",{key:t.invoiceKey,ref:"invoiceForm",attrs:{invoice:t.invoice},on:{canceled:t.closeForm,submited:t.saveResult}})],1)],1)],1),i("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.invoices,"sort-by":"id","sort-desc":"",search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[i("v-menu",{attrs:{"offset-y":"","close-on-click":"",origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(e){return t.editInvoice(n)}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-pencil")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ادخال النتيجة ")])],1)],1)],1),0!==n.remain?i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(e){return t.addRemain(n)}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" المبلغ المتبقي ")])],1)],1)],1):t._e(),i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(e){return t.printResult(n)}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-printer")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" طباعة النتيجة")])],1)],1)],1),i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{on:{click:function(e){return t.generateCode(n)}}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-qrcode-plus")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" QR Code")])],1)],1)],1)],1)],1)]}},{key:"item.delivery_at",fn:function(e){var i=e.value;return[t._v(" "+t._s(new Date(i).toLocaleDateString())+" ")]}}],null,!0)}),i("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.alertDialog,callback:function(e){t.alertDialog=e},expression:"alertDialog"}},[i("v-card",[i("v-card-title",[t._v("مبلغ متبقي")]),i("v-divider"),i("div",{staticClass:"pa-5"},[t._v(" يرجى دفع باقي المبلغ قبل التمكن من طباعة النتيجة ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.alertDialog=!1}}},[t._v(" OK ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.remainDialog,callback:function(e){t.remainDialog=e},expression:"remainDialog"}},[i("v-card",[i("v-card-title",[t._v("مبلغ متبقي")]),i("v-divider"),i("div",{staticClass:"pa-5"},[i("v-text-field",{attrs:{readonly:"",dense:"",outlined:"",label:"مبلغ متبقي"},model:{value:t.remainAmount,callback:function(e){t.remainAmount=e},expression:"remainAmount"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.remainDialog=!1}}},[t._v(" اغلاق ")]),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.updateRemain}},[t._v(" تم الدفع ")])],1)],1)],1)],1)},a=[],r=(i("96cf"),i("1da1")),o=i("5530"),s=i("6a9b"),c=i("d14d"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-form",{ref:"invoiceForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[i("v-card-title",[i("span",[t._v("نتيجة الفحص")]),i("v-spacer"),t.formData.delivered?[i("span",{staticClass:"me-4"},[t._v("تم التسليم")]),i("v-avatar",{attrs:{color:"success",size:"24"}},[i("v-icon",{attrs:{dark:"",small:""}},[t._v("mdi-check")])],1)]:t._e()],2),i("v-divider"),i("v-card-text",[t.isLoading?i("div",{staticClass:"text-center"},[i("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1):i("div",[i("v-row",[i("v-col",{staticClass:"pb-0",attrs:{sm:"6",cols:"12"}},[i("v-select",{attrs:{items:t.results,rules:t.rules.result,label:"النتيجة",dense:"",outlined:""},model:{value:t.formData.result,callback:function(e){t.$set(t.formData,"result",e)},expression:"formData.result"}})],1),i("v-col",{staticClass:"pb-0",attrs:{sm:"6",cols:"12"}},[i("v-text-field",{attrs:{label:"ملاحظة",dense:"",outlined:""},model:{value:t.formData.note,callback:function(e){t.$set(t.formData,"note",e)},expression:"formData.note"}})],1)],1)],1)]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),i("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:!t.validForm,text:""}},[t._v("حفظ ")])],1)],1)],1)},u=[],d={name:"EditInvoiceForm",props:{invoice:{type:Object,default:function(){return{}}}},data:function(){return{validForm:!0,isEdit:!1,isLoading:!1,resultId:0,formData:{result:"",note:"",delivered:!1},results:[{text:"Positive",value:"Positive"},{text:"Negative",value:"Negative"}]}},computed:{rules:function(){return{result:[function(t){return!!t||"يرجى ادخال النتيجة"}]}}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.invoice.id){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.isLoading=!0,e.next=6,t.getResultAction(t.invoice.id);case 6:i=e.sent,t.formData.result=i.result,t.formData.note=i.note,t.formData.delivered=i.delivered,t.resultId=i.id,t.isEdit=!0,t.isLoading=!1,e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](2),t.isLoading=!1,console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})))()},methods:Object(o["a"])(Object(o["a"])({},c["o"]),{},{submited:function(){this.$emit("submited",{data:Object(o["a"])({operation_id:this.invoice.id},this.formData),isEdit:this.isEdit,id:this.resultId}),this.close()},close:function(){this.$refs.invoiceForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.invoiceForm.reset()}})},v=d,f=i("2877"),h=i("6544"),m=i.n(h),p=i("8212"),b=i("8336"),g=i("b0af"),y=i("99d9"),x=i("62ad"),w=i("ce7e"),O=i("4bd4"),k=i("132d"),j=i("490a"),_=i("0fd9"),C=i("b974"),D=i("2fa4"),V=i("8654"),A=Object(f["a"])(v,l,u,!1,null,"220a138b",null),$=A.exports;m()(A,{VAvatar:p["a"],VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:x["a"],VDivider:w["a"],VForm:O["a"],VIcon:k["a"],VProgressCircular:j["a"],VRow:_["a"],VSelect:C["a"],VSpacer:D["a"],VTextField:V["a"]});var S=i("add5"),I=i.n(S),E={name:"Invoices",components:{Layout:s["a"],EditInvoiceForm:$},data:function(){return{search:"",isLoading:!1,isEditMode:!1,invoiceDialog:!1,alertDialog:!1,remainDialog:!1,invoiceKey:0,invoice:{amount:"",total_amount:"",remain:""},items:[],total:0,options:{},remainAmount:0,currentId:0}},computed:Object(o["a"])(Object(o["a"])({},c["l"]),{},{headers:function(){return[{text:"رقم العملية",value:"id"},{text:"اسم العميل",value:"name"},{text:"اسم الفحص",value:"test"},{text:"المبلغ المتبقي",value:"remain"},{text:"تاريخ التسليم",value:"delivery_at"},{text:"إدارة",value:"actions",sortable:!1}]}}),created:function(){this.loadData()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},c["k"]),c["o"]),{},{loadData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getInvoicesAction();case 4:t.isLoading=!1,e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),console.log(e.t0),t.isLoading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},editInvoice:function(t){this.invoiceKey++,Object.assign(this.invoice,t),this.invoiceDialog=!0},saveResult:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n,a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t.data,a=t.isEdit,r=t.id,i.prev=1,e.isLoading=!0,!a){i.next=8;break}return i.next=6,e.editResultAction({resultData:n,resultId:r});case 6:i.next=10;break;case 8:return i.next=10,e.saveResultAction(n);case 10:e.$VAlert.success("تم حفظ النتيجة"),e.isLoading=!1,i.next=18;break;case 14:i.prev=14,i.t0=i["catch"](1),e.$VAlert.error("عذرا حدث خطأ!"),e.isLoading=!1;case 18:case"end":return i.stop()}}),i,null,[[1,14]])})))()},isDelivered:function(t){return t.delivered?"green lighten-4":""},addRemain:function(t){this.remainAmount=t.remain,this.currentId=t.invoice_id,this.remainDialog=!0},updateRemain:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.editRemainAction(t.currentId);case 3:t.$VAlert.success("تم حفظ النتيجة"),t.remainDialog=!1,t.loadData(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.remainDialog=!1;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},generateCode:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.getResultAction(t.id);case 3:I()({printable:"/print/qrcode/".concat(t.id),type:"pdf"}),i.next=9;break;case 6:i.prev=6,i.t0=i["catch"](0),e.$VAlert.info("لم يتم ادخال النتيجة بعد!");case 9:case"end":return i.stop()}}),i,null,[[0,6]])})))()},printResult:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(0===t.remain){i.next=3;break}return e.alertDialog=!0,i.abrupt("return");case 3:return i.prev=3,i.next=6,e.getResultAction(t.id);case 6:I()({printable:"/print/result/".concat(t.id),type:"pdf"}),i.next=12;break;case 9:i.prev=9,i.t0=i["catch"](3),e.$VAlert.info("لم يتم ادخال النتيجة بعد!");case 12:case"end":return i.stop()}}),i,null,[[3,9]])})))()},closeForm:function(){this.$refs.invoiceForm.reset(),this.isEditMode=!1,this.invoiceDialog=!1}})},B=E,L=i("8fea"),R=i("169a"),F=i("8860"),T=i("da13"),N=i("5d23"),M=i("1baa"),z=i("34c3"),K=i("e449"),Z=i("71d9"),P=Object(f["a"])(B,n,a,!1,null,"7a3416dd",null);e["default"]=P.exports;m()(P,{VBtn:b["a"],VCard:g["a"],VCardActions:y["a"],VCardTitle:y["c"],VDataTable:L["a"],VDialog:R["a"],VDivider:w["a"],VIcon:k["a"],VList:F["a"],VListItem:T["a"],VListItemContent:N["a"],VListItemGroup:M["a"],VListItemIcon:z["a"],VListItemTitle:N["b"],VMenu:K["a"],VSpacer:D["a"],VTextField:V["a"],VToolbar:Z["a"]})}}]);
//# sourceMappingURL=chunk-78f7b4e4.d8d37711.js.map