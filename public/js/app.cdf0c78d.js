(function(t){function e(e){for(var r,a,o=e[0],i=e[1],s=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},u=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-07709945":"5fb1911f","chunk-7e300485":"2e22b81a","chunk-630d69be":"76779a43","chunk-1c26722a":"fc775ca6","chunk-2d213caa":"7031e439","chunk-3b680b6e":"e7f0f01c","chunk-78f7b4e4":"d8d37711","chunk-7b9bca40":"de6ddf20","chunk-00abe092":"97e2f486","chunk-16afe500":"81d95c68","chunk-70d22a9f":"81804830","chunk-70fb82b3":"e30458c4","chunk-714247a8":"4edc3e89","chunk-73ba0ea6":"e6507e3d","chunk-2d212bc4":"6193bb9e","chunk-2d21a719":"5b5cdc99","chunk-2d225bb5":"66617919"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-07709945":1,"chunk-7e300485":1,"chunk-630d69be":1,"chunk-1c26722a":1,"chunk-3b680b6e":1,"chunk-78f7b4e4":1,"chunk-7b9bca40":1,"chunk-00abe092":1,"chunk-16afe500":1,"chunk-70d22a9f":1,"chunk-70fb82b3":1,"chunk-714247a8":1,"chunk-73ba0ea6":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-07709945":"4ec599f0","chunk-7e300485":"0ed48ed9","chunk-630d69be":"77e66dc0","chunk-1c26722a":"fb8e174c","chunk-2d213caa":"31d6cfe0","chunk-3b680b6e":"eb052a1b","chunk-78f7b4e4":"fc21f060","chunk-7b9bca40":"fc21f060","chunk-00abe092":"3cd64cfc","chunk-16afe500":"fd25dc4b","chunk-70d22a9f":"67914b4c","chunk-70fb82b3":"67914b4c","chunk-714247a8":"67914b4c","chunk-73ba0ea6":"67914b4c","chunk-2d212bc4":"31d6cfe0","chunk-2d21a719":"31d6cfe0","chunk-2d225bb5":"31d6cfe0"}[t]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var r=e&&e.target&&e.target.src||c,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],l.parentNode.removeChild(l),n(u)},l.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(t);var d=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02d3":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={invoices:[]},u={},o={SET_INVOICES:function(t,e){e.forEach((function(e,n){r["a"].set(t.invoices,n,e)}))},ADD_INVOICE:function(t,e){t.invoices.push(e)},DELETE_INVOICE:function(t,e){t.invoices=t.invoices.filter((function(t){return t.id!==e}))},EDIT_INVOICE:function(t,e){t.invoices.filter((function(n,a){n.id===e.id&&r["a"].set(t.invoices,a,e)}))}},i={getInvoicesList:function(t){var e=t.commit;return a["a"].get("/invoices").then((function(t){var n=t.data.data;return e("SET_INVOICES",n),n}))},saveInvoice:function(t,e){var n=t.commit;return a["a"].post("/invoices",e).then((function(t){var e=t.data.data;return n("ADD_INVOICE",e),e}))},deleteInvoice:function(t,e){var n=t.commit;return a["a"].delete("/invoices/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_INVOICE",e),r}))},editInvoice:function(t,e){var n=t.commit,r=e.invoiceData,c=e.invoiceId;return a["a"].put("/invoices/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_INVOICE",e),e}))},editRemain:function(t,e){return a["a"].put("/invoices/".concat(e,"/remain")).then((function(t){var e=t.data.data;return e}))}}},2123:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return a})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return u})),n.d(e,"actions",(function(){return o}));n("0481"),n("4069");var r=n("7c15"),a={},c={},u={},o={getFinancialSummary:function(){return r["a"].get("/reports/financial/summary").then((function(t){return t.data}))},getFinancialData:function(){return r["a"].get("/reports/financial/data").then((function(t){return t.data.data.flat()}))}}},"2abe":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={tests:[]},u={},o={SET_TESTS:function(t,e){e.forEach((function(e,n){r["a"].set(t.tests,n,e)}))},ADD_TEST:function(t,e){t.tests.push(e)},DELETE_TEST:function(t,e){t.tests=t.tests.filter((function(t){return t.id!==e}))},EDIT_TEST:function(t,e){t.tests.filter((function(n,a){n.id===e.id&&r["a"].set(t.tests,a,e)}))}},i={getTestsList:function(t){var e=t.commit;return a["a"].get("/tests").then((function(t){var n=t.data.data;return e("SET_TESTS",n),n}))},saveTest:function(t,e){var n=t.commit;return a["a"].post("/tests",e).then((function(t){var e=t.data.data;return n("ADD_TEST",e),e}))},deleteTest:function(t,e){var n=t.commit;return a["a"].delete("/tests/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_TEST",e),r}))},editTest:function(t,e){var n=t.commit,r=e.testData,c=e.testId;return a["a"].put("/tests/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_TEST",e),e}))}}},"2bfe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"text-center mt-12 mx-auto",attrs:{width:"400"}},[n("v-card-text",[n("h2",{staticClass:"mb-3"},[t._v("Sorry, Time Out")]),n("p",[t._v("Check your internet connection, and try agin")]),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:t.reload}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-reload")]),t._v(" Reload ")],1)],1)],1)},a=[],c={name:"TimeOut",methods:{reload:function(){window.location.reload()}}},u=c,o=n("2877"),i=n("6544"),s=n.n(i),f=n("8336"),d=n("b0af"),l=n("99d9"),h=n("132d"),m=Object(o["a"])(u,r,a,!1,null,"076e0f90",null);e["default"]=m.exports;s()(m,{VBtn:f["a"],VCard:d["a"],VCardText:l["b"],VIcon:h["a"]})},"3a3c":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={branches:[]},u={},o={SET_BRANCHES:function(t,e){e.forEach((function(e,n){r["a"].set(t.branches,n,e)}))},ADD_BRANCH:function(t,e){t.branches.push(e)},DELETE_BRANCH:function(t,e){t.branches=t.branches.filter((function(t){return t.id!==e}))},EDIT_BRANCH:function(t,e){t.branches.filter((function(n,a){n.id===e.id&&r["a"].set(t.branches,a,e)}))}},i={getBranchesList:function(t){var e=t.commit;return a["a"].get("/branches").then((function(t){var n=t.data.data;return e("SET_BRANCHES",n),n}))},saveBranch:function(t,e){var n=t.commit;return a["a"].post("/branches",e).then((function(t){var e=t.data.data;return n("ADD_BRANCH",e),e}))},deleteBranch:function(t,e){var n=t.commit;return a["a"].delete("/branches/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_BRANCH",e),r}))},editBranch:function(t,e){var n=t.commit,r=e.branchData,c=e.branchId;return a["a"].put("/branches/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_BRANCH",e),e}))}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5363"),n("d5e8");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("RouterView",{key:t.$route.fullPath})],1)},c=[],u={name:"App",page:{titleTemplate:function(t){return t="function"===typeof t?t(this.$store):t,t?"".concat(t," | King labs"):"King labs"}},created:function(){this.$vuetify.rtl=!0,this.$vuetify.lang.current="ar"}},o=u,i=(n("5c0b"),n("2877")),s=n("6544"),f=n.n(s),d=n("7496"),l=Object(i["a"])(o,a,c,!1,null,null,null),h=l.exports;f()(l,{VApp:d["a"]});var m=n("5530"),p=n("f309");r["a"].use(p["a"]);var v=new p["a"]({theme:{themes:{light:{success:"#05c075"}}}}),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-app",[n("v-snackbar",{attrs:{timeout:t.timeout,color:t.color,top:t.isTop,bottom:t.isBottom,right:t.isRight,left:t.isLeft},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("span",[t._v(t._s(t.text))]),t.hasCloseBtn?n("v-btn",{attrs:{dark:"",text:"",icon:""},on:{click:function(e){t.show=!1}}},[n("v-icon",[t._v("mdi-close")])],1):t._e()],1)])],1):t._e()},g=[],E=(n("caad"),n("ac1f"),n("1276"),{data:function(){return{show:!1,hasCloseBtn:!0,color:"info",x:"right",y:"top",timeout:5e3,text:""}},computed:{isTop:function(){return"top"===this.y},isBottom:function(){return"bottom"===this.y},isLeft:function(){return"left"===this.x},isRight:function(){return"right"===this.x}},mounted:function(){var t=this;this.$root.$on("alert-show",(function(e){var n=e.msg,r=e.color;t.color=r;var a=t.$root.$data.options;t.timeout=a.timeout,t.hasCloseBtn=a.closeBtn,t.validPlace(a.placement)&&t.initPlace(a.placement),t.text=n,t.show=!0}))},methods:{validPlace:function(t){return["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].includes(t)},initPlace:function(t){this.y=t.split("-")[0],this.x=t.split("-")[1]}}}),k=E,T=n("8336"),_=n("132d"),S=n("2db4"),y=Object(i["a"])(k,b,g,!1,null,null,null),D=y.exports;f()(y,{VApp:d["a"],VBtn:T["a"],VIcon:_["a"],VSnackbar:S["a"]});var A={timeout:5e3,closeBtn:!0,placement:"bottom-right"},R={install:function(t,e){var n=Object(m["a"])(Object(m["a"])({},A),e),a=new r["a"]({data:{options:n},vuetify:v,render:function(t){return t(D)}});function c(t,e){var n=0===arguments.length?"Awesom App":t;a.$emit("alert-show",{msg:n,color:e})}a.$mount(document.body.appendChild(document.createElement("div"))),t.prototype.$VAlert={info:function(t){return c(t,"info")},success:function(t){return c(t,"success")},error:function(t){return c(t,"error")},warn:function(t){return c(t,"warning")}}}},C=R,w=(n("45fc"),n("b0c0"),n("d3b7"),n("2532"),n("3ca3"),n("ddb0"),n("b85c")),I=(n("96cf"),n("1da1")),O=n("323e"),N=n.n(O),P=n("58ca"),L=n("8c4f"),U=n("2f62"),x=(n("99af"),n("5377"),n("4160"),n("d81d"),n("5319"),n("159b"),n("bba4")),B=n.n(x),j={},V={modules:{}};function q(t,e){if(1===e.length)return t;var n=e.shift();return t.modules[n]=Object(m["a"])({modules:{},namespaced:!0},t.modules[n]),q(t.modules[n],e)}(function(){var t=n("cfa9");t.keys().forEach((function(e){var n=t(e);if(j[e]!==n){j[e]=n;var r=e.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(B.a),a=q(V,r),c=a.modules;c[r.pop()]=Object(m["a"])({namespaced:!0},n)}}))})();var H=V.modules;function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.modules,r=void 0===n?H:n,a=e.modulePrefx,c=void 0===a?"":a,u=e.flags,o=void 0===u?{}:u;for(var i in r){var s=r[i];s.actions&&s.actions[t]&&(s.namespaced?M.dispatch("".concat(c).concat(i,"/").concat(t)):o.dispatchGlobal=!0),s.modules&&$(t,{modules:s.modules,modulePrefx:c+i+"/",flags:o})}!c&&o.dispatchGlobal&&M.dispatch(t)}r["a"].use(U["a"]);var M=new U["a"].Store({strict:!1,modules:H});$("init");var G=[{path:"/",name:"dashboard",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-2d21a719")]).then(n.bind(null,"bc13")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/tests",name:"tests",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-70d22a9f")]).then(n.bind(null,"18aa")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/users",name:"users",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-16afe500")]).then(n.bind(null,"051b")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/reports",name:"reports",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-2d213caa"),n.e("chunk-3b680b6e")]).then(n.bind(null,"b439")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/companies",name:"companies",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-714247a8")]).then(n.bind(null,"9887")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/agents",name:"agents",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-00abe092")]).then(n.bind(null,"b750")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/invoices",name:"invoices",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-2d213caa"),n.e("chunk-78f7b4e4")]).then(n.bind(null,"6aee")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/company-agents",name:"companyAgents",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-73ba0ea6")]).then(n.bind(null,"f31d")))},meta:{authRequired:!0,accessLevel:"company"}},{path:"/branches",name:"branches",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-07709945"),n.e("chunk-1c26722a"),n.e("chunk-7b9bca40"),n.e("chunk-70fb82b3")]).then(n.bind(null,"46a2")))},meta:{authRequired:!0,accessLevel:"user"}},{path:"/login",name:"login",component:function(){return Y(Promise.all([n.e("chunk-07709945"),n.e("chunk-7e300485")]).then(n.bind(null,"013f")))},meta:{authRequired:!1,beforeResolve:function(t,e,n){M.getters["global/auth/isLoggedIn"]?n({name:"home"}):n()}}},{path:"/logout",name:"logout",meta:{authRequired:!0,beforeResolve:function(t,e,n){M.dispatch("global/auth/logOut"),n({name:"login",query:{redirectFrom:e.fullPath}})}}},{path:"/access-denied",name:"accessDenied",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-2d225bb5")]).then(n.bind(null,"e63a")))},props:!0},{path:"/404",name:"404",component:function(){return Y(Promise.all([n.e("chunk-630d69be"),n.e("chunk-2d212bc4")]).then(n.bind(null,"aa4b")))},props:!0},{path:"*",redirect:"404"}];function Y(t){var e=function(){return{component:t,loading:n("d6df").default,delay:300,error:n("2bfe").default,timeout:12e4}};return Promise.resolve({functional:!0,render:function(t,n){var r=n.data,a=n.children;return t(e,r,a)}})}r["a"].use(L["a"]),r["a"].use(P["a"],{keyName:"page"}),N.a.configure({showSpinner:!1});var F=new L["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:G});F.beforeEach((function(t,e,n){N.a.start();var r=t.matched.some((function(t){return t.meta.authRequired}));if(!r||M.getters["global/auth/isLoggedIn"]){if(!t.meta.accessLevel)return n();var a=t.meta.accessLevel===M.state.global.auth.currentUser.type,c="companyAgents"===t.name||M.state.global.auth.currentUser.permissions.includes(t.name);a&&c?n():"accessDenied"===e.name?(n(!1),N.a.done()):n({name:"accessDenied",query:{redirectTo:e.fullPath}})}else n({name:"login",query:{redirectFrom:t.fullPath}})})),F.beforeResolve(function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.prev=0,a=Object(w["a"])(e.matched),t.prev=2,u=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=c.value,t.next=3,new Promise((function(t,c){a.meta&&a.meta.beforeResolve?a.meta.beforeResolve(e,n,(function(){for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];a.length?(a[0].name===n.name&&N.a.done(),r.apply(void 0,a),c(new Error("Error in redirect"))):t()})):t()}));case 3:case"end":return t.stop()}}),t)})),a.s();case 5:if((c=a.n()).done){t.next=9;break}return t.delegateYield(u(),"t0",7);case 7:t.next=5;break;case 9:t.next=14;break;case 11:t.prev=11,t.t1=t["catch"](2),a.e(t.t1);case 14:return t.prev=14,a.f(),t.finish(14);case 17:t.next=22;break;case 19:return t.prev=19,t.t2=t["catch"](0),t.abrupt("return");case 22:r();case 23:case"end":return t.stop()}}),t,null,[[0,19],[2,11,14,17]])})));return function(e,n,r){return t.apply(this,arguments)}}()),F.afterEach((function(t,e){N.a.done()}));var J=F;r["a"].use(C,{timeout:6e3,closeBtn:!0,placement:"top-center"}),r["a"].config.productionTip=!1,new r["a"]({router:J,store:M,vuetify:v,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"692f":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={agents:[]},u={},o={SET_AGENTS:function(t,e){e.forEach((function(e,n){r["a"].set(t.agents,n,e)}))},ADD_AGENT:function(t,e){t.agents.push(e)},DELETE_AGENT:function(t,e){t.agents=t.agents.filter((function(t){return t.id!==e}))},EDIT_AGENT:function(t,e){t.agents.filter((function(n,a){n.id===e.id&&r["a"].set(t.agents,a,e)}))}},i={getAgentsList:function(t){var e=t.commit;return a["a"].get("/agents").then((function(t){var n=t.data.data;return e("SET_AGENTS",n),n}))},saveAgent:function(t,e){var n=t.commit;return console.log(e),a["a"].post("/agents",e).then((function(t){var e=t.data.data;return n("ADD_AGENT",e),e}))},deleteAgent:function(t,e){var n=t.commit;return a["a"].delete("/agents/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_AGENT",e),r}))},editAgent:function(t,e){var n=t.commit,r=e.agentData,c=e.agentId;return a["a"].put("/agents/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_AGENT",e),e}))}}},"7c15":function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r);e["a"]=a.a.create({baseURL:"".concat(location.protocol+"//"+location.host,"/api")})},"89a1":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return i})),n.d(e,"mutations",(function(){return s})),n.d(e,"actions",(function(){return f}));n("96cf");var r=n("1da1"),a=n("7c15");function c(t){return JSON.parse(window.localStorage.getItem(t))}function u(t,e){window.localStorage.setItem(t,JSON.stringify(e))}var o={currentUser:c("currentUser")||null},i={isLoggedIn:function(t){return!!t.currentUser}},s={SET_CURRENT_USER:function(t,e){t.currentUser=e,u("currentUser",e),d(t)},CLEAR_CURRENT_USER:function(t){t.currentUser=null,localStorage.removeItem("currentUser"),d(t)}},f={init:function(t){var e=t.state;d(e)},logIn:function(t){var e=arguments;return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,c,u,o,i,s,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,c=e.length>1&&void 0!==e[1]?e[1]:{},u=c.email,o=c.password,i=c.type,n.next=4,a["a"].post("/login?type=".concat(i),{email:u,password:o});case 4:return s=n.sent,f=s.data,r("SET_CURRENT_USER",f),n.abrupt("return",f);case 8:case"end":return n.stop()}}),n)})))()},logOut:function(t){var e=t.commit;e("CLEAR_CURRENT_USER")}};function d(t){a["a"].defaults.headers.common.Authorization=t.currentUser?"Bearer ".concat(t.currentUser.token):""}},"9c0c":function(t,e,n){},a135:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={batches:[]},u={},o={SET_BATCHES:function(t,e){e.forEach((function(e,n){r["a"].set(t.batches,n,e)}))},ADD_BATCH:function(t,e){t.batches.push(e)},DELETE_BATCH:function(t,e){t.batches=t.batches.filter((function(t){return t.id!==e}))},EDIT_BATCH:function(t,e){t.batches.filter((function(n,a){n.id===e.id&&r["a"].set(t.batches,a,e)}))}},i={getBatchesList:function(t){var e=t.commit;return a["a"].get("/batches").then((function(t){var n=t.data.data;return e("SET_BATCHES",n),n}))},saveBatch:function(t,e){var n=t.commit;return a["a"].post("/batches",e).then((function(t){var e=t.data.data;return n("ADD_BATCH",e),e}))},getBatch:function(t,e){return a["a"].get("/batches/".concat(e)).then((function(t){var e=t.data.data;return e}))},deleteBatch:function(t,e){var n=t.commit;return a["a"].delete("/batches/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_BATCH",e),r}))},editBatch:function(t,e){var n=t.commit,r=e.batchData,c=e.batchId;return a["a"].put("/batches/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_BATCH",e),e}))}}},b20d:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("c740"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={users:[]},u={},o={SET_USERS:function(t,e){e.forEach((function(e,n){r["a"].set(t.users,n,e)}))},ADD_USER:function(t,e){t.users.push(e)},DELETE_USER:function(t,e){t.users=t.users.filter((function(t){return t.id!==e}))},EDIT_USER:function(t,e){t.users.filter((function(n,a){n.id===e.id&&r["a"].set(t.users,a,e)}))},SUSPEND_USER:function(t,e){var n=t.users.findIndex((function(t){return t.id===e})),a=t.users[n];a.suspended=1,r["a"].set(t.users,n,a)},ACTIVATE_USER:function(t,e){var n=t.users.findIndex((function(t){return t.id===e})),a=t.users[n];a.suspended=0,r["a"].set(t.users,n,a)}},i={getUsersList:function(t){var e=t.commit;return a["a"].get("/users").then((function(t){var n=t.data.data;return e("SET_USERS",n),n}))},saveUser:function(t,e){var n=t.commit;return a["a"].post("/users",e).then((function(t){var e=t.data.data;return n("ADD_USER",e),e}))},deleteUser:function(t,e){var n=t.commit;return a["a"].delete("/users/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_USER",e),r}))},editUser:function(t,e){var n=t.commit,r=e.userData,c=e.userId;return a["a"].put("/users/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_USER",e),e}))},suspendUser:function(t,e){var n=t.commit;return a["a"].put("/users/".concat(e,"/suspend")).then((function(t){return n("SUSPEND_USER",e),t.data}))},activateUser:function(t,e){var n=t.commit;return a["a"].put("/users/".concat(e,"/activate")).then((function(t){return n("ACTIVATE_USER",e),t.data}))}}},ce68:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return a})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return u})),n.d(e,"actions",(function(){return o}));var r=n("7c15"),a={},c={},u={},o={saveResult:function(t,e){return r["a"].post("/testResults",e).then((function(t){var e=t.data.data;return e}))},getResult:function(t,e){return r["a"].get("/testResults/".concat(e)).then((function(t){var e=t.data.data;return e}))},editResult:function(t,e){var n=e.resultData,a=e.resultId;return r["a"].put("/testResults/".concat(a),n).then((function(t){var e=t.data.data;return e}))},editDelivered:function(t,e){var n=e.delivered,a=e.resultId;return r["a"].put("/testResults/".concat(a,"/deliver"),{delivered:n}).then((function(t){var e=t.data.data;return e}))}}},cfa9:function(t,e,n){var r={"./agents.js":"692f","./batches.js":"a135","./branches.js":"3a3c","./companies.js":"d5ad","./global/auth.js":"89a1","./invoices.js":"02d3","./permissions.js":"f604","./reports.js":"2123","./results.js":"ce68","./tests.js":"2abe","./users.js":"b20d"};function a(t){var e=c(t);return n(e)}function c(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=c,t.exports=a,a.id="cfa9"},d5ad:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return u})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return i}));n("4de4"),n("4160"),n("159b");var r=n("2b0e"),a=n("7c15"),c={companies:[]},u={},o={SET_COMPANIES:function(t,e){e.forEach((function(e,n){r["a"].set(t.companies,n,e)}))},ADD_COMPANY:function(t,e){t.companies.push(e)},DELETE_COMPANY:function(t,e){t.companies=t.companies.filter((function(t){return t.id!==e}))},EDIT_COMPANY:function(t,e){t.companies.filter((function(n,a){n.id===e.id&&r["a"].set(t.companies,a,e)}))}},i={getCompaniesList:function(t){var e=t.commit;return a["a"].get("/companies").then((function(t){var n=t.data.data;return e("SET_COMPANIES",n),n}))},saveCompany:function(t,e){var n=t.commit;return a["a"].post("/companies",e).then((function(t){var e=t.data.data;return n("ADD_COMPANY",e),e}))},deleteCompany:function(t,e){var n=t.commit;return a["a"].delete("/companies/".concat(e)).then((function(t){var r=t.data.data;return n("DELETE_COMPANY",e),r}))},getCompany:function(t,e){return a["a"].get("/companies/".concat(e)).then((function(t){return t.data.data}))},editCompany:function(t,e){var n=t.commit,r=e.companyData,c=e.companyId;return a["a"].put("/companies/".concat(c),r).then((function(t){var e=t.data.data;return n("EDIT_COMPANY",e),e}))}}},d6df:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center mt-12 "},[n("v-progress-circular",{attrs:{indeterminate:"",size:"48",color:"primary"}})],1)},a=[],c={},u=c,o=n("2877"),i=n("6544"),s=n.n(i),f=n("490a"),d=Object(o["a"])(u,r,a,!1,null,"779ed282",null);e["default"]=d.exports;s()(d,{VProgressCircular:f["a"]})},f604:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return a})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return u})),n.d(e,"actions",(function(){return o}));var r=n("7c15"),a={},c={},u={},o={getUserPermissions:function(t,e){return r["a"].get("/permissions/".concat(e)).then((function(t){return t.data}))},saveUserPermissions:function(t,e){return r["a"].post("/permissions",e).then((function(t){return t.data}))},editUserPermissions:function(t,e){return r["a"].put("/permissions",e).then((function(t){return t.data}))}}}});
//# sourceMappingURL=app.cdf0c78d.js.map