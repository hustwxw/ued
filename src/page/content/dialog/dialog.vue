<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span>
			<span v-html="map.uedTipsToast.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedTipsToast')">示例代码</a>			
		</div>
		<div class="row" v-if="map.uedTipsToast.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedTipsToast.html"></pre>
				<pre v-text="map.uedTipsToast.scriptText" v-if="map.uedTipsToast.scriptText"></pre>
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
var dialog = require('art-dialog');
export default{
	name: 'tipsToast',
	data(){
		return {
			map:{
				uedTipsToast:{
					flag : true,
					html : '<button class="ued-button-basic ued-button-color1 m_r_20" id="tosat1">点击弹出对话框</button>',
					scriptText : '以下是按钮一toast的html代码:\n\n<div class="ued-tips-toast"> \n    <div class="ued-tips-toast-mask"></div> \n    <div class="ued-tips-toast-content"> \n        <i class="ued-tips-toast-loading ued-tips-toast-icon"></i> \n        <p class="ued-tips-toast-text">加载中</p> \n    </div> \n</div>'
				},
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

		$("#tosat1").on("click",function(){
			console.log(dialog)
			var d = dialog({
				title: '欢迎',
				content: '欢迎使用 artDialog 对话框组件！'
			});
			d.show();
		});

	}
}	
</script>

<style>

</style>