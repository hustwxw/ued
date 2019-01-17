<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span><span v-html="map.uedInputBasic.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputBasic')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputBasic.html"></pre>
				<pre v-text="map.uedInputBasic.scriptText" v-if="map.uedInputBasic.scriptText"></pre>
			</div>
		</div>
		<!-- 下拉框 -->
		<div class="row">
			<span class="ued-tag-basic">下拉框</span>
			<span v-html="map.uedInputSelect.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputSelect')">示例代码</a>			
		</div>
		<div class="row" v-if="map.uedInputSelect.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputSelect.html"></pre>
				<pre v-text="map.uedInputSelect.scriptText" v-if="map.uedInputSelect.scriptText"></pre>
			</div>
		</div>
		<!-- 日历输入框 -->
		<div class="row">
			<span class="ued-tag-basic">日历组件</span><span v-html="map.uedInputCalendar.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputCalendar')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputCalendar.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputCalendar.html"></pre>
				<pre v-text="map.uedInputCalendar.scriptText" v-if="map.uedInputCalendar.scriptText"></pre>
				<pre v-html="map.uedInputCalendar.scriptHtml" v-if="map.uedInputCalendar.scriptHtml"></pre>				
			</div>
		</div>
		<!-- 城市输入框 -->
		<div class="row">
			<span class="ued-tag-basic">城市组件</span><span v-html="map.uedInputCity.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputCity')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputCity.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputCity.html"></pre>
				<pre v-text="map.uedInputCity.scriptText" v-if="map.uedInputCity.scriptText"></pre>
				<pre v-html="map.uedInputCity.scriptHtml" v-if="map.uedInputCity.scriptHtml"></pre>				
			</div>
		</div>
		<!-- 禁用输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 禁用</span><span v-html="map.uedInputNoAllowed.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputNoAllowed')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputNoAllowed.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputNoAllowed.html"></pre>
				<pre v-text="map.uedInputNoAllowed.scriptText" v-if="map.uedInputNoAllowed.scriptText"></pre>
			</div>
		</div>
		<!-- 成功输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 成功</span><span v-html="map.uedInputSuccess.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputSuccess')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputSuccess.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputSuccess.html"></pre>
				<pre v-text="map.uedInputSuccess.scriptText" v-if="map.uedInputSuccess.scriptText"></pre>
			</div>
		</div>
		<!-- 错误输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法 -- 错误</span><span v-html="map.uedInputError.html"></span><a href="javascript:void(0)" class="view" @click="view('uedInputError')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedInputError.flag">
			<span class="ued-tag-basic"></span>			
			<div class="code">		
				<input type="button" class="copy" @click="copy" value="复制代码">		
				<pre v-text="map.uedInputError.html"></pre>
				<pre v-text="map.uedInputError.scriptText" v-if="map.uedInputError.scriptText"></pre>
			</div>
		</div>
		<!-- 复合型输入框 -->
		<div class="row">
			<span class="ued-tag-basic">复合型输入框</span>
			<span v-html="map.uedInputCompose.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputCompose')">示例代码</a>
			<span v-html="map.uedInputComposeBg.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputComposeBg')">示例代码</a>
		</div>
		<div class="row" v-if="map.uedInputCompose.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputCompose.html"></pre>
				<pre v-text="map.uedInputCompose.scriptText" v-if="map.uedInputCompose.scriptText"></pre>
			</div>
		</div>
		<div class="row" v-if="map.uedInputComposeBg.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputComposeBg.html"></pre>
				<pre v-text="map.uedInputComposeBg.scriptText" v-if="map.uedInputComposeBg.scriptText"></pre>
			</div>
		</div>		
		<!-- 文本域 -->
		<div class="row">
			<span class="ued-tag-basic">文本域</span>
			<span v-html="map.uedInputTextarea.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedInputTextarea')">示例代码</a>			
		</div>
		<div class="row" v-if="map.uedInputTextarea.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedInputTextarea.html"></pre>
				<pre v-text="map.uedInputTextarea.scriptText" v-if="map.uedInputTextarea.scriptText"></pre>
			</div>
		</div>
	</div>	
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
// import $ from "jquery"

