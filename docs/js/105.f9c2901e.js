(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[105],{"8d16":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-center full-width q-pa-md"},[s("div",{staticClass:"row justify-center full-width q-pa-md"},[s("div",{staticClass:"q-gutter-sm column justify-center"},[e._m(0),s("div",{staticClass:"row justify-evenly q-gutter-sm",staticStyle:{width:"400px"}},[s("span",[e._v("Resource Width")]),s("q-slider",{attrs:{label:"","label-always":"",min:60,max:200},model:{value:e.resourceWidth,callback:function(t){e.resourceWidth=t},expression:"resourceWidth"}})],1),s("div",{staticClass:"row justify-evenly q-gutter-sm",staticStyle:{width:"400px"}},[s("span",[e._v("Resource Height")]),s("q-slider",{attrs:{label:"","label-always":"",min:0,max:200},model:{value:e.resourceHeight,callback:function(t){e.resourceHeight=t},expression:"resourceHeight"}})],1)]),s("q-calendar",{staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",resources:e.resources,"resource-height":e.resourceHeight,"resource-width":e.resourceWidth,locale:"en-us"},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-evenly q-gutter-sm",staticStyle:{width:"400px"}},[s("span",[e._v("Note: setting any height to 0 will make it 'auto'")])])}],r={data:function(){return{resourceWidth:100,resourceHeight:70,selectedDate:"2019-04-01",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}]}}},i=r,c=s("2877"),o=s("eebe"),u=s.n(o),n=s("c1d0"),d=Object(c["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports;u()(d,"components",{QSlider:n["a"]})}}]);