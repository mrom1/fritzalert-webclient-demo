(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{215:function(t,n,e){var content=e(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("40b6893e",content,!0,{sourceMap:!1})},241:function(t,n,e){"use strict";var r={layout:"dashboard",data:function(){return{clipped:!1,fixed:!1,drawer:!1,miniVariant:!0,navigationItems:[{icon:"mdi-home",title:"Home",to:"/home"},{icon:"mdi-account-multiple",title:"Users",to:"/users"},{icon:"mdi-wan",title:"Monitor",to:"/monitor"},{icon:"mdi-bell-ring",title:"Notifications",to:"/notifications"},{icon:"mdi-harddisk",title:"Storage",to:"/storage"},{icon:"mdi-help",title:"Help",to:"/help"}]}}},o=e(81),c=e(111),l=e.n(c),d=e(362),m=e(368),v=e(363),f=e(182),w=e(369),h=e(364),_=e(160),D=e(161),U=e(106),V=e(162),E=e(80),S=e(365),A=e(367),L=e(366),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[e("v-icon",[t._v("mdi-"+t._s("lightbulb-"+(t.$vuetify.theme.dark?"off":"on"))+"-outline")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-logout")])],1)],1),t._v(" "),e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.navigationItems,(function(n,i){return e("v-list-item",{key:i,attrs:{to:n.to,router:"",exact:""}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1),t._v(" "),e("v-main",[e("v-container",[e("nuxt")],1)],1),t._v(" "),e("v-footer",{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))]),t._v(" "),e("v-spacer"),t._v(" "),e("span",[t._v("Project source on "),e("a",{attrs:{href:"https://github.com/mrom1/fritzalert"}},[t._v("Github")])])],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:v.a,VBtn:f.a,VContainer:w.a,VFooter:h.a,VIcon:_.a,VList:D.a,VListItem:U.a,VListItemAction:V.a,VListItemContent:E.a,VListItemTitle:E.b,VMain:S.a,VNavigationDrawer:A.a,VSpacer:L.a})},250:function(t,n,e){e(251),t.exports=e(252)},275:function(t,n,e){"use strict";e(215)},276:function(t,n,e){var r=e(15)(!1);r.push([t.i,"h1[data-v-037967e0]{font-size:20px}",""]),t.exports=r},334:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"mutations",(function(){return o})),e.d(n,"actions",(function(){return c})),e.d(n,"getters",(function(){return l}));e(49),e(42),e(31);var r=function(){return{currentBandwidthUsage:{downstream:[],upstream:[]},currentBandwithUsageDownstream:[],currentBandwithUsageDownstreamLabels:[]}},o={STORE_DOWNSTREAM:function(t,n){t.currentBandwithUsageDownstream=n},STORE_DOWNSTREAM_LABELS:function(t,n){t.currentBandwithUsageDownstream=n}},c={startPollingDownstream:function(t){var n=t.commit;this.polling=setInterval((function(){var t=Array.from({length:11},(function(){return Math.floor(40*Math.random())}));console.log(t),n("STORE_DOWNSTREAM",t),n("STORE_DOWNSTREAM_LABELS",t)}),5e3)},storeDownstreamUsage:function(t,n){(0,t.commit)("STORE_DOWNSTREAM",n)},storeDownstreamUsageLabels:function(t,n){(0,t.commit)("STORE_DOWNSTREAM_LABELS",n)},stopPollingDownstream:function(){clearInterval(this.polling)}},l={getDownstreamUsage:function(t){return t.currentBandwithUsageDownstream},getDownstreamUsageLabels:function(t){return t.currentBandwithUsageDownstreamLabels}}},353:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"getters",(function(){return o})),e.d(n,"mutations",(function(){return c})),e.d(n,"actions",(function(){return l}));e(49);var r=function(){return{currentDownloadstreamUsage:[]}},o={currentDownloadstreamUsage:function(t){return t.currentDownloadstreamUsage}},c={changeCurrentDownloadstreamUsage:function(t,data){t.currentDownloadstreamUsage=data}},l={startPollingDownloadstreamUsage:function(t){var n=t.commit;this.polling=setInterval((function(){n("changeCurrentDownloadstreamUsage",[currentDownloadstreamUsage[0],currentDownloadstreamUsage[1],currentDownloadstreamUsage[2],currentDownloadstreamUsage[3],currentDownloadstreamUsage[4],currentDownloadstreamUsage[5],currentDownloadstreamUsage[6],currentDownloadstreamUsage[7],currentDownloadstreamUsage[8],currentDownloadstreamUsage[9]])}),3e3)}}},72:function(t,n,e){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(275),e(81)),c=e(111),l=e.n(c),d=e(362),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/home"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"037967e0",null);n.a=component.exports;l()(component,{VApp:d.a})}},[[250,18,5,19]]]);