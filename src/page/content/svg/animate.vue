<template>
<transition name="comein-fade">
	<div class="content">
		<div class="item">
			<svg width="100%" height="100%">
			    <circle cx="50%" cy="50%" r="30" style="fill:#ff6600" >
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;50;0"
			                begin="0s"
			                dur="5s"
			                repeatCount="indefinite"
			        />
			        <animate
			                attributeName="fill-opacity"
			                attributeType="css"
			                values="1;0;1"
			                begin="0s"
			                dur="5s"
			                repeatCount="indefinite"
			        />
			    </circle>
			</svg>
		</div>
		<div class="item">
			<svg width="100%" height="100%">
			    <circle cx="10%" cy="50%" r="0" style="fill:#ff6600">
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;10%"
			                begin="0s"
			                dur="2s"
			                fill="freeze"
			                id="c1"
			        />
			    </circle>
			    <circle cx="30%" cy="50%" r="0" style="fill:#ff6600">
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;10%"
			                begin="c1.end"
			                dur="2s"
			                fill="freeze"
			                id="c2"
			        />
			    </circle>
			    <circle cx="50%" cy="50%" r="0" style="fill:#ff6600">
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;10%"
			                begin="c2.end"
			                dur="2s"
			                fill="freeze"
			                id="c3"
			        />
			    </circle>
			    <circle cx="70%" cy="50%" r="0" style="fill:#ff6600">
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;10%"
			                begin="c3.end"
			                dur="2s"
			                fill="freeze"
			                id="c4"
			        />
			    </circle>
			    <circle cx="90%" cy="50%" r="0" style="fill:#ff6600">
			        <animate
			                attributeName="r"
			                attributeType="XML"
			                values="0;10%"
			                begin="c4.end"
			                dur="2s"
			                fill="freeze"
			                id="c5"
			        />
			    </circle>
			</svg>
		</div>
		<div class="item">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
			    <g fill="rgba(255,0,0,1)">
			        <path d="M 0 70 Q 75 39, 150 70 T 300 70 T 450 70 T 600 70 T 750 70 V 100 H 0 V 0"></path>
			        <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-300" dur="1.5s" repeatCount="indefinite"></animateTransform>
			    </g>
			    <g fill="rgba(0,255,0,0.5)">
			        <path d="M 0 70 Q 87.5 47, 175 70 T 350 70 T 525 70 T 700 70 T 875 70 T 1050 70 V 100 H 0 V 0"></path>
			        <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-350" dur="3s" repeatCount="indefinite"></animateTransform>
			    </g>
			    <g fill="rgba(0,0,255,0.18)" transform="translate(-903.868 0)">
			        <path d="M 0 70 Q 135 36, 270 70 T 540 70 T 810 70 T 1080 70 V 100 H 0 V 0" transform="translate(-38.232284367796474, 0)"></path>
			        <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-540" dur="2s" repeatCount="indefinite"></animateTransform>
			    </g>
			</svg> 
		</div>
		<div class="item">
			<svg viewBox="0 0 100 100" style="width:100%;height:100%">
				<path d="M 50,50 m 0,-47
                a 47,47 0 1 1 0,94
                a 47,47 0 1 1 0,-94" stroke="#eaeef2" stroke-width="6" fill-opacity="0">
         </path>
         <path d="M 50,50 m 0,-47
                a 47,47 0 1 1 0,94
                a 47,47 0 1 1 0,-94" stroke-linecap="round" stroke="#2d8cf0" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.31px, 295.31px; stroke-dashoffset: 59.0619px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease 0s;"></path>
          <!-- 
          	stroke-dasharray 用于创建虚线

          	绘制虚线: 一个参数时： 表示一段虚线长度和每段虚线之间的间距 
						两个参数或者多个参数时：一个表示长度，一个表示间距

						stroke-dashoffset 定义一条线，文本或元素距离（相当于基于position：relative；设置left值。只是不像left单纯的基于x方向设置， stroke-dashoffset是基于svg路径设置的）


           -->
       </svg>
		</div>
		<div class="item"></div>
	</div>	
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
// import $ from "jquery"

export default{
	name: 'svg_animate',
	data(){
		return {
			
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

<style lang="less" scoped>
.content{
	flex-wrap: wrap;
	justify-content: space-between;
	padding:10px;
	.item{
		display: inline-flex;
		width:18%;
		height:150px;
		border-radius: 6px;
		border:1px solid #ddd;
		margin-right: 10px;
		box-sizing: border-box;
	}
}

</style>