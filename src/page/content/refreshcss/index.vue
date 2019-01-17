<template>
<transition name="comein-fade">
	<div class="content">
		<p class="title">点击<a href="https://hustwxw.github.io/solomonwu/refreshcss/refreshcss.zip" target="_blank">此处</a>下载脚手架</p>
		<div class="desc">
			<p>使用说明:</p>
			<p>1、目录结构如下图:</p>
			<img src="../../../assets/images/refreshcss.jpg">
			<p class="p1">bs-config.js:browser-sync的配置</p>
			<p class="p1">gulpfile.js:gulp的配置</p>
			<p class="p1">index.html:入口文件，负责跳转到static</p>
			<p class="p1">node-modules:npm依赖包</p>
			<p class="p1">package-lock.json,package.json:npm依赖包配置</p>
			<p class="p1">static:静态页面源代码</p>
			<p>2、安装node、npm，并使用npm安装gulp和browser-sync，命令如下：</p>
			<p style="border:1px solid #ddd;padding-left:5px;border-bottom:0px;">npm install gulp</p>
			<p style="border:1px solid #ddd;padding-left:5px;border-top:0px;border-bottom: 0px;">npm install browser-sync</p>
			<p style="border:1px solid #ddd;padding-left:5px;border-top:0px;">npm install</p>
			<p>3、cmd控制台中运行如下命令：</p>
			<p style="border:1px solid #ddd;padding-left:5px;">gulp bs</p>
			<p>即会自动打开index.html跳转到static中的index.html，这个可以自己在index.html中修改。</p>
			<p>4、在static正常写代码，ctrl+s后，浏览器就会自动刷新，避免手动刷新浏览器</p>
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
	name: 'refreshcss',
	data(){
		return {
			
		};
	},
	methods:{
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{show:true});		
	}
}	
</script>

<style scoped>

	img{
		width: 220px;
		height: 160px;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.title{
		display: inline-flex;
		width:100%;
		height:30px;
		font-size: 20px;
		align-items: center;
		justify-content: flex-start;
	}

	.desc{
		display: inline-flex;
		box-sizing: border-box;
		border:1px solid #ddd;
		min-height: 10px;
		height: auto;
		width:100%;
		margin-top:10px;
		border-radius: 5px;
		flex-direction: column;
		padding:20px;
	}

	.desc p{
		display: inline-flex;
		height:30px;
		align-items: center;
		justify-content: flex-start;
		font-size: 16px;
	}

	.p1{
		color:#999;
		font-style: italic;
	}

</style>