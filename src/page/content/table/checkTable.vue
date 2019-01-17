<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span><span v-html="map.uedNormalTable.html.join('')"></span><a href="javascript:void(0)" class="view" @click="view('uedNormalTable')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedNormalTable.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedNormalTable.html.join('\n')"></pre>
				<pre v-text="map.uedNormalTable.scriptText" v-if="map.uedNormalTable.scriptText"></pre>
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
	name: 'formCheckbox',
	data(){
		return {
			map:{
				uedNormalTable:{
					flag : false,
					html : ['<table class="ued-checkbox-table">',
							'	<thead>',
							'		<tr>',
							'			<th>选择</th>',
							'			<th>标题一</th>',
							'			<th>标题二</th>',
							'			<th>标题三</th>',
							'			<th>长标题xxxxxx</th>',
							'			<th>标题四</th>',
							'			<th>长标题xxxxxxxxx</th>',
							'			<th>标题五</th>',
							'		</tr>',
							'	</thead>',
							'	<tbody>',
							'		<tr>',
							'			<td>',
							'				<div class="ued-form-checkbox ued-form-checkboxcheck">',
							'					<div class="radio-bg"></div> ',
							'					<input type="checkbox">', 
							'				</div>',
							'			</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxxx</td>',
							'			<td>xxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'		</tr>',
							'		<tr>',
							'			<td>',
							'				<div class="ued-form-checkbox ued-form-checkboxuncheck">', 
							'					<div class="radio-bg"></div> ',
							'					<input type="checkbox">', 
							'				</div>',
							'			</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxxx</td>',
							'			<td>xxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'		</tr>',
							'		<tr>',
							'			<td>',
							'				<div class="ued-form-checkbox ued-form-checkboxuncheck">', 
							'					<div class="radio-bg"></div> ',
							'					<input type="checkbox">', 
							'				</div>',
							'			</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxxx</td>',
							'			<td>xxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'		</tr>',
							'		<tr>',
							'			<td>',
							'				<div class="ued-form-checkbox ued-form-checkboxuncheck">', 
							'					<div class="radio-bg"></div> ',
							'					<input type="checkbox">', 
							'				</div>',
							'			</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxx</td>',
							'			<td>xxxxx</td>',
							'			<td>xxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'			<td>xxxxxxxxxx</td>',
							'		</tr>',
							'	</tbody>',
							'</table>']
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