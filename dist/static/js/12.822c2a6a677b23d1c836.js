webpackJsonp([12],{"0sEc":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("Tej3"),e("thjQ");var a=e("Quol"),i=e.n(a),r=e("7t+N"),n=e.n(r),o={name:"progeress",data:function(){return{map:{uedProgeressBasic:{flag:!1,html:['<div class="ued-progress-basic animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:40%"></div>\n','  <div class="ued-progress-text">40%</div>\n',"</div>"].join(""),scriptText:""},uedProgeressNotxt:{flag:!1,html:['<div class="ued-progress-basic ued-progress-notext animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:80%"></div>\n','  <div class="ued-progress-text">80%</div>\n',"</div>"].join(""),scriptText:""},uedProgeressDynamic:{flag:!1,html:['<div class="ued-progress-basic animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:0%" id="dynamic"></div>\n','  <div class="ued-progress-text">0%</div>\n',"</div>"].join(""),scriptText:["进度条运行测试的脚本\n",'var bar = $("#dynamic");\n',"var text = bar.next();\n","var n = 0;\n","var flag = 0;\n","var handler = setInterval(() => {\n","  bar.width(`${n}%`);\n","  text.text(`${n}%`);\n","  if(n === 100){\n","    flag = -1;\n","  }\n","  if(n === 0){\n","    flag = 1;\n","  }\n","  if(flag === 1){n++;}\n","  if(flag === -1){n--;}\n","}, 200);\n"].join(""),script:function(){var s=n()("#dynamic"),t=s.next(),e=0,a=0;setInterval(function(){s.width(e+"%"),t.text(e+"%"),100===e&&(a=-1),0===e&&(a=1),1===a&&e++,-1===a&&e--},200)}},uedProgeressCss3:{flag:!1,html:['<div class="ued-progress-basic animate-tran ued-progress-notext">\n','  <div class="ued-progress-bar ued-progress-animate infinite"></div>\n','  <div class="ued-progress-text"></div>\n',"</div>"].join(""),scriptText:""}}}},methods:{view:function(s){for(var t in this.map)t!=s&&(this.map[t].flag=!1);this.map[s].flag?this.map[s].flag=!1:this.map[s].flag=!0},copy:function(s){var t=s.target.parentNode.getElementsByTagName("pre")[0].innerText;i()(t)}},mounted:function(){for(var s in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[s].script&&this.map[s].script()}},c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("transition",{attrs:{name:"comein-fade"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[s._v("基础用法")]),s._v(" "),e("span",{domProps:{innerHTML:s._s(s.map.uedProgeressBasic.html)}}),s._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.view("uedProgeressBasic")}}},[s._v("示例代码")])]),s._v(" "),s.map.uedProgeressBasic.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),s._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:s.copy}}),s._v(" "),e("pre",{domProps:{textContent:s._s(s.map.uedProgeressBasic.html)}}),s._v(" "),s.map.uedProgeressBasic.scriptText?e("pre",{domProps:{textContent:s._s(s.map.uedProgeressBasic.scriptText)}}):s._e()])]):s._e(),s._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[s._v("无text用法")]),s._v(" "),e("span",{domProps:{innerHTML:s._s(s.map.uedProgeressNotxt.html)}}),s._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.view("uedProgeressNotxt")}}},[s._v("示例代码")])]),s._v(" "),s.map.uedProgeressNotxt.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),s._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:s.copy}}),s._v(" "),e("pre",{domProps:{textContent:s._s(s.map.uedProgeressNotxt.html)}}),s._v(" "),s.map.uedProgeressNotxt.scriptText?e("pre",{domProps:{textContent:s._s(s.map.uedProgeressNotxt.scriptText)}}):s._e()])]):s._e(),s._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[s._v("变化用法（js控制）")]),s._v(" "),e("span",{domProps:{innerHTML:s._s(s.map.uedProgeressDynamic.html)}}),s._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.view("uedProgeressDynamic")}}},[s._v("示例代码")])]),s._v(" "),s.map.uedProgeressDynamic.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),s._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:s.copy}}),s._v(" "),e("pre",{domProps:{textContent:s._s(s.map.uedProgeressDynamic.html)}}),s._v(" "),s.map.uedProgeressDynamic.scriptText?e("pre",{domProps:{textContent:s._s(s.map.uedProgeressDynamic.scriptText)}}):s._e()])]):s._e(),s._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[s._v("css3用法")]),s._v(" "),e("span",{domProps:{innerHTML:s._s(s.map.uedProgeressCss3.html)}}),s._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(t){s.view("uedProgeressCss3")}}},[s._v("示例代码")])]),s._v(" "),s.map.uedProgeressCss3.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),s._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:s.copy}}),s._v(" "),e("pre",{domProps:{textContent:s._s(s.map.uedProgeressCss3.html)}}),s._v(" "),s.map.uedProgeressCss3.scriptText?e("pre",{domProps:{textContent:s._s(s.map.uedProgeressCss3.scriptText)}}):s._e()])]):s._e()])])},staticRenderFns:[]};var d=e("VU/8")(o,c,!1,function(s){e("ek23")},null,null);t.default=d.exports},ek23:function(s,t){}});
//# sourceMappingURL=12.822c2a6a677b23d1c836.js.map