(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ba0ea6"],{"3a2f":function(t,e,a){"use strict";a("a9e3");var n=a("ade3"),i=(a("9734"),a("4ad4")),s=a("a9ad"),r=a("16b7"),o=a("b848"),c=a("75eb"),l=a("f573"),d=a("f2e7"),u=a("80d2"),h=a("d9bd"),v=a("58df");e["a"]=Object(v["a"])(s["a"],r["a"],o["a"],c["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=i+e.width/2-a.width/2:(this.left||this.right)&&(s=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["g"])(this.maxWidth),minWidth:Object(u["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["s"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=i["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["w"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},9734:function(t,e,a){},f31d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"text-h4"},[t._v("العملاء")]),a("v-spacer"),a("v-btn",{staticClass:"mb-1 ms-2",attrs:{color:"primary",dark:""},on:{click:function(e){t.formDialog=!0}}},[a("v-icon",{staticClass:"d-none d-sm-block me-2"},[t._v("mdi-plus")]),a("v-icon",{staticClass:"d-sm-none d-block"},[t._v("mdi-plus")]),a("span",{staticClass:"d-none d-sm-block"},[t._v(" إظافة دفعة ")])],1)],1),a("v-divider",{staticClass:"my-4"}),a("v-card",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-text-field",{attrs:{label:"بحث",dense:"",outlined:"","single-line":"","hide-details":"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":t.closeForm},model:{value:t.formDialog,callback:function(e){t.formDialog=e},expression:"formDialog"}},[a("batch-form",{ref:"batchForm",attrs:{"form-title":t.formTitle,"is-edit":t.isEditMode,batch:t.updateBatch},on:{submited:t.saveBatch,canceled:t.closeForm}})],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.agentsDialog,callback:function(e){t.agentsDialog=e},expression:"agentsDialog"}},[a("v-card",[a("v-card-title",[a("h4",{staticClass:"mb-2"},[t._v("قائمة العملاء")])]),a("v-card-text",[a("v-simple-table",{attrs:{"max-height":"300px","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-right"},[t._v("اسم العميل")]),a("th",{staticClass:"text-right"},[t._v("عمر العميل")]),a("th",{staticClass:"text-right"},[t._v("جنس العميل")]),a("th",{staticClass:"text-right"},[t._v("نوع الهوية")]),a("th",{staticClass:"text-right"},[t._v("رقم الهوية")])])]),a("tbody",t._l(t.agents,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.age))]),a("td",[t._v(t._s(e.gender))]),a("td",[t._v(t._s(e.identity))]),a("td",[t._v(t._s(e.identity_number))])])})),0)]},proxy:!0}])})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.agentsDialog=!1}}},[t._v("اغلاق")])],1)],1)],1)],1)],1),a("v-data-table",{staticClass:"mt-8 elevation-16",attrs:{headers:t.headers,loading:t.isLoading,items:t.batches,"sort-by":"id","sort-desc":"",search:t.search},on:{"click:row":t.loadAgents},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{dark:"",small:"","min-width":"40",color:"success"},on:{click:function(e){return e.stopPropagation(),t.editBatch(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v(" تعديل ")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mx-3",attrs:{dark:"",small:"","min-width":"40",color:"error"},on:{click:function(e){return e.stopPropagation(),t.deleteBatch(n)}}},i),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("حذف")])])]}}],null,!0)}),a("confirm-dailog",{ref:"confirm"})],1)},i=[],s=(a("96cf"),a("1da1")),r=a("5530"),o=a("6a9b"),c=a("fb0c"),l=a("d14d"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-form",{ref:"batchForm",on:{submit:function(e){return e.preventDefault(),t.submited(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-divider"),a("v-card-text",[a("v-row",{staticClass:"mb-2"},[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.name,dense:"",label:"اسم الدفعة",outlined:"",required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{dense:"",label:"رقم التعريف",outlined:"",required:""},model:{value:t.formData.identifier,callback:function(e){t.$set(t.formData,"identifier",e)},expression:"formData.identifier"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-select",{attrs:{items:t.branchList,rules:t.rules.branch_id,dense:"",label:"الفرع",outlined:"",required:""},model:{value:t.formData.branch_id,callback:function(e){t.$set(t.formData,"branch_id",e)},expression:"formData.branch_id"}})],1)],1),a("agents-list",{model:{value:t.formData.agents,callback:function(e){t.$set(t.formData,"agents",e)},expression:"formData.agents"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("اغلاق")]),a("v-btn",{attrs:{color:"blue darken-1",type:"submit",disabled:t.saveDisabled,text:""}},[t._v("حفظ")])],1)],1)],1)},u=[],h=(a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("v-container",{staticClass:"grey lighten-4 rounded-lg mb-3"},[a("h4",{staticClass:"mb-2"},[t._v("قائمة العملاء")]),a("v-simple-table",{attrs:{"max-height":"300px","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-right"},[t._v("اسم العميل")]),a("th",{staticClass:"text-right"},[t._v("عمر العميل")]),a("th",{staticClass:"text-right"},[t._v("جنس العميل")]),a("th",{staticClass:"text-right"},[t._v("نوع الهوية")]),a("th",{staticClass:"text-right"},[t._v("رقم الهوية")]),a("th")])]),a("tbody",t._l(t.agents,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.age))]),a("td",[t._v(t._s(e.gender))]),a("td",[t._v(t._s(e.identity))]),a("td",[t._v(t._s(e.identity_number))]),a("td",{staticClass:"text-left"},[a("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(a){return t.deleteAgent(e.name)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1),a("v-form",{ref:"form",model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-container",{staticClass:"grey lighten-4 rounded-lg"},[a("v-row",{staticClass:"pt-5"},[a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{rules:t.rules.name,dense:"",outlined:"",label:"اسم العميل"},model:{value:t.agentData.name,callback:function(e){t.$set(t.agentData,"name",e)},expression:"agentData.name"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("div",{staticClass:"d-flex"},[a("v-text-field",{attrs:{rules:t.rules.age,dense:"",outlined:"",label:"عمر العميل",type:"number"},model:{value:t.agentData.age,callback:function(e){t.$set(t.agentData,"age",e)},expression:"agentData.age"}}),a("v-select",{staticClass:"ms-3",attrs:{items:t.genders,rules:t.rules.gender,dense:"",outlined:"",label:"جنس العميل"},model:{value:t.agentData.gender,callback:function(e){t.$set(t.agentData,"gender",e)},expression:"agentData.gender"}})],1)]),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-select",{attrs:{items:t.identitys,rules:t.rules.identity,dense:"",outlined:"",label:"نوع الهوية"},model:{value:t.agentData.identity,callback:function(e){t.$set(t.agentData,"identity",e)},expression:"agentData.identity"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-text-field",{attrs:{type:"number",rules:t.rules.identity_number,dense:"",outlined:"",label:"رقم الهوية"},model:{value:t.agentData.identity_number,callback:function(e){t.$set(t.agentData,"identity_number",e)},expression:"agentData.identity_number"}})],1),a("v-col",{staticClass:"py-0",attrs:{sm:"6",cols:"12"}},[a("v-select",{attrs:{items:t.travelTypes,rules:t.rules.travel_type,dense:"",outlined:"",label:"نوع السفر"},model:{value:t.agentData.travel_type,callback:function(e){t.$set(t.agentData,"travel_type",e)},expression:"agentData.travel_type"}})],1)],1),a("div",{staticClass:"d-flex mt-4"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{disabled:!t.validForm,fab:"",small:"",color:"primary"},on:{click:t.addAgent}},n),[a("v-icon",[t._v("mdi-plus")])],1)]}}])},[a("span",[t._v("إظافة عميل")])])],1)],1)],1)],1)}),v=[],f=(a("4de4"),{name:"CompanyAgents",props:{value:{type:Array,default:function(){return[]}}},data:function(){return{agents:[],validForm:!1,genders:[{text:"ذكر",value:1},{text:"انثى",value:2}],identitys:[{text:"شخصية",value:"Personal"},{text:"جواز سفر",value:"Passport"}],agentData:{name:"",age:"",gender:"",travel_type:"",identity:"",identity_number:""},travelTypes:[{text:"بر",value:"بر"},{text:"بحر",value:"بحر"},{text:"جوء",value:"جوء"}]}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم العميل مطلوب"}],age:[function(t){return!!t||"عمر العميل مطلوب"}],gender:[function(t){return!!t||"جنس العميل مطلوب"}],travel_type:[function(t){return!!t||"يرجى تحديد نوع السفر"}],identity:[function(t){return!!t||"يرجى تحديد نوع الهوية"}],identity_number:[function(t){return!!t||"رقم الهوية مطلوب"}]}}},watch:{value:{handler:function(t){t&&t.length&&(this.agents=t)},immediate:!0}},mounted:function(){this.$emit("input",this.agents)},methods:{addAgent:function(){this.agents.push(Object(r["a"])({},this.agentData)),this.$refs.form.reset(),this.$emit("input",this.agents)},deleteAgent:function(t){this.agents=this.agents.filter((function(e){return e.name!==t})),this.$emit("input",this.agents)}}}),m=f,p=a("2877"),g=a("6544"),b=a.n(g),x=a("8336"),_=a("62ad"),y=a("a523"),D=a("4bd4"),C=a("132d"),k=a("0fd9"),w=a("b974"),V=a("1f4f"),A=a("8654"),B=a("3a2f"),$=Object(p["a"])(m,h,v,!1,null,"0c666f9c",null),T=$.exports;b()($,{VBtn:x["a"],VCol:_["a"],VContainer:y["a"],VForm:D["a"],VIcon:C["a"],VRow:k["a"],VSelect:w["a"],VSimpleTable:V["a"],VTextField:A["a"],VTooltip:B["a"]});var O={components:{agentsList:T},name:"BatchForm",props:{formTitle:{type:String,default:"Make new company"},batch:{type:Object,default:function(){return{name:"",identifier:"",branch_id:"",agents:[]}}},isEdit:{type:Boolean,default:!1}},data:function(){return{validForm:!1,branches:[]}},computed:{rules:function(){return{name:[function(t){return!!t||"اسم الدفعة مطلوب"}],branch_id:[function(t){return!!t||"يرجى تحديد الفرع"}]}},formData:function(){return this.batch},saveDisabled:function(){return!this.validForm||0===this.formData.agents.length},branchList:function(){return this.branches.map((function(t){return{value:t.id,text:t.name}}))}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.loadBranches();case 3:t.branches=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$VAlert.error("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{loadBranches:l["g"].getBranchesAction,submited:function(){this.$emit("submited",Object(r["a"])({},this.formData)),this.close()},close:function(){this.$refs.batchForm.reset(),this.$emit("canceled")},reset:function(){this.$refs.batchForm.reset()}}},F=O,j=a("b0af"),S=a("99d9"),L=a("ce7e"),R=a("2fa4"),E=Object(p["a"])(F,d,u,!1,null,"f55c57f2",null),I=E.exports;b()(E,{VBtn:x["a"],VCard:j["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:_["a"],VDivider:L["a"],VForm:D["a"],VRow:k["a"],VSelect:w["a"],VSpacer:R["a"],VTextField:A["a"]});var M={name:"CompanyAgents",components:{Layout:o["a"],ConfirmDailog:c["a"],BatchForm:I},data:function(){return{search:"",isLoading:!1,formDialog:!1,agentsDialog:!1,isEditMode:!1,updateBatch:{name:"",identifier:"",branch_id:""},agents:[]}},computed:Object(r["a"])(Object(r["a"])({},l["f"]),{},{headers:function(){return[{text:"الرقم",value:"id"},{text:"اسم الدفعة",value:"name"},{text:"رقم التعريف",value:"identifier"},{text:"عدد العملاء",value:"agents_count"},{text:"إدارة",value:"actions",sortable:!1}]},formTitle:function(){return this.isEditMode?"تعديل دفعة":"اظافة دفعة"}}),created:function(){this.loadBatches()},methods:Object(r["a"])(Object(r["a"])({},l["e"]),{},{loadBatches:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.getBatchesAction();case 4:t.isLoading=!1,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$VAlert.error("عذرا حدث خطأ!"),t.isLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},editBatch:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isEditMode=!0,a.next=3,e.getBatchAction(t.id);case 3:n=a.sent,Object.assign(e.updateBatch,n),e.updateBatch.branch_id=n.agents[0].branch_id,e.formDialog=!0;case 7:case"end":return a.stop()}}),a)})))()},loadAgents:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getBatchAction(t.id);case 2:n=a.sent,e.agents=n.agents,e.agentsDialog=!0;case 5:case"end":return a.stop()}}),a)})))()},deleteBatch:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.confirm.open("حذف دفعة","هل انت متأكد من حذف هذا الدفعة؟");case 3:if(n=a.sent,!n){a.next=8;break}return a.next=7,e.deleteBatchAction(t.id);case 7:e.$VAlert.success("تم حذف الدفعة");case 8:a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveBatch:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!e.isEditMode){a.next=7;break}return n=e.updateBatch.id,a.next=5,e.editBatchAction({batchData:t,batchId:n});case 5:a.next=9;break;case 7:return a.next=9,e.saveBatchAction(t);case 9:e.loadBatches(),e.$VAlert.success("تم حفظ الدفعة"),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](0),e.$VAlert.error("عذرا حدث خطأ!");case 16:case"end":return a.stop()}}),a,null,[[0,13]])})))()},closeForm:function(){this.$refs.batchForm.reset(),this.isEditMode=!1,this.formDialog=!1}})},z=M,W=a("8fea"),q=a("169a"),P=a("71d9"),Y=Object(p["a"])(z,n,i,!1,null,"9dfbfab4",null);e["default"]=Y.exports;b()(Y,{VBtn:x["a"],VCard:j["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDataTable:W["a"],VDialog:q["a"],VDivider:L["a"],VIcon:C["a"],VSimpleTable:V["a"],VSpacer:R["a"],VTextField:A["a"],VToolbar:P["a"],VTooltip:B["a"]})}}]);
//# sourceMappingURL=chunk-73ba0ea6.0641fa17.js.map