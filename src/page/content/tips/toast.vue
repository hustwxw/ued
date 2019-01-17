<template>
<transition name="comein-fade">
	<div class="content">
		<!-- 基本输入框 -->
		<div class="row">
			<span class="ued-tag-basic">基础用法</span><span v-html="map.uedTipsToast.html"></span><a href="javascript:void(0)" class="view" @click="view('uedTipsToast')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedTipsToast.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedTipsToast.html"></pre>
				<pre v-text="map.uedTipsToast.scriptText" v-if="map.uedTipsToast.scriptText"></pre>
			</div>
		</div>
		<div class="row">
			<span class="ued-tag-basic">SVG加载</span><span v-html="map.uedTipsLoading.html"></span><a href="javascript:void(0)" class="view" @click="view('uedTipsLoading')">示例代码</a>						
		</div>
		<div class="row" v-if="map.uedTipsLoading.flag">
			<span class="ued-tag-basic"></span>
			<div class="code">
				<input type="button" class="copy" @click="copy" value="复制代码">
				<pre v-text="map.uedTipsLoading.html"></pre>
				<pre v-text="map.uedTipsLoading.scriptText" v-if="map.uedTipsLoading.scriptText"></pre>
			</div>
		</div>
	</div>	
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"


export default{
	name: 'tipsToast',
	data(){
		return {
			map:{
				uedTipsToast:{
					flag : true,
					html : '<button class="ued-button-basic ued-button-color1 m_r_20" id="tosat1">点击弹出toast（H5版本或者PC高端浏览器，仿微信体验）</button><button class="ued-button-basic ued-button-color2" id="tosat2">点击弹出toast（兼容IE低版本）</button>',
					scriptText : '以下是按钮一toast的html代码:\n\n<div class="ued-tips-toast"> \n    <div class="ued-tips-toast-mask"></div> \n    <div class="ued-tips-toast-content"> \n        <i class="ued-tips-toast-loading ued-tips-toast-icon"></i> \n        <p class="ued-tips-toast-text">加载中</p> \n    </div> \n</div> \n\n以下是按钮二toast的html代码 \n\n<div class="ued-tips-loadingie"> \n    <div class="ued-tips-loading"></div> \n    <div class="ued-tips-loadingcontent"></div> \n    <p>加载中......</p> \n</div>'
				},
				uedTipsLoading:{
					flag : false,
					html : `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"> \n    <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path> \n    <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(150.342 20 20)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(215.285 25 25)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(75.2854 25 25)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-12 -12 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="7" fill="#333" transform="scale(1 1.27461)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="10" y="0" width="4" height="7" fill="#333" transform="scale(1 2.60794)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="20" y="0" width="4" height="7" fill="#333" transform="scale(1 2.05873)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n</svg> \n \n <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="10" fill="#333" transform="translate(0 16.1428)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="10" y="0" width="4" height="10" fill="#333" transform="translate(0 2.80949)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="20" y="0" width="4" height="10" fill="#333" transform="translate(0 10.5238)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="5.20954" width="4" height="20.5809" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="10" y="9.20954" width="4" height="12.5809" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="20" y="12.7905" width="4" height="5.41908" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="7" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="14" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="7.64682" width="4" height="14.7064" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="8" y="5.14682" width="4" height="19.7064" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="16" y="7.35318" width="4" height="15.2936" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg>`
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

		$("#tosat1").on("click",function(){
			$(".ued-tips-toast").remove();
			var html = `<div class="ued-tips-toast">
					        <div class="ued-tips-toast-mask"></div>
					        <div class="ued-tips-toast-content">
					            <i class="ued-tips-toast-loading ued-tips-toast-icon"></i>
					            <p class="ued-tips-toast-text">加载中</p>
					        </div>
					    </div>`;
			$("body").append(html);
			setTimeout(() => {
				$(".ued-tips-toast").remove();
			},1000);
		});

		$("#tosat2").on("click",function(){
			$(".ued-tips-loadingie").remove();
			var html = `<div class="ued-tips-loadingie">
							<div class="ued-tips-loading"></div>
							<div class="ued-tips-loadingcontent"></div>
							<p>加载中......</p>
						</div>`;
			$("body").append(html);
			setTimeout(() => {
				$(".ued-tips-loadingie").remove();
			},1000);
		});
	}
}	
</script>

<style>

</style>