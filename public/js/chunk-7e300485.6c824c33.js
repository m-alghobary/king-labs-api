(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e300485"],{"013f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login mx-4"},[i("div",[i("h1",{staticClass:"text-center mb-10 mt-10",staticStyle:{color:"#2057a7"}},[t._v("King diagonsitc lab")]),i("v-card",{staticClass:"mx-auto",attrs:{width:"400"}},[i("div",{staticClass:"d-flex justify-center pt-2"},[i("img",{attrs:{src:n("b640"),width:"200"}})]),i("v-card-title",{staticClass:"justify-center pb-4"},[i("v-divider",{staticClass:"my-1"}),i("div",{staticClass:"mx-4"},[t._v("تسجيل الدخول")]),i("v-divider",{staticClass:"my-1"})],1),i("v-card-text",[i("div",{staticClass:"d-flex justify-center mb-6"},[i("v-btn-toggle",{attrs:{mandatory:"",color:"primary"},model:{value:t.loginType,callback:function(e){t.loginType=e},expression:"loginType"}},[i("v-btn",{attrs:{outlined:"","max-width":"80",width:"80",value:"user"}},[t._v("مستخدم")]),i("v-btn",{attrs:{outlined:"","max-width":"80",width:"80",value:"company"}},[t._v("شركة")])],1)],1),i("v-form",{ref:"loginForm",on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[i("v-text-field",{attrs:{label:"البريد الإلكتروني",outlined:"",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{type:t.showPass?"text":"password",label:"كلمة المرور",outlined:"","append-icon":t.showPass?"mdi-eye":"mdi-eye-off",required:"",rules:t.passRules},on:{"click:append":function(e){t.showPass=!t.showPass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-btn",{attrs:{type:"submit",loading:t.isLoading,large:"",block:"",color:"success"}},[t._v("تسجيل الدخول")])],1)],1)],1),i("v-snackbar",{attrs:{color:"error",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[i("v-btn",t._b({attrs:{dark:"",text:"",icon:""},on:{click:function(e){t.showError=!1}}},"v-btn",n,!1),[i("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[t._v(" كلمة المرور او البريد الإلكتروني غير صحيح ")])],1)])},a=[],r=(n("96cf"),n("1da1")),s=n("d14d"),o={data:function(){return{loginType:"user",email:"",password:"",validForm:!1,showPass:!1,showError:!1,isLoading:!1,emailRules:[function(t){return!!t||"بريد إلكتروني مطلوب"},function(t){return/.+@.+\..+/.test(t)||"يرجى إدخال بريد إلكتروني صحيح"}],passRules:[function(t){return!!t||"كلمة المرور مطلوبة"}]}},methods:{loginAction:s["c"].logIn,loginUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.prev=1,e.next=4,t.loginAction({email:t.email,password:t.password,type:t.loginType});case 4:n=e.sent,t.isLoading=!1,t.$router.push(t.$route.query.redirectFrom||"user"===n.type?{name:"dashboard"}:{name:"companyAgents"}),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),t.isLoading=!1,t.showError=!0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},c=o,u=(n("e934"),n("2877")),l=n("6544"),d=n.n(l),h=n("8336"),f=n("5530"),v=(n("7e58"),n("604c")),b=v["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return v["a"].options.computed.classes.call(this)}},methods:{genData:v["a"].options.methods.genData}}),m=n("a9ad"),p=n("58df"),g=Object(p["a"])(b,m["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},b.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(f["a"])({},b.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),y=n("b0af"),O=n("99d9"),j=n("ce7e"),A=n("4bd4"),w=n("132d"),V=n("2db4"),x=n("8654"),B=Object(u["a"])(c,i,a,!1,null,"5e16b507",null);e["default"]=B.exports;d()(B,{VBtn:h["a"],VBtnToggle:g,VCard:y["a"],VCardText:O["b"],VCardTitle:O["c"],VDivider:j["a"],VForm:A["a"],VIcon:w["a"],VSnackbar:V["a"],VTextField:x["a"]})},"166a":function(t,e,n){},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var s=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||Object(s["a"])(t)||o()}},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var i=n("5530"),a=n("58df"),r=n("7e2b"),s=n("3206");e["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"604c":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("4de4"),n("7db0"),n("c740"),n("4160"),n("caad"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("2532"),n("159b");var i=n("5530"),a=(n("166a"),n("a452")),r=n("7560"),s=n("58df"),o=n("d9bd"),c=Object(s["a"])(a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});c.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"7e58":function(t,e,n){},"8ce9":function(t,e,n){},"90a2":function(t,e,n){"use strict";n("7db0");var i=n("53ca");function a(t,e){var n=e.modifiers||{},a=e.value,s="object"===Object(i["a"])(a)?a:{handler:a,options:{}},o=s.handler,c=s.options,u=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!n.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));o(e,i,a)}t._observe.init&&n.once?r(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:u},u.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var s={inserted:a,unbind:r};e["a"]=s},"9d26":function(t,e,n){"use strict";var i=n("132d");e["a"]=i["a"]},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),r=n("a691"),s=n("50c4"),o=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),h=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,b=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var n,i,l,d,h,f,g=o(this),y=s(g.length),O=a(t,y),j=arguments.length;if(0===j?n=i=0:1===j?(n=0,i=y-O):(n=j-2,i=b(v(r(e),0),y-O)),y+n-i>m)throw TypeError(p);for(l=c(g,i),d=0;d<i;d++)h=O+d,h in g&&u(l,d,g[h]);if(l.length=i,n<i){for(d=O;d<y-i;d++)h=d+i,f=d+n,h in g?g[f]=g[h]:delete g[f];for(d=y;d>y-i+n;d--)delete g[d-1]}else if(n>i)for(d=y-i;d>O;d--)h=d+i-1,f=d+n-1,h in g?g[f]=g[h]:delete g[f];for(d=0;d<n;d++)g[d+O]=arguments[d+2];return g.length=y-i+n,l}})},b640:function(t,e,n){t.exports=n.p+"img/logo.51cb0ab6.jpg"},ce7e:function(t,e,n){"use strict";var i=n("5530"),a=(n("8ce9"),n("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d14d:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"s",(function(){return o})),n.d(e,"r",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return v})),n.d(e,"f",(function(){return b})),n.d(e,"e",(function(){return m})),n.d(e,"q",(function(){return p})),n.d(e,"p",(function(){return g})),n.d(e,"l",(function(){return y})),n.d(e,"k",(function(){return O})),n.d(e,"o",(function(){return j})),n.d(e,"n",(function(){return A})),n.d(e,"m",(function(){return w}));var i=n("5530"),a=n("2f62"),r=Object(i["a"])(Object(i["a"])({},Object(a["d"])("global/auth",["currentUser"])),Object(a["c"])("global/auth",["isLoggedIn"])),s=Object(i["a"])({},Object(a["b"])("global/auth",["logIn","logOut"])),o=Object(i["a"])({},Object(a["d"])("users",["users"])),c=Object(i["a"])({},Object(a["b"])("users",{getUsersAction:"getUsersList",saveUserAction:"saveUser",deleteUserAction:"deleteUser",editUserAction:"editUser",suspendUserAction:"suspendUser",activateUserAction:"activateUser"})),u=Object(i["a"])({},Object(a["d"])("branches",["branches"])),l=Object(i["a"])({},Object(a["b"])("branches",{getBranchesAction:"getBranchesList",saveBranchAction:"saveBranch",deleteBranchAction:"deleteBranch",editBranchAction:"editBranch",editMainAction:"editMain"})),d=Object(i["a"])({},Object(a["d"])("agents",["agents"])),h=Object(i["a"])({},Object(a["b"])("agents",{getAgentsAction:"getAgentsList",saveAgentAction:"saveAgent",deleteAgentAction:"deleteAgent",editAgentAction:"editAgent"})),f=Object(i["a"])({},Object(a["d"])("companies",["companies"])),v=Object(i["a"])({},Object(a["b"])("companies",{getCompaniesAction:"getCompaniesList",saveCompanyAction:"saveCompany",deleteCompanyAction:"deleteCompany",getCompanyAction:"getCompany",editCompanyAction:"editCompany"})),b=Object(i["a"])({},Object(a["d"])("batches",["batches"])),m=Object(i["a"])({},Object(a["b"])("batches",{getBatchesAction:"getBatchesList",saveBatchAction:"saveBatch",deleteBatchAction:"deleteBatch",editBatchAction:"editBatch",getBatchAction:"getBatch"})),p=Object(i["a"])({},Object(a["d"])("tests",["tests"])),g=Object(i["a"])({},Object(a["b"])("tests",{getTestsAction:"getTestsList",saveTestAction:"saveTest",deleteTestAction:"deleteTest",editTestAction:"editTest"})),y=Object(i["a"])({},Object(a["d"])("invoices",["invoices"])),O=Object(i["a"])({},Object(a["b"])("invoices",{getInvoicesAction:"getInvoicesList",saveInvoiceAction:"saveInvoice",deleteInvoiceAction:"deleteInvoice",editInvoiceAction:"editInvoice",editRemainAction:"editRemain"})),j=Object(i["a"])({},Object(a["b"])("results",{saveResultAction:"saveResult",editResultAction:"editResult",getResultAction:"getResult",editDeliveredAction:"editDelivered"})),A=Object(i["a"])({},Object(a["b"])("reports",["getFinancialData","getFinancialSummary"])),w=Object(i["a"])({},Object(a["b"])("permissions",["getUserPermissions","saveUserPermissions","editUserPermissions"]))},dc22:function(t,e,n){"use strict";function i(t,e){var n=e.value,i=e.options||{passive:!0};window.addEventListener("resize",n,i),t._onResize={callback:n,options:i},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,i=e.options;window.removeEventListener("resize",n,i),delete t._onResize}}var r={inserted:i,unbind:a};e["a"]=r},e934:function(t,e,n){"use strict";n("ffe4")},ffe4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7e300485.6c824c33.js.map