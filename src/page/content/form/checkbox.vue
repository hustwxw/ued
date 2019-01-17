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
			<span class="ued-tag-basic">多选用法</span><span v-html="map.uedRadioMuti.html"></span><a href="javascript:void(0)" class="view" @click="view('uedRadioMuti')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedRadioMuti.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedRadioMuti.html"></pre>
				<pre v-text="map.uedRadioMuti.scriptText" v-if="map.uedRadioMuti.scriptText"></pre>
			</div>
		</div>
	</div>	
</transition>
</template>

<script>
// import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
// import $ from "jquery"

export default{
	name: 'formCheckbox',
	data(){
		return {
			map:{
				uedRadioBasic:{
					flag : false,
					html : ' <div class="ued-form-checkbox ued-form-checkboxcheck"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>Checked</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxuncheck"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>unChecked</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxcheckdis"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>Checked Disabled</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxuncheckdis"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>unChecked Disabled</span> \n </div> \n ',
				},
				uedRadioMuti:{
					flag : false,
					html : ' <div class="ued-form-checkbox ued-form-checkboxuncheck" name="checkbox"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项一</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxuncheck" name="checkbox"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项二</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxuncheck" name="checkbox"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项三</span> \n </div> \n <div class="ued-form-checkbox ued-form-checkboxuncheck" name="checkbox"> \n   <div class="radio-bg"></div> \n   <input type="radio"><span>选项四</span> \n </div> \n ',
					script : function(){
						$('[name="checkbox"]').on("click",function(){
							if($(this).hasClass("ued-form-checkboxcheck")){
								$(this).removeClass("ued-form-checkboxcheck").addClass("ued-form-checkboxuncheck")
							}else{
								$(this).removeClass("ued-form-checkboxuncheck").addClass("ued-form-checkboxcheck")
							}
						});
					},
					scriptText : `示例脚本：\n$('[name="checkbox"]').on("click",function(){\n    if($(this).hasClass("ued-form-checkboxcheck")){\n        $(this).removeClass("ued-form-checkboxcheck").addClass("ued-form-checkboxuncheck")\n    }else{\n        $(this).removeClass("ued-form-checkboxuncheck").addClass("ued-form-checkboxcheck")\n    }\n});`
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