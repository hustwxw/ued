<template>
<transition name="comein-fade">
	<div class="content">
		<div class="row">
			<span class="ued-tag-basic">盒子</span>
			<span v-html="map.uedBoxBasic.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedBoxBasic')">示例代码</a>	
			<span v-html="map.uedBoxPadding.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedBoxPadding')">示例代码</a>	
			<span v-html="map.uedBoxMargin.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedBoxMargin')">示例代码</a>	
		</div>
		<div class="row">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<!-- <input type="button" class="copy" @click="copy" value="复制代码"> -->
				<pre> ued-box-basic: 基础box样式 <br/> ued-box-padding: 默认内边距样式，20px <br/> ued-box-margin: 默认外边距样式，20px</pre>
			</div>			
		</div>
		<div class="row" v-if="map.uedBoxBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedBoxBasic.html"></pre>
				<pre v-text="map.uedBoxBasic.scriptText" v-if="map.uedBoxBasic.scriptText"></pre>
			</div>			
		</div>
		<div class="row" v-if="map.uedBoxPadding.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedBoxPadding.html"></pre>
				<pre v-text="map.uedBoxPadding.scriptText" v-if="map.uedBoxPadding.scriptText"></pre>
			</div>
		</div>
		<div class="row" v-if="map.uedBoxMargin.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedBoxMargin.html"></pre>
				<pre v-text="map.uedBoxMargin.scriptText" v-if="map.uedBoxMargin.scriptText"></pre>
			</div>
		</div>

		<div class="row">
			<span class="ued-tag-basic">Flex布局</span>
			<span v-html="map.uedFlexBasic.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedFlexBasic')">示例代码</a>	
			<span v-html="map.uedFlexRow.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedFlexRow')">示例代码</a>	
			<span v-html="map.uedFlexColumn.html"></span>
			<a href="javascript:void(0)" class="view" @click="view('uedFlexColumn')">示例代码</a>	
		</div>
		<div class="row" v-if="map.uedFlexBasic.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedFlexBasic.html"></pre>
				<pre v-text="map.uedFlexBasic.scriptText" v-if="map.uedFlexBasic.scriptText"></pre>
			</div>						
		</div>
		<div class="row" v-if="map.uedFlexRow.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedFlexRow.html"></pre>
				<pre v-text="map.uedFlexRow.scriptText" v-if="map.uedFlexRow.scriptText"></pre>
			</div>
		</div>
		<div class="row" v-if="map.uedFlexColumn.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedFlexColumn.html"></pre>
				<pre v-text="map.uedFlexColumn.scriptText" v-if="map.uedFlexColumn.scriptText"></pre>
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
	name: 'basicBox',
	data(){
		return {
			map:{
				uedBoxBasic:{
					flag : false,
					html : '<div class="ued-box-basic">测试文字-无内外边距</div>',
					scriptText : '为了显示盒子模型，给盒子加上了颜色和边框颜色方便展示，实际使用不会有这些颜色。\n ued-box-basic默认宽高200px,如果不符合需求则需要自己调整宽高'
				},
				uedBoxPadding:{
					flag : false,
					html : '<div class="ued-box-basic ued-box-padding">测试文字-有20px内边距</div>',
					scriptText : 'ued-box-padding默认内边距20px，如不符合需求则需要自己调整'
				},
				uedBoxMargin:{
					flag : false,
					html : '<div class="ued-box-basic ued-box-margin"><span>测试文字-有20px外边距</span></div>',
					scriptText : 'ued-box-margin默认外边距20px，如不符合需求则需要自己调整'
				},

				// Flex基础布局

				uedFlexBasic:{
					flag : false,
					html : ['<div class="ued-flex-basic ued-flex-coloumn ued-flex-inline ">\n',
										'  <div class="ued-flex-basic-title ued-flex-center">\n',
										'			title\n',
										'  </div>\n',
										'  <div class="ued-flex-inner">\n',
											'    <div class="ued-flex-basic ued-flex-basic-left ued-flex-center">\n',
											'				left\n',
											'    </div>\n',
											'    <div class="ued-flex-basic ued-flex-basic-right ued-flex-center">\n',
											'				right\n',
											'    </div>\n',
										'  </div>\n',
									'</div>'].join(''),
					scriptText : ''
				},

				uedFlexRow:{
					flag : false,
					html : ['<div class="ued-flex-basic ued-flex-coloumn ued-flex-inline">\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			1\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			2\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			3\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			4\n',
										'  </div>\n',										
									'</div>'].join(''),
					scriptText : ''
				},

				uedFlexColumn:{
					flag : false,
					html : ['<div class="ued-flex-basic ued-flex-inline">\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			1\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			2\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			3\n',
										'  </div>\n',
										'  <div class="ued-flex-row ued-flex-center">\n',
										'			4\n',
										'  </div>\n',										
									'</div>'].join(''),
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