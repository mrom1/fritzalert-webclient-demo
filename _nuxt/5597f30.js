(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{536:function(e,t,n){"use strict";n.r(t);n(26);var o={props:["headers","items"],data:function(){return{showPickledFiles:!1,showPcapFiles:!1,search:""}},methods:{onDownloadButtonClick:function(e){console.log("item clicked: "+e.name)}}},l=n(81),c=n(111),r=n.n(c),d=n(182),m=n(369),h=n(610),f=n(160),w=n(606),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5,search:e.search,"item-key":"name","footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus"}},scopedSlots:e._u([{key:"item.controls",fn:function(t){return[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",small:""},on:{click:function(n){return e.onDownloadButtonClick(t.item)}}},[n("v-icon",[e._v("mdi-download")])],1)]}}])})]],2)}),[],!1,null,null,null);t.default=component.exports;r()(component,{VBtn:d.a,VContainer:m.a,VDataTable:h.a,VIcon:f.a,VTextField:w.a})}}]);