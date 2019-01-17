<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基础按钮 -->
		<div class="row">
			<span class="ued-tag-basic">基础按钮</span>
			<span v-html="map.uedButtonBasic.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedButtonBasic')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonBasic.html"></pre>
				<pre v-text="map.uedButtonBasic.scriptText" v-if="map.uedButtonBasic.scriptText"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag-basic"></span>
			<span v-html="map.uedButtonEmpty.html"></span>	
			<a href="javascript:void(0)" class="view" @click="view('uedButtonEmpty')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonEmpty.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonEmpty.html"></pre>
				<pre v-text="map.uedButtonEmpty.scriptText" v-if="map.uedButtonEmpty.scriptText"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag-basic"></span>
			<span v-html="map.uedButtonRound.html"></span>	
			<a href="javascript:void(0)" class="view" @click="view('uedButtonRound')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonRound.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonRound.html"></pre>
				<pre v-text="map.uedButtonRound.scriptText" v-if="map.uedButtonRound.scriptText"></pre>
			</div>
		</div>
		<!-- 禁用按钮 -->
		<div class="row">
			<span class="ued-tag-basic">禁用按钮</span>
			<span v-html="map.uedButtonDisabledBasic.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedButtonDisabledBasic')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonDisabledBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonDisabledBasic.html"></pre>
				<pre v-text="map.uedButtonDisabledBasic.scriptText" v-if="map.uedButtonDisabledBasic.scriptText"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag-basic"></span>
			<span v-html="map.uedButtonDisabledEmpty.html"></span>	
			<a href="javascript:void(0)" class="view" @click="view('uedButtonDisabledEmpty')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonDisabledEmpty.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonDisabledEmpty.html"></pre>
				<pre v-text="map.uedButtonDisabledEmpty.scriptText" v-if="map.uedButtonDisabledEmpty.scriptText"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag-basic"></span>
			<span v-html="map.uedButtonDisabledRound.html"></span>	
			<a href="javascript:void(0)" class="view" @click="view('uedButtonDisabledRound')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonDisabledRound.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonDisabledRound.html"></pre>
				<pre v-text="map.uedButtonDisabledRound.scriptText" v-if="map.uedButtonDisabledRound.scriptText"></pre>
			</div>
		</div>
		<!-- 文字按钮 -->
		<div class="row">
			<span class="ued-tag-basic">文字按钮</span>
			<span v-html="map.uedButtonText.html"></span>	
			<a href="javascript:void(0)" class="view" @click="view('uedButtonText')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedButtonText.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedButtonText.html"></pre>
				<pre v-text="map.uedButtonText.scriptText" v-if="map.uedButtonText.scriptText"></pre>
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
	name: 'basicButton',
	data(){
		return {
			map:{
				uedButtonBasic:{
					flag : false,
					html : ' <button class="ued-button-basic ued-button-color1">BUTTON</button> \n <button class="ued-button-basic ued-button-color2">BUTTON</button> \n <button class="ued-button-basic ued-button-color3">BUTTON</button> \n <button class="ued-button-basic ued-button-color4">BUTTON</button> \n <button class="ued-button-basic">BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }'
				},
				uedButtonEmpty:{
					flag : false,
					html : ' <button class="ued-button-empty ued-button-color1">BUTTON</button> \n <button class="ued-button-empty ued-button-color2">BUTTON</button> \n <button class="ued-button-empty ued-button-color3">BUTTON</button> \n <button class="ued-button-empty ued-button-color4">BUTTON</button> \n <button class="ued-button-empty ">BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:#0486FE;/*字体颜色*/ \n         background-color: #E6F1FC;/*背景色*/ \n         border: 1px solid #A3D0FD;	/*边框*/ \n     }'
				},
				uedButtonRound:{
					flag : false,
					html : ' <button class="ued-button-basic ued-button-round ued-button-color1">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color2">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color3">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color4">BUTTON</button> \n <button class="ued-button-basic ued-button-round ">BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }'
				},
				uedButtonDisabledBasic:{
					flag : false,
					html : ' <button class="ued-button-basic ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-basic" disabled>BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }'
				},
				uedButtonDisabledEmpty:{
					flag : false,
					html : ' <button class="ued-button-empty ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-empty " disabled>BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:#0486FE;/*字体颜色*/ \n         background-color: #E6F1FC;/*背景色*/ \n         border: 1px solid #A3D0FD;	/*边框*/ \n     }'
				},
				uedButtonDisabledRound:{
					flag : false,
					html : ' <button class="ued-button-basic ued-button-round ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round " disabled>BUTTON</button>',
					scriptText : 'ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }'
				},
				uedButtonText:{
					flag : false,
					html : ' <a href="javascript:void(0)" class="ued-button-text ued-button-style1">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style2">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style3">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style4">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style5" disabled>文字按钮</a>',
					scriptText : ''
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