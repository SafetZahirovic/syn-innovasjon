(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02dbc600"],{"454f":function(t,a,e){e("46a7");var c=e("584a").Object;t.exports=function(t,a,e){return c.defineProperty(t,a,e)}},"46a7":function(t,a,e){var c=e("63b6");c(c.S+c.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"5a3e":function(t,a,e){},6217:function(t,a,e){"use strict";var c=e("5a3e"),s=e.n(c);s.a},"67db":function(t,a,e){},7669:function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("side-bar",[t._v("Vaccines")]),e("div",{staticClass:"header"},[e("h1",{staticClass:"vaccines-headline"},[t._v(" Vaccines ")]),e("v-icon",{staticClass:"header-icon ml-4 mb-3"},[t._v("fal fa-syringe")])],1),e("div",{staticClass:"chips-container"},t._l(t.chipsInformation,function(a,c){return e("v-chip",{key:a.chipsText,class:[t.isSelected(c)?"chip-selected":"chip"],on:{click:function(a){return t.selectChip(c)}}},[e("v-avatar",[e("v-icon",{staticClass:"chip-icon"},[t._v(t._s(a.chipsIcon))])],1),e("h6",[t._v(t._s(a.chipsText))])],1)}),1),e("div",{staticClass:"card-wrapper"},[0===t.chipSelected||1===t.chipSelected?e("h3",{staticClass:"ml-5 pl-3 mt-4 text-uppercase"},[t._v("Ongoing Vaccinations")]):t._e(),t._l(t.onGoingVaccines,function(a){return 0===t.chipSelected||1===t.chipSelected?e("card-base",{key:a.name,staticClass:"card mr-3 mt-2"},[e("div",{staticClass:"subheader-card"},[e("div",[e("h4",{staticClass:"mb-1"},[t._v(" "+t._s(a.name))]),e("p",{staticClass:"italic-txt"},[t._v(" "+t._s(a.description))])]),e("div",[e("h2",{staticClass:"vaccines-taken"},[t._v("1/"+t._s(a.vaccinationPlan.length))]),e("h6",[t._v("Taken")])])]),e("v-divider",{staticClass:"mb-3 mt-3",attrs:{color:"#ededed"}}),e("div",[e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("First vaccine should be taken: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))]),e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Second vaccine should be taken after: ")]),e("br"),t._v(" "+t._s(a.vaccinationPlan[0]))]),a.vaccinationPlan.length>2?e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("First vaccine should be taken: ")]),e("br"),t._v(" Six months after the first ")]):t._e()])],1):t._e()}),0===t.chipSelected||2===t.chipSelected?e("h3",{staticClass:"ml-5 pl-3 mt-5 text-uppercase"},[t._v("Active Immunity Vaccines")]):t._e(),t._l(t.permanentVaccines,function(a){return 0===t.chipSelected||2===t.chipSelected?e("card-base",{key:a.name,staticClass:"card mr-3 mt-2"},[e("div",{staticClass:"subheader-card"},[e("div",[e("h4",{staticClass:"mb-1"},[t._v(" "+t._s(a.name))]),e("p",{staticClass:"italic-txt"},[t._v(" "+t._s(a.description))])])]),e("v-divider",{staticClass:"mb-3 mt-3",attrs:{color:"#ededed"}}),e("div",[e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Vaccine taken: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))])])],1):t._e()}),0===t.chipSelected||3===t.chipSelected?e("h3",{staticClass:"ml-5 pl-3 mt-5 text-uppercase"},[t._v("Renewable Vaccines")]):t._e(),t._l(t.renewableVaccines,function(a){return 0===t.chipSelected||3===t.chipSelected?e("card-base",{key:a.name,staticClass:"card mr-3 mt-2"},[e("div",{staticClass:"subheader-card"},[e("div",[e("h4",{staticClass:"mb-1"},[t._v(" "+t._s(a.name))]),e("p",{staticClass:"italic-txt"},[t._v(" "+t._s(a.description))])])]),e("v-divider",{staticClass:"mb-3 mt-3",attrs:{color:"#ededed"}}),e("div",[e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Vaccine taken: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))]),e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Experation: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))])])],1):t._e()}),0===t.chipSelected||4===t.chipSelected?e("h3",{staticClass:"ml-5 pl-3 mt-5 text-uppercase"},[t._v("Expired Vaccines")]):t._e(),t._l(t.expiredVaccines,function(a){return 0===t.chipSelected||4===t.chipSelected?e("card-base",{key:a.name,staticClass:"card mr-3 mt-2"},[e("div",{staticClass:"subheader-card"},[e("div",[e("h4",{staticClass:"mb-1"},[t._v(" "+t._s(a.name))]),e("p",{staticClass:"italic-txt"},[t._v(" "+t._s(a.description))])])]),e("v-divider",{staticClass:"mb-3 mt-3",attrs:{color:"#ededed"}}),e("div",[e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Vaccine taken: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))]),e("p",{staticClass:"mb-1"},[e("span",{staticClass:"bolded-txt"},[t._v("Experation: ")]),t._v(" "+t._s(a.vaccinationPlan[0]))])])],1):t._e()})],2)],1)},s=[],i=e("d225"),n=e("b0b4"),l=e("308d"),r=e("6bb5"),d=e("4e2b"),o=e("9ab4"),p=e("60a3"),v=e("7c08"),b=e("fc8b"),u=function(t){function a(){var t;return Object(i["a"])(this,a),t=Object(l["a"])(this,Object(r["a"])(a).apply(this,arguments)),t.chipSelected=0,t.chipsInformation=[{chipsText:"All",chipsIcon:"far fa-check-double"},{chipsText:"Ongoing",chipsIcon:"far fa-spinner"},{chipsText:"Permanent",chipsIcon:"far fa-infinity"},{chipsText:"Renewable",chipsIcon:"far fa-sync"},{chipsText:"Expired",chipsIcon:"far fa-times"}],t}return Object(d["a"])(a,t),Object(n["a"])(a,[{key:"selectChip",value:function(t){console.log(t),this.chipSelected=t}},{key:"isSelected",value:function(t){return t===this.chipSelected}}]),a}(p["c"]);u=o["a"]([Object(p["a"])({components:{SideBar:v["a"],CardBase:b["a"]}})],u);var h=u,f=h,_=(e("fa65"),e("2877")),m=Object(_["a"])(f,c,s,!1,null,"61103e02",null);a["default"]=m.exports},"7c08":function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VCard",{staticClass:"sidebar-main pa-2"},[e("h5",[t._t("default")],2)])},s=[],i=e("d225"),n=e("308d"),l=e("6bb5"),r=e("4e2b"),d=e("9ab4"),o=e("60a3"),p=function(t){function a(){return Object(i["a"])(this,a),Object(n["a"])(this,Object(l["a"])(a).apply(this,arguments))}return Object(r["a"])(a,t),a}(o["c"]);p=d["a"]([o["a"]],p);var v=p,b=v,u=(e("cd4e"),e("2877")),h=Object(u["a"])(b,c,s,!1,null,"56f05100",null);a["a"]=h.exports},"85f2":function(t,a,e){t.exports=e("454f")},ac69:function(t,a,e){},b0b4:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var c=e("85f2"),s=e.n(c);function i(t,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),s()(t,c.key,c)}}function n(t,a,e){return a&&i(t.prototype,a),e&&i(t,e),t}},cd4e:function(t,a,e){"use strict";var c=e("67db"),s=e.n(c);s.a},fa65:function(t,a,e){"use strict";var c=e("ac69"),s=e.n(c);s.a},fc8b:function(t,a,e){"use strict";var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VCard",{staticClass:"card-base"},[t._t("default")],2)},s=[],i=e("d225"),n=e("308d"),l=e("6bb5"),r=e("4e2b"),d=e("9ab4"),o=e("60a3"),p=function(t){function a(){return Object(i["a"])(this,a),Object(n["a"])(this,Object(l["a"])(a).apply(this,arguments))}return Object(r["a"])(a,t),a}(o["c"]);p=d["a"]([o["a"]],p);var v=p,b=v,u=(e("6217"),e("2877")),h=Object(u["a"])(b,c,s,!1,null,"63ff06a0",null);a["a"]=h.exports}}]);
//# sourceMappingURL=chunk-02dbc600.d6380e0d.js.map