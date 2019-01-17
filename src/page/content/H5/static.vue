<template>
<transition name="comein-fade">
	<div class="content">
		<p class="title">以下页面均是静态页面的效果</p>
		<div class="wrap">
			<a href="https://hustwxw.github.io/solomonwu/h5static/html/上拉刷新.html" target="_blank">上拉刷新（基于iscroll5）demo</a>
			<a href="https://hustwxw.github.io/solomonwu/h5static/html/左滑删除.html" target="_blank">左滑删除（基于swiper）demo</a>
			<a href="http://www.swiper.com.cn/demo/index.html">轮播图Demo（swiper）</a>
			<a href="https://hustwxw.github.io/solomonwu/h5static/images/AirlineIcon.zip">各种航司logo(Zip)</a>
			<a href="https://hustwxw.github.io/solomonwu/h5static/html/airs.html" target="_blank">各种航司logo</a>
			<a href="https://hustwxw.github.io/solomonwu/lesslib/less-lib.less" target="_blank">basic less 源码</a>
		</div>
		<div class="wrap m_t_10" v-if="chrome">
			<a href="view-source:https://hustwxw.github.io/solomonwu/h5static/html/上拉刷新.html" target="_blank">上拉刷新（基于iscroll5）source</a>
			<a href="view-source:https://hustwxw.github.io/solomonwu/h5static/html/左滑删除.html" target="_blank">左滑删除（基于swiper）source</a>
		</div>
	</div>	
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
import $ from "jquery"

export default{
	name: 'basicBox',
	data(){
		return {
			// chrome : navigator.userAgent.toLocaleLowerCase().indexOf("chrome") > -1
			chrome : false
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
	}
}	
</script>

<style scoped>
.title{
	display: inline-flex;
	width:100%;
	height:40px;
	justify-content: flex-start;
	align-items: center;
	font-size: 14px;
	margin-bottom: 10px;
}
.wrap{
	display: flex;
	flex-wrap: wrap;
	width:100%;
	height:auto;
}
.wrap a{
	display: inline-flex;
	width:auto;
	min-width: 100px;
	font-size: 14px;
	text-decoration: none;
	align-items: center;
	margin-right: 10px;
	border:1px solid #666666;
	padding:10px;
	box-sizing: border-box;
}
</style>