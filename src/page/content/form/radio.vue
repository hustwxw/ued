<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span><span v-html="map.uedRadioBasic.html"></span><a href="javascript:void(0)" class="view" @click="view('uedRadioBasic')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedRadioBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedRadioBasic.html"></pre>
				<pre v-text="map.uedRadioBasic.scriptText" v-if="map.uedRadioBasic.scriptText"></pre>
			</div>
		</div>
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">单选用法</span><span v-html="map.uedRadioSingle.html"></span><a href="javascript:void(0)" class="view" @click="view('uedRadioSingle')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedRadioSingle.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedRadioSingle.html"></pre>
				<pre v-text="map.uedRadioSingle.scriptText" v-if="map.uedRadioSingle.scriptText"></pre>
			</div>
		</div>
	</div>	
</transition>
</template>

<script>

import sweet from "sweetalert"
import copy from "copy-to-clipboard"
// import $ from "jquery"

export default{
	name: 'formRadio',
	data(){
		return {
			map:{
				uedRadioBasic:{
					flag : false,
					html : ' <div class="ued-form-radio ued-form-radiocheck"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>Checked</span> \n </div> \n <div class="ued-form-radio ued-form-radiouncheck"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>unChecked</span> \n </div> \n <div class="ued-form-radio ued-form-radiocheckdis"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>Checked Disabled</span> \n </div> \n <div class="ued-form-radio ued-form-radiouncheckdis"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>unChecked Disabled</span> \n </div> \n ',
				},
				uedRadioSingle:{
					flag : false,
					html : ' <div class="ued-form-radio ued-form-radiouncheck" name="radio"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项一</span> \n </div> \n <div class="ued-form-radio ued-form-radiouncheck" name="radio"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项二</span> \n </div> \n <div class="ued-form-radio ued-form-radiouncheck" name="radio"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项三</span> \n </div> \n <div class="ued-form-radio ued-form-radiouncheck" name="radio"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项四</span> \n </div>',
					script : function(){
						var radios = $('[name="radio"]');
						radios.on("click",function(){
							radios.addClass("ued-form-radiouncheck").removeClass("ued-form-radiocheck");
							$(this).addClass("ued-form-radiocheck").removeClass("ued-form-radiouncheck");
						});
					},
					scriptText : `示例脚本：\nvar radios = $('[name="radio"]');\nradios.on("click",function(){\n    radios.addClass("ued-form-radiouncheck").removeClass("ued-form-radiocheck");\n    $(this).addClass("ued-form-radiocheck").removeClass("ued-form-radiouncheck");\n});`
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
	}
}	
</script>

<style>

</style>