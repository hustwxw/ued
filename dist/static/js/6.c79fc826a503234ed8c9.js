webpackJsonp([6],{"10ZA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("Tej3"),i("thjQ");var o=i("Quol"),a=i.n(o),s=(i("7t+N"),i("K/Iw")),n=i.n(s),r={name:"echart_pie",data:function(){return{map:{uedPieRing:(t={legend:{show:!1},title:{text:"总销售额",x:"center",y:"85%",textStyle:{fontSize:.24*window.FONTSIZE,color:"#999999"}},calculable:!0,startAngle:100,series:[{type:"pie",z:0,label:{normal:{position:"center"}},center:["50%","45%"],radius:["40%","70%"],data:[{value:5,tooltip:{show:!1},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ffc200"},{offset:1,color:"#ffb900"}])}},z:2},{value:3,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0091ff"},{offset:1,color:"#00e3ff"}])}}},{value:1,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#932233"},{offset:1,color:"#ff0000"}])}}}]}],tooltip:{show:!0}},{flag:!1,html:'<div class="block" id="basic"></div>',scriptText:n.a.plain(t),script:function(){echarts.init(document.getElementById("basic")).setOption(t)}}),uedPieNDGE1:function(){var t={legend:{show:!1},title:{text:"总销售额",x:"center",y:"85%",textStyle:{fontSize:.24*window.FONTSIZE,color:"#999999"}},calculable:!0,startAngle:100,roseType:"radius",series:[{type:"pie",z:0,label:{normal:{position:"center"}},center:["50%","45%"],radius:["40%","70%"],data:[{value:5,tooltip:{show:!1},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ffc200"},{offset:1,color:"#ffb900"}])}},z:2},{value:3,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0091ff"},{offset:1,color:"#00e3ff"}])}}},{value:1,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#932233"},{offset:1,color:"#ff0000"}])}}}]}],tooltip:{show:!0}};return{flag:!1,html:'<div class="block" id="ndgr1"></div>',scriptText:n.a.plain(t),script:function(){echarts.init(document.getElementById("ndgr1")).setOption(t)}}}(),uedPieNDGE2:function(){var t={legend:{show:!1},title:{text:"总销售额",x:"center",y:"85%",textStyle:{fontSize:.24*window.FONTSIZE,color:"#999999"}},calculable:!0,startAngle:100,roseType:"area",series:[{type:"pie",z:0,label:{normal:{position:"center"}},center:["50%","45%"],radius:["40%","70%"],data:[{value:5,tooltip:{show:!1},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ffc200"},{offset:1,color:"#ffb900"}])}},z:2},{value:3,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0091ff"},{offset:1,color:"#00e3ff"}])}}},{value:1,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#932233"},{offset:1,color:"#ff0000"}])}}}]}],tooltip:{show:!0}};return{flag:!1,html:'<div class="block" id="ndgr2"></div>',scriptText:n.a.plain(t),script:function(){echarts.init(document.getElementById("ndgr2")).setOption(t)}}}(),uedPieWord:function(){var t={legend:{show:!1},title:{text:"{a|本周}{b|89.3%}",x:"center",y:"40%",textStyle:{rich:{a:{fontSize:16,color:"#666666",padding:[0,10,0,0],fontFamily:"PingFang Regular"},b:{fontSize:16,color:"#3a404c",fontFamily:"PingFang Medium"}}},subtext:"{a|同比}{b|-1.6%}",subtextStyle:{rich:{a:{fontSize:16,color:"#666666",padding:[0,10,0,0],fontFamily:"PingFang Regular"},b:{fontSize:16,color:"#ff0000",fontFamily:"PingFang Medium"}}}},calculable:!0,startAngle:100,series:[{type:"pie",z:0,label:{normal:{position:"center"}},center:["50%","50%"],radius:["70%","85%"],data:[{value:100,tooltip:{show:!1},itemStyle:{normal:{color:"#f5f5f5"}},z:2},{value:300,tooltip:{show:!1},z:1,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ff1b00"},{offset:1,color:"#ffb700"}])}}}],hoverAnimation:!1}],tooltip:{show:!0}};return{flag:!1,html:'<div class="block" id="word"></div>',scriptText:n.a.plain(t),script:function(){echarts.init(document.getElementById("word")).setOption(t)}}}(),uedPieSolid:function(){var t={legend:{show:!1},grid:{},title:{x:"center",y:"38%",text:"13,205.8",show:!0,textStyle:{fontSize:30,fontFamily:"PingFang Bold",color:"#ffffff"},subtext:"万元",subtextStyle:{fontSize:20,fontFamily:"PingFang Regular",color:"#ffffff",fontWeight:"bold"}},calculable:!0,startAngle:100,series:[{type:"pie",z:0,label:{normal:{position:"center"}},center:["50%","50%"],radius:["0%","80%"],data:[{value:100,tooltip:{show:!1},label:{textStyle:{fontSize:12,color:"#84878e"}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ff1b00"},{offset:1,color:"#ffb700"}])}}}],hoverAnimation:!1}],tooltip:{show:!0}};return{flag:!1,html:'<div class="block" id="solid"></div>',scriptText:n.a.plain(t),script:function(){echarts.init(document.getElementById("solid")).setOption(t)}}}()}};var t},methods:{view:function(t){for(var e in this.map)e!=t&&(this.map[e].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var e=t.target.parentNode.getElementsByTagName("pre")[1].innerText;a()(e),alert("复制成功")}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"comein-fade"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"},[t._v("基础用法")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedPieRing.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedPieRing")}}},[t._v("示例代码")]),t._v(" "),i("span",{staticClass:"ued-tag-basic"},[t._v("南丁格尔图一")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedPieNDGE1.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedPieNDGE1")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedPieRing.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedPieRing.html)}}),t._v("\n        optoin参数："),t.map.uedPieRing.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedPieRing.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedPieNDGE1.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedPieNDGE1.html)}}),t._v("\n        optoin参数："),t.map.uedPieNDGE1.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedPieNDGE1.scriptText)}}):t._e()])]):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"},[t._v("南丁格尔图二")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedPieNDGE2.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedPieNDGE2")}}},[t._v("示例代码")]),t._v(" "),i("span",{staticClass:"ued-tag-basic"},[t._v("环内文字")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedPieWord.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedPieWord")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedPieNDGE2.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedPieNDGE2.html)}}),t._v("\n        optoin参数："),t.map.uedPieNDGE2.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedPieNDGE2.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedPieWord.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedPieWord.html)}}),t._v("\n        optoin参数："),t.map.uedPieWord.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedPieWord.scriptText)}}):t._e()])]):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"},[t._v("实心饼图")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedPieSolid.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedPieSolid")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedPieSolid.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedPieSolid.html)}}),t._v("\n        optoin参数："),t.map.uedPieSolid.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedPieSolid.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("Do8T")},null,null);e.default=c.exports},Do8T:function(t,e){}});
//# sourceMappingURL=6.c79fc826a503234ed8c9.js.map