(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{e9bb:function(l,e,a){"use strict";a.r(e);var t=function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",{staticClass:"row justify-center full-width q-pa-md"},[a("div",{staticClass:"row justify-center full-width q-pa-md"},[a("div",{staticClass:"q-gutter-sm full-width row justify-center"},[a("q-checkbox",{attrs:{label:"Short Interval Label"},model:{value:l.short,callback:function(e){l.short=e},expression:"short"}}),a("q-checkbox",{attrs:{label:"24h Format"},model:{value:l.hour24Format,callback:function(e){l.hour24Format=e},expression:"hour24Format"}})],1),a("div",{staticClass:"q-pa-md full-width"},[a("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change locale",options:l.locales},model:{value:l.locale,callback:function(e){l.locale=e},expression:"locale"}})],1),a("q-separator",{staticClass:"full-width"})],1),a("q-calendar",{staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",resources:l.resources,"resource-height":50,locale:l.locale,"short-interval-label":l.short,"hour24-format":l.hour24Format},model:{value:l.selectedDate,callback:function(e){l.selectedDate=e},expression:"selectedDate"}})],1)},u=[],s={data:function(){return{selectedDate:"2019-04-01",resources:[{label:"John"},{label:"Mary"},{label:"Susan"},{label:"Olivia"},{label:"Board Room"},{label:"Room-1"},{label:"Room-2"}],short:!1,hour24Format:!1,locale:"en-us",locales:[{value:"ar",label:"العربية"},{value:"bg",label:"български език"},{value:"ca",label:"Català"},{value:"cs",label:"Čeština"},{value:"da",label:"Dansk"},{value:"de",label:"Deutsch"},{value:"en-gb",label:"English (UK)"},{value:"en-us",label:"English (US)"},{value:"eo",label:"Esperanto"},{value:"es",label:"Español"},{value:"fa-ir",label:"فارسی"},{value:"fi",label:"Suomi"},{value:"fr",label:"Français"},{value:"gn",label:"Avañe'ẽ"},{value:"he",label:"עברית"},{value:"hr",label:"Hrvatski jezik"},{value:"hu",label:"Magyar"},{value:"id",label:"Bahasa Indonesia"},{value:"it",label:"Italiano"},{value:"ja",label:"日本語 (にほんご)"},{value:"km",label:"ខ្មែរ"},{value:"ko-kr",label:"한국어"},{value:"lu",label:"Kiluba"},{value:"lv",label:"Latviešu valoda"},{value:"ml",label:"മലയാളം"},{value:"ms",label:"Bahasa Melayu"},{value:"nb-no",label:"Norsk"},{value:"nl",label:"Nederlands"},{value:"pl",label:"Polski"},{value:"pt-br",label:"Português (BR)"},{value:"pt",label:"Português"},{value:"ro",label:"Română"},{value:"ru",label:"русский"},{value:"sk",label:"Slovenčina"},{value:"sl",label:"Slovenski Jezik"},{value:"sr",label:"српски језик"},{value:"sv",label:"Svenska"},{value:"ta",label:"தமிழ்"},{value:"th",label:"ไทย"},{value:"tr",label:"Türkçe"},{value:"uk",label:"Українська"},{value:"vi",label:"Tiếng Việt"},{value:"zh-hans",label:"中文(简体)"},{value:"zh-hant",label:"中文(繁體)"}]}}},o=s,r=a("2877"),b=a("eebe"),n=a.n(b),v=a("8f8e"),i=a("ddd8"),c=a("eb85"),h=Object(r["a"])(o,t,u,!1,null,null,null);e["default"]=h.exports;n()(h,"components",{QCheckbox:v["a"],QSelect:i["a"],QSeparator:c["a"]})}}]);