export default{
	name: 'formInput',
	data(){
		return {
			map:{
				uedInputBasic:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" placeholder="请输入内容">',
				},
				uedInputCalendar:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" placeholder="点击出现日历" id="calendar">',
					scriptText : `示例脚本： \n var initParam = { \n   input: $("#calendar"), \n   isDoubleMonth: true, \n   zIndex: true, \n   minDate: '1990/01/01', \n   maxDate: '2050/12/31', \n }; \n new Calendar(initParam);`,
					scriptHtml : `脚本依赖于jquery和<a href="http://underscorejs.org/underscore-min.js" target="_blank">underscore</a>两个库文件 \n\n >> <a href="https://hustwxw.github.io/solomonwu/src/lib/calendar.js" target="_blank">Calendar脚本下载</a>`
				},
				uedInputCity:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" placeholder="点击出现城市" id="city">',
					scriptText : `示例脚本： \n var initParam = { \n   input: $("#city"), \n   isShowHot: true, \n   isShowAll: true, \n   tab: ["ABCDEF", "GHIJ", "KLMN", "PQST", "WXYZ"], \n   width: 432, \n   onSelectCity: function(data) { \n     $('#city').val(data.city + "(" + data.code + ")"); \n   }}; \n\n new Calendar(initParam);`,
					scriptHtml : `脚本依赖于jquery和<a href="http://underscorejs.org/underscore-min.js" target="_blank">underscore</a>两个库文件 \n\n >> <a href="https://hustwxw.github.io/solomonwu/src/lib/city.js" target="_blank">city脚本下载</a>`
				},
				uedInputNoAllowed:{
					flag : false,
					html : '<input type="text" class="ued-input-basic" disabled placeholder="内容" value="这里禁止输入">'
				},
				uedInputCompose:{
					flag : false,
					html : '<div class="ued-input-compose" id="ued-input-compose" onselectstart="return false"> \n     <div class="ued-input-compose-tag">请选择<i></i></div> \n     <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n     <ul class="none"> \n         <li>选项一</li> \n         <li>选项二</li> \n         <li>选项三</li> \n     </ul> \n</div>',
					script : function(){
						$("#ued-input-compose .ued-input-compose-tag").on("click",function(){
							if($(this).parent().find('ul').hasClass('none')){
								$(this).parent().find('ul').removeClass('none')
							}else{
								$(this).parent().find('ul').addClass('none')
							}
						});
						$("#ued-input-compose li").on("click",function(){
							$(this).parent("ul").addClass('none');
							$("#ued-input-compose .ued-input-compose-tag").html($(this).html() + "<i></i>");
						});
					},
					scriptText : 
						`示例脚本：\n $("#ued-input-compose .ued-input-compose-tag").on("click",function(){ \n     if($(this).parent().find('ul').hasClass('none')){ \n         $(this).parent().find('ul').removeClass('none') \n     }else{ \n         $(this).parent().find('ul').addClass('none') \n     } \n }); \n $("#ued-input-compose li").on("click",function(){ \n     $(this).parent("ul").addClass('none'); \n     $("#ued-input-compose .ued-input-compose-tag").html($(this).html() + "<i></i>"); \n });`
				},
				uedInputSelect:{
					flag : false,
					html : '<div class="ued-input-basic ued-input-select" id="ued-input-select" onselectstart="return false">\n    <span>--请选择--</span>\n    <div class="ued-input-selectarrow"><i></i>\n    </div>\n    <ul class="none"> \n         <li>选项一</li> \n         <li>选项二</li> \n         <li>选项三</li> \n    </ul> \n</div>',
					script : function(){
						$("#ued-input-select .ued-input-selectarrow").on("click",function(){
							if($(this).parent().find('ul').hasClass('none')){
								$(this).parent().find('ul').removeClass('none')
							}else{
								$(this).parent().find('ul').addClass('none')
							}
						});
						$("#ued-input-select li").on("click",function(){
							$(this).parent("ul").addClass('none');
							$("#ued-input-select span").html($(this).html());
						});
					},
					scriptText : `示例脚本：\n$("#ued-input-select .ued-input-selectarrow").on("click",function(){\n    if($(this).parent().find('ul').hasClass('none')){\n        $(this).parent().find('ul').removeClass('none')\n    }else{\n        $(this).parent().find('ul').addClass('none')\n    }\n});\n$("#ued-input-select li").on("click",function(){\n    $(this).parent("ul").addClass('none');\n    $("#ued-input-select span").html($(this).html());\n});`
				},
				uedInputComposeBg:{
					flag : false,
					html : '<div class="ued-input-compose ued-input-compose_bg"> \n     <div class="ued-input-compose-tag">Http://</div> \n     <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n</div>'					
				},
				uedInputSuccess:{
					flag : false,
					html : '<div class="ued-input-normal ued-input-success"> \n     <input type="text" class="ued-input-basic"><i></i> \n</div>',
					scriptText : '恢复正常输入框，可以去掉ued-input-success样式类即可'
				},
				uedInputError:{
					flag : false,
					html : '<div class="ued-input-normal ued-input-error"> \n     <input type="text" class="ued-input-basic"><i></i> \n</div>',
					scriptText : '恢复正常输入框，可以去掉ued-input-error样式类即可'
				},
				uedInputTextarea:{
					flag : false,
					html : '<textarea class="ued-input-basic ued-input-textarea"></textarea>'
				}
			}
		};
	},
	methods:{
		view(param){
			var _this = this;
			for(var p in this.map){
				(p != param) && (_this.map[p].flag = false);
			}
			(_this.map[param].flag)?(_this.map[param].flag = false):(_this.map[param].flag = true);
		},
		copy(event){
			var code = event.target.parentNode.getElementsByTagName('pre')[0].innerText;
			copy(code)
		}
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{show:true});
		
		for(var p in this.map){
			if(this.map[p].script){
				this.map[p].script();
			}
		}

        var initParam = {
            input: $("#calendar"),
            isDoubleMonth: true,
            zIndex: true,
            minDate: '1990/01/01',
            maxDate: '2050/12/31',
        };

        new eking.calendar(initParam);

        var cityParam = {
            input: $('#city'),
            isShowHot: true,
            isShowAll: true,
            tab: ["ABCDEF", "GHIJ", "KLMN", "PQST", "WXYZ"],
            width: 432,
            onSelectCity: function(data) {
                $('#city').val(data.city + "(" + data.code + ")");
            }
        }

        new eking.city(cityParam);
	}
}	
</script>

<style>

</style>